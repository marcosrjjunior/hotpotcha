const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const bundleOutputDir = './wwwroot/dist';
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        mode: isDevBuild ? 'development' : 'production',
        stats: { modules: false },
        entry: {
            main: './App/boot.tsx',
        },
        resolve: {
            symlinks: false,
            modules: [path.resolve('node_modules')],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: './'
        },
        devtool: 'eval',
        devServer: {
            contentBase: path.join(__dirname, 'wwwroot/dist')
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'awesome-typescript-loader?silent=true&sourceMap=false' },
                { test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        },
        plugins: [
            new CheckerPlugin(),
            // new webpack.DllReferencePlugin({
            //     context: __dirname,
            //     manifest: require('./wwwroot/dist/vendor-manifest.json')
            // }),
            new webpack.EnvironmentPlugin(['NODE_ENV']),
            new HtmlWebPackPlugin({
                template: "./App/index.html",
                filename: "index.html"
            })
        ].concat(isDevBuild ? [] : [
            // Plugins that apply in production builds only
            new UglifyJsPlugin()
        ])
    }];
};
