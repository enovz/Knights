
/*-------------dependencies------------------*/

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const pump = require('pump');
const rename = require('gulp-rename');

/*-------------tasks------------------*/

gulp.task('es6', () => {
	browserify('src/app.js')
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

gulp.task('default', ['es6', 'uglify'], () => {

	gulp.watch('src/**/*.js', ['es6']);
	gulp.watch('./build/*.js', ['uglify']);
});