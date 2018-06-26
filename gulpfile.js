// Dependencies
// -------------------------------------
var gulp = require('gulp');

var clean = require('gulp-clean');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var rename = require('gulp-rename');
var clean = require('gulp-clean');
var inject = require('gulp-inject');

var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

var path = require('path');

var browserSync = require('browser-sync');

var notify = require('gulp-notify');

var cp = require('child_process');



// SVG + Inline
// -------------------------------------
gulp.task('svg', function() {
  var svgs = gulp.src('static/svg/*.svg')
  .pipe(svgmin(function(file) {
    var prefix = path.basename(file.relative, path.extname(file.relative));
    return {
      plugins: [{
        cleanupIDs: {
          prefix: prefix + '-',
          minify: true
        }
      }]
    }
  }))
  .pipe(svgstore( { inlineSvg: true }))
  .pipe(gulp.dest('_includes'))
});




// Clean
// -------------------------------------
gulp.task('clean', function(){
  return gulp.src(['static/css', '_includes/svg.svg', '_site/'])
  .pipe(clean());
});


// Browsersync
// -------------------------------------
// gulp.task('browser-sync', function() {
//   browserSync({
//       // we need to disable clicks and forms for when we test multiple rooms
//       server : {},
//       ghostMode: false
//   });
// });


// Sass + PostCSS
// -------------------------------------
gulp.task('sass', function(){
  var processors = [
    autoprefixer( {browsers: ['last 2 versions']} ),
    cssnano
  ];

 return gulp.src(['static/scss/**/*.scss'])
 .pipe(sourcemaps.init())
 .pipe( sass().on('error', sass.logError) )
 .pipe(sourcemaps.init())
 .pipe(postcss(processors))
 .pipe(sourcemaps.write('./'))
 .pipe(gulp.dest('static/css'))
 .pipe(gulp.dest('_site/static/css'))
 .pipe(browserSync.stream());
});


// Build Jekyll Site
// -------------------------------------
gulp.task('jekyll-build', function (done) {
  browserSync.notify('Building Jekyll');
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
      .on('close', done);
});


// Rebuild Jekyll and Reload Page
// -------------------------------------
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});


// Wait for Jekyll Build and Launch Server
// -------------------------------------
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});



// xxxx
// -------------------------------------


// xxxx
// -------------------------------------



// // Watch
// // -------------------------------------
gulp.task('watch', function(){
  gulp.watch('static/scss/**/*.scss', ['sass']);
  gulp.watch([
    '*.html',
    '*.md',
    'work/*.md',
    'work/*/*.md',
    '*/*.md',
    '_layouts/*.html',
    '_posts/*',
    '_includes/*.html',
    '_includes/*/*.html',
    'static/js/*.js',
    ], ['jekyll-rebuild']);
});






// Default
// -------------------------------------
// gulp.task('default', ['sass', 'watch', 'browser-sync']);

gulp.task('default', ['browser-sync', 'watch']);
