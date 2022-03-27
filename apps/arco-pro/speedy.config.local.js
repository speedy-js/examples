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
          const homeDir = os.homedir();
          const scriptPath = path.resolve(homeDir, 'github/speedybuild/scripts/esbuild.js');
          const esbuild = require(scriptPath).installForTests();
          return esbuild;
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
