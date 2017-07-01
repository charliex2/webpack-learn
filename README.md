# webpack-learn

#### Install Webpack
```
npm install webpack -g
```
#### 用webpack打包
```
webpack ./js/entry.js bundle.js
```
每次都要输入打包命令非常麻烦，所有可以在目录下添加配置文件
```
touch webpack.config.js
```
配置文件的内容
```
module.exports = {
  devtool: 'sourcemap',
  entry:'./js/entry.js',
  output:{
    filename:'bundle.js'
  }
}
```
此时，只需要在命令行中敲入`webpack` 即可。

接下来我们在项目中引入 `jquery` 来试一下`webpack`大法。


#### 各种loaders
除了普通的js文件，在前端中的其他资源(css、image等)该怎么打包呢？这时候就需要loader。
为了加载样式文件，我们需要安装两个loader
```
npm instal css-loader style-loader
```
然后再在`webpack.config.js`中配置这些loader
```
module: {
  loaders: [
    {
      test:/\.css$/,
      loader:'style-loader!css-loader'
    }
  ]
},
```
这时候我们在项目目录下面创建一个css文件夹，再在文件夹内创建一个`style.css`文件。
```
body
{
  background:yellow;
}
```
