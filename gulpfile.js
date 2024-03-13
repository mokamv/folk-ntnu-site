const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp.src('styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
}

function watchFiles() {
  gulp.watch('styles.scss', styles);
}

exports.styles = styles;
exports.watch = gulp.series(styles, watchFiles);