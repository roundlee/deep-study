/**
 * @type {import('webpack').Configuration}
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // webpack 可视化工具

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: 'dist.js',// filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{ // 给文件地址目录取别名
        alias:{
            utils: path.resolve(__dirname,"src/utils")
        }
    },
    optimization:{ // 压缩文件
        minimize:true,
        minimizer:[
            new TerserPlugin({
                extractComments:false
            })
        ]
    },
    // 可以在packaeg.json中配置script字段，运行yarn 字段 打开网页，同时打包数据也同步更新
    devServer:{
        static: './dist',
        port:8080,
        hot:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'博客列表'
        }) // html 压缩
        // new BundleAnalyzerPlugin()
    ],
    module:{
        rules:[
            { // css资源打包
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            { // 图片资源打包
                test: /\.(jpg|png|svg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            { // js 转义
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}