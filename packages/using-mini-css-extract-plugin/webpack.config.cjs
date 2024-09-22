// nodeに組み込まれているモジュール
const path = require("path");
// バンドルされるCSSを別のCSSファイルに抽出するプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
          // MiniCssExtractPluginのローダー
          MiniCssExtractPlugin.loader,
          // CSS をモジュールに変換する
          "css-loader",
          // Sass を CSS にコンパイルする
          "sass-loader",
        ],
      },
    ],
  },
  /** プラグインの設定 */
  plugins: [
    new MiniCssExtractPlugin({
      // このファイルが出力される起点となるディレクトリは output.path
      // そのため、今回出力されるファイルは public/css/style.css
      filename: "./css/style.css",
    }),
  ],
};
