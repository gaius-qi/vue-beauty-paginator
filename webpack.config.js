var webpack = require("webpack")
module.exports = {
    entry: './src/index.js',
    output: {
        library: 'VuePaginator',
        libraryTarget: 'umd',
        path: './dist',
        filename: 'VuePaginator.js'
    },
    externals: {
        vue: 'Vue'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
              test: /\.styl$/,
              loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: './dist/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    watch: true
}

module.exports.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false,
    },
  })
]
