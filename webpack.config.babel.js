import path from 'path';
import webpack from 'webpack';

module.exports = {
    entry: {
        js: [path.join(__dirname, './src', 'jsx', 'index.jsx')],
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
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
    ,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
};
