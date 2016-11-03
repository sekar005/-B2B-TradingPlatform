module.exports = {
     entry: './src/client/main.js',
     output: {
         path: './public/dist',
         filename: 'app.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loaders: [ "babel-loader", "eslint-loader" ]
         }]
     },
     devtool: 'source-map'
 }
