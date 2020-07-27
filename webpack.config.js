const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    //入口文件
    entry: path.join(__dirname, './src/main.js'),
    //输出文件的相关配置
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    // devServer: {
    //     //这是配置dev-server命令的第二种方式，相对来说（第一步）这种方式麻烦一些
    //     open: true, //自动打开浏览器
    //     port: 3000, //指定端口
    //     contentBase: 'src', //指定托管的根目录
    //     hot: true //启用热更新
    // },
    plugins: [
        //new一个热更新的模块儿对象（第三步）
        // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},//配置css文件的第三方loader规则
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1940&name=[hash:8]-[name].[ext]'},
            {test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'},
            {test: /\.vue$/, use: 'vue-loader'},
            {test:/\.js$/, exclude:/node_modules/, use:{loader:'babel-loader'} }
        ]
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"
        }
    }
}