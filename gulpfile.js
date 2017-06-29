var gulp = require('gulp');
var minifyJs = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.env = {
    dist: 'dist',
    distCssPath: 'dist/css',
    distJsPath: 'dist/js',
};

gulp.task('minify-css', function () {
    gulp.src(['./src/css/jquery.mosaic.min.css', './src/css/style.min.css'])
      .pipe(concat('main.min.css'))
      .pipe(minifyCss())
      .pipe(gulp.dest(gulp.env.distCssPath));
});

gulp.task('minify-html', function () {
    gulp.src(['./src/*.html', './src/*.htm'])
      .pipe(minifyHtml())
      .pipe(gulp.dest(gulp.env.dist));
});

gulp.task('minify-js', function () {
    gulp.src(['./src/js/jquery.min.js','./src/js/jquery.mosaic.min.js','./src/js/jquery.lazyload.min.js','./src/js/index.js'])
    .pipe(concat('app.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifyJs())
      .pipe(gulp.dest(gulp.env.distJsPath));
});

gulp.task('clean', function () {
    return gulp.src(gulp.env.dist, {read: false})
      .pipe(clean());
});

gulp.task('default', ['clean'], function () {
    gulp.start('minify-css','minify-html','minify-js');
});