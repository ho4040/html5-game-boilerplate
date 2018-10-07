'use strict';

const browserSync = require('browser-sync');
const gulp = require('gulp');

gulp.task('serve', () => {

  // Reload when any of HTML files updates.
  initBrowsersync("src");
  gulp.watch(
      "src/**",
      (event) => {
        browserSync.reload(event.path);
      });
});

function initBrowsersync(baseDir) {
  browserSync.init({
    server: {
      baseDir: baseDir,
      routes: {
	      '/libs': 'node_modules',
	    },
    },
    single: true,
    startPath: '/',
  });
}