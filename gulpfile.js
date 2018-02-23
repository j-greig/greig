
var gulp = require('gulp');
var purify = require('gulp-purifycss');

gulp.task('purify-css', () => {
  const content = ['assets/*.js', '_site/**/*.html']
  const css = ['assets/style.css']
  const opts = {
    output: 'assets/style.purified.css',
    minify: true
  }
  purify(content, css, opts)
});
