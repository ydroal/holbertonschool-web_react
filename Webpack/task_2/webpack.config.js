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
        use: [
          'file-loader', // ファイルを出力ディレクトリにコピー
          {
            loader: 'image-webpack-loader', // 画像の最適化
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: false // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: 'warning', // 警告のみを出力する
    maxAssetSize: 500000, // 最大アセットサイズ（バイト単位）
    maxEntrypointSize: 500000 // 最大エントリポイントサイズ（バイト単位）
  }
};
