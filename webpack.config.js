module.exports = {
  entry: '/home/ravi/vscodeWork/fcc/RanQotGen/js/components/QuotePage.js',
  module: {
      rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
    ]
  }
};