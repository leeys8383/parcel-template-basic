// ESM의 자바스크립트 방식이 아닌 node.js의 방식인 CommonJS 방식으로 언어 인식

// import
// const autoprefixer = require('autoprefixer')

// export
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}