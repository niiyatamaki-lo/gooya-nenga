import Registry from 'undertaker-registry';
import gulp from 'gulp';
const sass = require('gulp-sass')(require('node-sass'));
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import sassGlob from 'gulp-sass-glob';
import config from '../config';

class MyTask extends Registry {
  constructor() {
    super()
    this.init()
  }

  init() {
    gulp.task('scss', () => {
      return gulp.src(config.develop.cssSrc)
          .pipe(plumber())
          .pipe(sassGlob())
          .pipe(autoprefixer({
            cascade: false
          }))
          .pipe(sass())
          .pipe(gulp.dest(config.develop.destCss))
    });

    gulp.task('build:scss', () => {
      return gulp.src(config.develop.cssSrc)
          .pipe(plumber())
          .pipe(sassGlob())
          .pipe(autoprefixer({
            cascade: false
          }))
          .pipe(sass())
          .pipe(gulp.dest(config.build.destDeployCss))
    });
  }
}

export default new MyTask();