// 設定をマージする関数
const { merge } = require("webpack-merge");
// JavaScriptを圧縮するプラグイン
const TerserWebpackPlugin = require("terser-webpack-plugin");
// 共通設定
const commonConfig = require("./webpack.common.cjs");

module.exports = merge(commonConfig, {
  /** モード */
  mode: "production",
  optimization: {
    minimizer: [
      // JavaScriptを圧縮する
      new TerserWebpackPlugin({
        // ライブラリのライセンスコメントなどを抽出した「xxx.LICENSE.txt」のようなファイルが出力されないようにする
        extractComments: false,
        // terser のオプション
        // 詳細は https://github.com/terser/terser#minify-options を参照
        terserOptions: {
          // consoleを削除する
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
