var gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  min = require('gulp-ngmin'),
  del = require('del'),
  webpackConfig = require('./webpack.config.js'),
  inject = require('gulp-inject'),
  ngAnnotate = require('gulp-ng-annotate');

// add the name and a hash to the output file
webpackConfig.output.filename = '[name].[hash].js';

gulp.task('webpack', function (done) {

  del('dist', function () {
    gulp.src('src/index.js')
      .pipe(webpack(webpackConfig))
      .pipe(min())
      .pipe(gulp.dest('dist/'))
  });

});

gulp.task('default', ['webpack']);
