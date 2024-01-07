const path = require('path');

module.exports = {
  mode: 'production', // プロダクションモードを指定
  entry: './js/dashboard_main.js', // エントリーポイント
  output: {
    path: path.resolve(__dirname, 'public'), // 出力先ディレクトリ 'public'
    filename: 'bundle.js' // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .cssファイルに適用
        use: ['style-loader', 'css-loader'] // CSSファイルを処理する
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // 画像ファイルに適用
        type: 'asset/resource', // ファイルを出力ディレクトリにコピーし、URLを返す
        generator: {
          filename: 'assets/images/[hash][ext][query]' // 画像の出力パスと名前のカスタマイズ
        }
      }
    ],
  },
  performance: {
    hints: 'warning', // 警告のみを出力する
    maxAssetSize: 500000, // 最大アセットサイズ（バイト単位）
    maxEntrypointSize: 500000, // 最大エントリポイントサイズ（バイト単位）
  },
};
