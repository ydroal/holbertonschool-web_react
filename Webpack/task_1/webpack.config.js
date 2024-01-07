const path = require('path');

module.exports = {
  mode: 'production', // プロダクションモードを指定
  entry: "./js/dashboard_main.js", // エントリーポイント
  output: {
    path: path.resolve(__dirname, 'public'), // 出力先ディレクトリ 'public'
    filename: 'bundle.js' // 出力ファイル名
  }
};
