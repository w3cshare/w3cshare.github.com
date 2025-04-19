const fs = require('fs');
const { globSync } = require('glob');

const imagesAlt = globSync('../{micro-frontend,micro-service,app}/*/package.json', {
  ignore: 'node_modules/**',
});

imagesAlt.forEach(filePath => {
  const jsonStr = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });

  try {
    const json = JSON.parse(jsonStr || '{}');
    const { name } = json || {};
    console.debug('%c Line:25 wangWei: name', 'color:#ea7e5c', name);

    delete json.name;

    fs.writeFileSync(
      filePath,
      JSON.stringify(
        {
          name: name.replace(/^@smarts-isoftstone\//, ''),
          private: true,
          ...json,
        },
        null,
        2,
      ),
    );
  } catch (error) {
    console.debug('%c Line:26 wangWei: error', 'color:#2eafb0', error);
  }
});
