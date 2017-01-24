
/*-------------dependencies------------------*/

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const pump = require('pump');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
/*-------------tasks------------------*/

gulp.task('es6', () => {
	browserify('ver2/app.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest('build/'));
});

gulp.task('uglify', (cb) => {
	pump([
		gulp.src('build/*.js'),
		rename('app.min.js'),
		uglify(),
		gulp.dest('build')
	],
		cb
	);
})

gulp.task('css', () => {
	gulp.src('ver2/style/**/*.css')
		.pipe(cleanCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('build'))
});

gulp.task('default', ['es6', 'uglify', 'css'], () => {

	gulp.watch('ver2/**/*.js', ['es6']);
	gulp.watch('./build/*.js', ['uglify']);
	gulp.watch('./ver2/**/*.css');
});