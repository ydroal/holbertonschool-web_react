const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: ['./modules/header/header.js', './modules/body/body.js', './modules/footer/footer.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .cssファイルに適用
        use: ['style-loader', 'css-loader'] // CSSファイルを処理する
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // 画像ファイルに適用
        use: [
          'file-loader', // ファイルを出力ディレクトリにコピー
          {
            loader: 'image-webpack-loader', // 画像の最適化
            options: {
              bypassOnDebug: true,
              disable: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // テンプレートとなるHTMLファイル
    })
  ],
  performance: {
    hints: 'warning',
    maxAssetSize: 500000,
    maxEntrypointSize: 500000
  },
  devServer: {
    contentBase: './public',
    port: 8564, 
    open: true
  },
  devtool: 'inline-source-map', // ソースマップ
  optimization: {
    splitChunks: {
      chunks: 'all', // 共通モジュールを分割
    },
  },
};
