/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 21:34:56 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-06 22:07:01
 */
const gulp = require('gulp');
var through = require('through2');
//var clean = require('gulp-clean');
var gulpCopy = require('gulp-copy');
var sourceFiles = ['dist/**','dist/.*','dist/*.*'];
var destination = '../GameServer/packages/echtwelt/';


gulp.task('default', copyFunction);

// function cleanDestination() {
//     return gulp
//         .src(destination, {read: false})
//         .pipe(clean());
// }

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