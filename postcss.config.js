export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 1rem = 37.5px
      propList: ['*'],
      selectorBlackList: [/^:root$/],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
}
