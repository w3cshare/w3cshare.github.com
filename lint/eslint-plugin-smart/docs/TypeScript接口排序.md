# TypeScript 接口自动排序功能

`eslint-plugin-smart` 现在集成了强大的 TypeScript 接口和枚举类型自动排序功能，这有助于保持代码的一致性和可读性。

## 功能简介

通过集成 `eslint-plugin-typescript-sort-keys` 插件，我们提供了以下排序功能：

1. **接口属性自动排序**：对 TypeScript 接口中的属性按字母顺序排序
2. **枚举类型自动排序**：对枚举类型中的成员按字母顺序排序
3. **类型字面量排序**：对类型字面量中的属性进行排序

## 使用方法

此功能在以下配置预设中默认启用：
- `typescript`
- `react`
- `vue`
- `nestjs`

无需任何额外配置，安装 `eslint-plugin-smart` 后即可使用。

## 示例

### 接口属性排序

```typescript
// 自动排序前
interface User {
  name: string;
  id: number;
  role: 'admin' | 'user';
  age: number;
  createdAt: Date;
}

// 自动排序后
interface User {
  age: number;
  createdAt: Date;
  id: number;
  name: string;
  role: 'admin' | 'user';
}
```

### 枚举类型排序

```typescript
// 自动排序前
enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  CREATED = 201,
  INTERNAL_SERVER_ERROR = 500,
}

// 自动排序后
enum HttpStatus {
  BAD_REQUEST = 400,
  CREATED = 201,
  INTERNAL_SERVER_ERROR = 500,
  NOT_FOUND = 404,
  OK = 200,
}
```

### 类型字面量排序

```typescript
// 自动排序前
type Config = {
  port: number;
  host: string;
  debug: boolean;
  timeout: number;
};

// 自动排序后
type Config = {
  debug: boolean;
  host: string;
  port: number;
  timeout: number;
};
```

## 配置选项

如果需要自定义排序行为，可以在配置中修改相关规则：

```javascript
export default [
  ...eslintPlugin.configs.typescript,
  {
    rules: {
      // 关闭接口排序
      'typescript-sort-keys/interface': 'off',
      
      // 修改枚举类型排序配置
      'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: false }],
    }
  }
]
```

### 规则选项

#### `typescript-sort-keys/interface`

控制接口属性排序：

- `['error']` - 启用排序并报告错误
- `['warn']` - 启用排序并报告警告
- `'off'` - 禁用排序

#### `typescript-sort-keys/string-enum`

控制枚举类型排序：

- `['error', 'asc', { caseSensitive: true }]` - 按升序排序，区分大小写（默认）
- `['error', 'desc', { caseSensitive: false }]` - 按降序排序，不区分大小写

## 最佳实践

1. **API 响应类型**：对于 API 响应类型定义，推荐使用自动排序，使得字段结构更加清晰
2. **DTO 对象**：对于数据传输对象，自动排序可以提高维护性
3. **大型接口**：对于包含多个属性的大型接口，自动排序可以方便查找特定属性

## 常见问题

### 如何临时禁用特定接口的排序？

可以使用 ESLint 注释临时禁用特定接口的排序：

```typescript
// eslint-disable-next-line typescript-sort-keys/interface
interface Config {
  port: number;
  host: string;
  // 属性顺序不会被强制排序
}
```

### 排序是否会修改源代码？

是的，如果启用了 ESLint 的自动修复功能（使用 `--fix` 参数或在 IDE 中启用自动修复），排序规则会自动修改源代码，将接口属性按照字母顺序排序。 