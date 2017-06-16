const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'

    },
    module: {
        loaders:
        [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /{node_modules}/,
                query: {
                    presets: ['es2016', 'es2017', 'react']
                }
            },
             {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: [/\.(spec|e2e)\.ts$/]
          },
        ]
    },
    target: 'web'
};