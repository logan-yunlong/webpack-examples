"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

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

            {
                test: /\.css/, // 匹配所有的css文件
                use: ['style-loader', 'css-loader', 'postcss-loader'] // 从后向前加载的顺序
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin()
    ]
}
// 导出配置
module.exports = (env, argv) => {
    console.log('argv.mode=', argv.mode) // 打印 mode(模式) 值
    // 这里可以通过不同的模式修改 config 配置
    return config;
}
