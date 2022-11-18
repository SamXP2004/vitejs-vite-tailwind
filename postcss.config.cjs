const purgecss = {
  content: [],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
//里面有些要注释掉，不然打包之后有些css不生效，具体什么原因不生效，现在还不知道
