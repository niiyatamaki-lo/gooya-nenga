import gulp from 'gulp';
import config from './config';
import StaticServer from './_tasks/staticServer';
import Copy from './_tasks/copy';
import Scss from './_tasks/scss';

gulp.registry(StaticServer);
gulp.registry(Copy);
gulp.registry(Scss);

gulp.task('copy:assets', gulp.series('copy:assets'));
gulp.task('scss', gulp.series('scss'));
gulp.task('watch', cb => {
  gulp.watch(config.develop.watchCss, gulp.series('scss'));
  gulp.watch(config.develop.watchAssets, gulp.series('copy:assets'));
});
gulp.task('default', gulp.parallel('copy:assets', 'scss', gulp.series('serve', 'watch')));
gulp.task('build', gulp.series('build:assets', 'build:scss'));