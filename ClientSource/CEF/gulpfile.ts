/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 21:34:56 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 11:34:35
 */
const gulp = require('gulp');
var through = require('through2');
var gulpCopy = require('gulp-copy');
var replace = require('gulp-replace');
var clean = require('gulp-clean');
var sourceFiles = ['build/**','build/.*','build/*.*'];
var destination = '../../GameServer/client_packages/echtwelt/CEF';
var destinationClean = ['../../GameServer/client_packages/echtwelt/CEF'];
var maincss = '../../GameServer/client_packages/echtwelt/CEF/main.css';

gulp.task('replace', () => {
    return gulp.src(['build/main.css'])
      .pipe(replace('url(/', 'url('))
      .pipe(gulp.dest(destination))
});

gulp.task('clean', function () {
    return gulp.src(destinationClean, {read: false})
      .pipe(clean({force: true}));
});

function copyFunction() {
    return gulp
        .src(sourceFiles)
        .pipe(gulpCopy(destination, { prefix: 1 }))
        .pipe(verify());
}

function verify() {
    var options = { objectMode: true };
    return through(options, write, end);

    function write(file, enc, cb) {
        console.log('file', file.path);
        cb(null, file);
    }

    function end(cb) {
        console.log('done');
        cb();
    }
}

gulp.task('default', gulp.series('clean',copyFunction, 'replace'));