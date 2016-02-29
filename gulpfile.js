
/* global process */
var gulp = require('gulp');
var insert = require('gulp-insert');
// var ts = require('gulp-typescript');
// var mocha = require('gulp-mocha');
// var plumber = require('gulp-plumber');
// var merge = require('merge2');
// var sourcemaps = require('gulp-sourcemaps');


gulp.task('test', function () {


});

gulp.task('release', function () {

	return gulp.src('Source/cli.js')
		.pipe(insert.prepend('#! /usr/bin/env node \n'))
		.pipe(gulp.dest('./Bin'));
});

gulp.task('watch', function () {
	gulp.watch(['./*.ts',
		'./Tests/*.ts',
		'./Tests/Files/**/*'], ['test']);
});


gulp.task('default', ['release']);