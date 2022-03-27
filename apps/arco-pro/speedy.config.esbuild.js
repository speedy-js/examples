const { svgrPlugin } = require('@speedy-js/speedy-plugin-svgr');
const { defineConfig } = require('@speedy-js/speedy-core');
const os = require('os');
const path = require('path');
module.exports = defineConfig({
  mode: 'development',
  input: { index: './src/index.tsx' },
  html: {},
  sourceMap:false,
  plugins: [
    {
      name: 'local-esbuild',
      apply(compiler) {
        compiler.hooks.esbuild.tap('esbuild', () => {
          const speedyEsbuild = require('@speedy-js/esbuild')
          return  speedyEsbuild;
        });
      },
    },
    svgrPlugin({
      template: ({ imports, interfaces, componentName, props, jsx }, { tpl }) => {
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
