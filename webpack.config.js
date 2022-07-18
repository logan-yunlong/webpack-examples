"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 打印当前环境变量
console.log("当前编译执行环境变量为：" + process.env.NODE_ENV);
const config = {
    // 当命令中已经存在，就不必特意写了
    // mode: "development",
    entry: "./src/index.js",
    //输出
    output: {
        // 输出文件名
        filename: "bundle.js",
        // 输出文件目录 相对路径 ./dist
        path: path.join(__dirname, "dist")
    },
    devServer: {
        static: path.resolve(__dirname, './src/assets'), // 静态文件目录，静态文件可以不必打包编译，直接在本地对应位置读取即可
        compress: true, //是否启动压缩zip
        port: 3001,//本地端口
    },
    module: {
        // css 的转换规则
        rules: [
            // css处理
            {
                // test: /\.css/, // 匹配所有的css文件
                test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件
                use: [/*'style-loader'*/MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'] // 从后向前加载的顺序
            },
            // 图片处理
            /*{
                test: /\.(jpeg|jpg|png|gif)/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name][hash:8].[ext]'
                    }
                }]
            }*/
        ]
    },
    plugins: [
        // 实现：向html文件中注入webpack产物
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        // 实现：清理打包输出目录
        new CleanWebpackPlugin(),
        // 实现：css 单独引入文件
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css'
        })
    ]
}
// 导出配置
module.exports = (env, argv) => {
    console.log('argv.mode=', argv.mode) // 打印 mode(模式) 值
    // 这里可以通过不同的模式修改 config 配置
    return config;
}
