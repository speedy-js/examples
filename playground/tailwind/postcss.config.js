const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// TODO: Speedy does not support this config file yet.
// Waiting for: https://github.com/speedy-js/speedystack/pull/880
module.exports = {
  plugins: [tailwindcss(), autoprefixer()],
};
