
/* global process */
var gulp = require('gulp');
// var ts = require('gulp-typescript');
// var mocha = require('gulp-mocha');
// var plumber = require('gulp-plumber');
// var merge = require('merge2');
// var insert = require('gulp-insert');
// var sourcemaps = require('gulp-sourcemaps');


gulp.task('release', function () {


});

gulp.task('watch', function () {
	gulp.watch(['./*.ts',
		'./Tests/*.ts',
		'./Tests/Files/**/*'], ['test']);
});


gulp.task('default', ['release']);