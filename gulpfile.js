var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint');
 
gulp.task('webserver', function() {
  connect.server();
});

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
 
gulp.task('default', ['webserver']);
