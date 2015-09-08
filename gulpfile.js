// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var runSequence = require('run-sequence');

var paths = {
  bower:      'app/bower_components/**',
  src: {
    html:  'app/**/*.html',
    css:   'app/css/**/*.css',
    js:    ['app/js/**/*.js',
            '!app/js/**/*.test.js']
  }
};

// tasks
gulp.task('lint', function() {
  gulp.src(paths.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

// Clean output directory
gulp.task('clean', function(cb) {
  return ( del(
    ['dist/**/*'],
    cb )
  );
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(paths.src.css)
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('minify-js', function() {
  gulp.src(paths.src.js)
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('copy-bower-components', function () {
  gulp.src(paths.bower)
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src(paths.src.html)
    .pipe(gulp.dest('dist/'));
});

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});

// default task: check syntax and local server
gulp.task('default',
  ['lint', 'connect']
);

// build task
gulp.task('build', ['clean'], function(cb) {
  runSequence(
    'lint',
    'minify-css',
    'minify-js',
    'copy-html-files',
    'copy-bower-components',
    'connectDist', 
    cb
  );
});
