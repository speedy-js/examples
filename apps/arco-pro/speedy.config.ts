import {defineConfig} from '@speedy-js/speedy-core';
import {svgrPlugin} from '@speedy-js/speedy-plugin-svgr'
import {babelPlugin} from '@speedy-js/speedy-plugin-babel';
import {unplugin} from '@speedy-js/unplugin';

export = defineConfig({
  mode: 'development',
  input: {index: './src/index.tsx'},
  html: {},
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
