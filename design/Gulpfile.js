var gulp = require('gulp');
var sass = require('gulp-sass');

var scssInput = './src/scss/**/*.scss';
var scssOutput = './css';

gulp.task('sass', function () {
  return gulp
    .src(scssInput)
    .pipe(sass())
    .pipe(gulp.dest(scssOutput));
});

gulp.task('watch', function() {
  return gulp
    .watch(scssInput, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
