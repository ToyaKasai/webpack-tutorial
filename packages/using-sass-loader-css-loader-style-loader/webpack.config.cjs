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
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.scss$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, "src/scss"),
        // 利用するローダー
        // sass-loader css-loader style-loaderの順で実行される
        use: [
          // style-loaderで変換したCSSのスタイルが記述されたstyleタグをHTMLに追加する
          "style-loader",
          // CSSをモジュールに変換する
          "css-loader",
          // SassをCSSにコンパイルする
          "sass-loader",
        ],
      },
    ],
  },
};
