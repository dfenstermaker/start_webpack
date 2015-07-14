var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            './src/**/*.test.js'
        ],

        browsers : ['Chrome'],
        frameworks: ['jasmine'],
        preprocessors: {
            // add webpack as preprocessor
            './src/**/*.test.js': ['webpack']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        colors: true,
        reporters: ['nyan'],
        singleRun: false,

        plugins: [
            require("karma-webpack"),
            require("karma-chrome-launcher"),
            require("karma-nyan-reporter"),
            require("karma-jasmine")
        ]

    });
};
