// Dependencies
// -------------------------------------
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var clean = require('gulp-clean');




// Clean
// -------------------------------------
gulp.task('clean', function(){
  return gulp.src(['static/css'])
  .pipe(clean());
});


// Autoprefixer
// -------------------------------------
gulp.task('autoprefixer', function(){
  return gulp.src('static/css/screen.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(rename('screen.poop.css'))
  .pipe(gulp.dest('static/css'))
});



