var debug = process.env.NODE_ENV !== "production";
module.exports ={
  devtool:"sourcemap",
  entry:'./js/entry.js',
  output:{
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        options: {
            presets: ['es2015','stage-0'],
            plugins: ['transform-runtime']
        }
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      }
    ]
  },
  plugins:debug ? [] :[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle:flase, sourcemap: false })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}
