import type { Parser, SupportOptions, ParserOptions } from 'prettier';
import { parsers as babelParsers } from 'prettier/plugins/babel';
import { parsers as typescriptParsers } from 'prettier/plugins/typescript';
import { parsers as htmlParsers } from 'prettier/plugins/html';
import { parsers as postcssParsers } from 'prettier/plugins/postcss';
import sortPackageJson from 'sort-package-json';

// 定义插件选项
const options: SupportOptions = {
  sortJsonKeys: {
    type: 'boolean',
    category: 'Global',
    default: true,
    description: '是否对JSON文件的键进行排序',
  },
  importOrder: {
    type: 'string',
    category: 'JavaScript',
    default: '',
    description: 'import语句排序规则，使用逗号分隔不同组，使用^表示正则匹配，例如：^react,^@/,^[./]',
  },
  vueIndentScriptAndStyle: {
    type: 'boolean',
    category: 'Vue',
    default: true,
    description: '是否缩进Vue文件中的<script>和<style>标签内容',
  },
};

// 用于排序JSON对象键的函数
function sortObjectKeys(obj: Record<string, any>, defaultOrder: string[] = []): Record<string, any> {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  // 递归处理嵌套对象
  const sortedObj: Record<string, any> = {};
  
  // 首先按照默认顺序添加键
  for (const key of defaultOrder) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      sortedObj[key] = typeof obj[key] === 'object' && obj[key] !== null 
        ? sortObjectKeys(obj[key]) 
        : obj[key];
    }
  }
  
  // 然后添加剩余的键（按字母顺序）
  Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .forEach(key => {
      if (!defaultOrder.includes(key)) {
        sortedObj[key] = typeof obj[key] === 'object' && obj[key] !== null 
          ? sortObjectKeys(obj[key]) 
          : obj[key];
      }
    });
  
  return sortedObj;
}

// 扩展JSON解析器
const jsonParser: Parser = {
  ...babelParsers.json,
  parse: (text: string, options: ParserOptions) => {
    const ast = babelParsers.json.parse(text, options);
    
    // 如果是package.json，使用sort-package-json库进行排序
    if (options.filepath && options.filepath.endsWith('package.json') && options.sortJsonKeys !== false) {
      try {
        const packageJson = JSON.parse(text);
        const sortedPackageJson = sortPackageJson(packageJson);
        // 我们需要重新解析排序后的package.json
        return babelParsers.json.parse(
          JSON.stringify(sortedPackageJson, null, 2),
          options
        );
      } catch (error) {
        // 解析失败时回退到原始AST
        console.error('解析package.json失败:', error);
        return ast;
      }
    }
    
    // 处理其他JSON文件
    if (options.sortJsonKeys !== false) {
      try {
        const jsonObj = JSON.parse(text);
        const sortedJsonObj = sortObjectKeys(jsonObj);
        return babelParsers.json.parse(
          JSON.stringify(sortedJsonObj, null, 2),
          options
        );
      } catch (error) {
        // 解析失败时回退到原始AST
        console.error('解析JSON失败:', error);
        return ast;
      }
    }
    
    return ast;
  },
};

// 定义ESLint配置文件排序规则
const eslintConfigOrder = [
  'root', 'env', 'extends', 'parser', 'parserOptions', 'plugins', 'settings', 'rules'
];

// 处理.eslintrc.json文件的特殊排序
const eslintJsonParser: Parser = {
  ...jsonParser,
  parse: (text: string, options: ParserOptions) => {
    const ast = jsonParser.parse(text, options);
    
    // 检查是否是.eslintrc.json文件
    if (options.filepath && 
        (options.filepath.endsWith('.eslintrc.json') || 
         options.filepath.endsWith('.eslintrc')) && 
        options.sortJsonKeys !== false) {
      try {
        const eslintConfig = JSON.parse(text);
        const sortedEslintConfig = sortObjectKeys(eslintConfig, eslintConfigOrder);
        return babelParsers.json.parse(
          JSON.stringify(sortedEslintConfig, null, 2),
          options
        );
      } catch (error) {
        console.error('解析ESLint配置失败:', error);
        return ast;
      }
    }
    
    return ast;
  },
};

// 修改JavaScript/TypeScript解析器，处理import排序
const jsParser: Parser = {
  ...babelParsers.babel,
  preprocess: (text: string, options: ParserOptions) => {
    if (options.importOrder && typeof options.importOrder === 'string') {
      // 这里是一个简化实现，实际上需要更复杂的AST处理
      // 在完整实现中，我们需要分析AST并重新排序import语句
      // 此处仅作为示例
      return text;
    }
    return text;
  },
};

const tsParser: Parser = {
  ...typescriptParsers.typescript,
  preprocess: (text: string, options: ParserOptions) => {
    if (options.importOrder && typeof options.importOrder === 'string') {
      // 与JavaScript解析器相同，这里需要真正的AST处理
      return text;
    }
    return text;
  },
};

// 修改Vue解析器，处理缩进
const vueParser: Parser = {
  ...htmlParsers.vue,
  preprocess: (text: string, options: ParserOptions) => {
    // 设置Vue文件中script和style标签的缩进选项
    if (options.vueIndentScriptAndStyle === false) {
      return text;
    }
    return text;
  },
};

// 注册所有解析器
const parsers = {
  json: jsonParser,
  json5: jsonParser,
  'json-stringify': jsonParser,
  '.eslintrc': eslintJsonParser,
  babel: jsParser,
  'babel-flow': jsParser,
  flow: jsParser,
  typescript: tsParser,
  vue: vueParser,
  css: postcssParsers.css,
  scss: postcssParsers.scss,
  less: postcssParsers.less,
};

// 插件定义
const plugin = {
  parsers,
  options,
  defaultOptions: {
    sortJsonKeys: true,
    vueIndentScriptAndStyle: true,
  },
};

export default plugin;
