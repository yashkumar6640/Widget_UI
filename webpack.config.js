// var config = {
//    entry: './main.js',
	
//    output: {
//       filename: './index.js',
//    },
	
//    devServer: {
//       inline: true,
//       port: 8080
//    },
	
//    module: {
//       loaders: [
//          {
//             test: /\.jsx?$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
				
//             query: {
//                presets: ['es2015', 'react']
//             }
//          },
// 		  {
//             loader: 'babel-loader?babelrc=true',
//             test: /\.js$/
//       },
//       {
//         test: /\.s?css$/, 
//    loader: 'style-loader!css-loader!sass-loader!resolve-url-loader!sass-loader?sourceMap'
//       },
//   // { // regular css files
//   //       test: /\.css$/,
//   //       loader: ExtractTextPlugin.extract({
//   //         loader: 'css-loader?importLoaders=1',
//   //       }),
//   //     },
//   //     { // sass / scss loader for webpack
//   //       test: /\.(sass|scss)$/,
//   //       loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'sass-loader?sourceMap'])
//   //     },
//        {
//             loader: 'file-loader?name=./static/fonts/[name].[ext]',
//             test: /\.(otf|eot|ttf|woff|woff2)$/
//         },
//          {
//             loader: 'file-loader?name=./static/images/[name].[ext]',
//             test: /\.jpg$/,
//         },
        
//       ]
//    },
//      target: 'node'

// }
var config = {
   entry: './main.js',
	
   output: {
      filename: './index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            loader: 'babel-loader?babelrc=true',
            test: /\.js$/
      },
      {
        test: /\.s?css$/, 
   loader: 'style-loader!css-loader!sass-loader!resolve-url-loader!sass-loader?sourceMap'
      },
  // { // regular css files
  //       test: /\.css$/,
  //       loader: ExtractTextPlugin.extract({
  //         loader: 'css-loader?importLoaders=1',
  //       }),
  //     },
  //     { // sass / scss loader for webpack
  //       test: /\.(sass|scss)$/,
  //       loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'sass-loader?sourceMap'])
  //     },
       {
            loader: 'file-loader?name=./static/fonts/[name].[ext]',
            test: /\.(otf|eot|ttf|woff|woff2)$/
        },
         {
            loader: 'file-loader?name=./static/images/[name].[ext]',
            test: /\.jpg$/,
        },
        
      ]
   },
}

module.exports = config;