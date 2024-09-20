// nodeに組み込まれているモジュール
const path = require("path");

module.exports = {
  /** モード */
  mode: "development",
  /** エントリーポイント */
  entry: "./src/js/app.js",
  /** 出力設定 */
  output: {
    // __dirname + public のように書くと、OS によってエラーが出る
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
  },
  module: {
    // babelに限らずローダーはmodule.rulesに記載する
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの対象となるディレクトリ
        include: path.resolve(__dirname, "src/js"),
        // 利用するローダー
        use: "babel-loader",
      },
    ],
  },
};
