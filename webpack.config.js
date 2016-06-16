var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        js: [path.join(__dirname, './src', 'index.jsx')],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        modulesDirectories: ['.', './node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        })
    ]
};
