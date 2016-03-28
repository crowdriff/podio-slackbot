const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

const paths = {
  app: ['app/**/*.js', './index.js']
};

gulp.task('lint', () => {
  return gulp.src(paths.app)
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('serve', ['lint'], () => {
  nodemon({
    script: 'index.js',
    tasks: ['lint']
  }).on('restart', () => {
    console.log('server restarted')
  })
});

gulp.task('default', ['serve']);