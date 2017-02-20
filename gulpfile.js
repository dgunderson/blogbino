var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mocha', function() {
    var files = ['./src/modules/**/*.js'];

    return gulp.src(files, {read: false})
        .pipe(mocha({reporter: 'list'}))
        .on('error', gutil.log);
});

gulp.task('watch-mocha', ['mocha'], function() {
  gulp.watch(['./src/modules/**/*.js'], ['mocha']);
});