
const path = require('path');
var webpack = require('webpack');

console.log('**********webpack started *************');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].bundle.js',

    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//热模块替换插件
        new webpack.ProgressPlugin((()=>{
            let percent = 0;
            let lastMsg = '';
            return (percentage,msg)=>{
                if(percent<percentage){
                    console.log((percentage*100).toFixed(4)+'%',msg);
                    percent+=0.1;
                }
                if(lastMsg!=msg){
                    console.log((percentage*100).toFixed(4)+'%',msg);
                    lastMsg = msg;
                }
            }
        })()),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            exclude: /(node_modules)/, // 防止将node_modules 转码
            include: [
                /src/,
                '/node_modules/antd/dist/'   //增加此项
            ],
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
              }
            ]
          },
          {
            test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
            loader: 'babel-loader'//loader的名称（必须）
          }
        ]
      },
      devServer:{
          contentBase: __dirname + '/dist',
        //   compress: true,
        //   colors: true,
          historyApiFallback: true,
          inline: true,
          port: 3001,
        //   process: true
      }
  };