import {defineConfig} from '@speedy-js/speedy-core';
import {svgrPlugin} from '@speedy-js/speedy-plugin-svgr'

export = defineConfig({
  mode: 'development',
  input: {index: './src/index.tsx'},
  html: {},
  profile: true,
  sourceMap:false,
  plugins: [
    svgrPlugin({
      template: (
        { imports, interfaces, componentName, props, jsx },
        { tpl }
      ) => {
        return tpl`${imports}
    ${interfaces}

    function ${componentName}(${props}) {
      return ${jsx};
    }
    
    export default ${componentName};
      `;
      },
    }),
  ],
});
