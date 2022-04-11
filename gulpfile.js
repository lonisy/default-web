var gulp = require('gulp');
var minifyJs = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.project = {
    dist: 'dist',
    distCssPath: 'dist/css',
    distJsPath: 'dist/js',
};

// gulp.task('copy',  function() {
//   return gulp.src('src/**/*')
//     .pipe(gulp.dest(destDir))
// });

gulp.task('minify-css', function () {
    gulp.src(['./src/css/jquery.mosaic.min.css', './src/css/style.min.css'])
      .pipe(concat('main.min.css'))
      .pipe(minifyCss())
      .pipe(gulp.dest(gulp.project.distCssPath));
});

gulp.task('minify-html', function () {
    gulp.src(['./src/*.html', './src/*.htm'])
      .pipe(minifyHtml())
      .pipe(gulp.dest(gulp.project.dist));
});

gulp.task('minify-js', function () {
    gulp.src(['./src/js/jquery.min.js','./src/js/jquery.mosaic.min.js','./src/js/jquery.lazyload.min.js','./src/js/index.js'])
    .pipe(concat('app.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifyJs())
      .pipe(gulp.dest(gulp.project.distJsPath));
});

gulp.task('clean', function () {
    return gulp.src(gulp.project.dist, {read: false})
      .pipe(clean());
});

gulp.task('default', ['clean'], function () {
    gulp.start('minify-css','minify-js','minify-html');
    gulp.watch('./src/*.html', function(event) {
        gulp.start('minify-html');
    });
});

gulp.task('dev', ['clean'], function () {
    gulp.start('minify-css','minify-js','minify-html');
    gulp.watch('./src/*.html', function(event) {
        gulp.start('minify-html');
    });
});

gulp.task('build', ['clean'], function() {
    gulp.start('minify-css','minify-js','minify-html');
});

