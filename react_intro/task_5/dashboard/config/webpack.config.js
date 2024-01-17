const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.join(__dirname, '../dist'), // 開発サーバーの基点となるディレクトリ
    hot: true, // ホットリロードを有効にする
  },
  module: {
    rules: [
      // スタイルローダーとCSSローダーの設定
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 画像ファイルのローダーの設定
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
    ],
  },
  devtool: 'inline-source-map', // ソースマップの設定
};
