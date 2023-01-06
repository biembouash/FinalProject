const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")


module.exports = {
    entry: './src/main.tsx',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
      },    
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/,
            use: { loader: "html-loader" },
          },
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
          },
        ],
      },
  performance: { hints: false },
  watch: true,
  devtool: "source-map",

};