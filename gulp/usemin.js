var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var config = require('./config');

gulp.task('usemin', function() {
  return gulp.src('index.html')
    .pipe(usemin({
      css: [ minifyCss(), rev() ],
      //html: [ minifyHtml({ empty: true }) ],  per ora html non minificato
      js: [ uglify(), rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ minifyCss(), 'concat' ]
    }))
    .pipe(gulp.dest(config.dist.app));
});
