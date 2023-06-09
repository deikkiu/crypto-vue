// https://github.com/michael-ciniawsky/postcss-load-config
const tailwindcss = require('tailwindcss');

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    tailwindcss
  }
}
