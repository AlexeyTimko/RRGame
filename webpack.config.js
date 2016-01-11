module.exports = {
    entry: [
        './client/index.jsx'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/public/js',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    }
};