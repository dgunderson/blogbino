var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');

// server -----------------------------------------------
gulp.task('server', function () {
    nodemon({
        script: 'app.js',
        watch: ["app.js", "routes/", 'public/*', 'public/*/**'],
        ext: 'js'
    }).on('restart', () => {
        gulp.src('server.js')
            .pipe(notify('Running the start tasks and stuff'));
    });
});


// testing ----------------------------------------------
gulp.task('mocha', function () {
    var files = ['./src/modules/**/*.js'];

    return gulp.src(files, { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('watch-mocha', ['mocha'], function () {
    gulp.watch(['./src/modules/**/*.js'], ['mocha']);
});