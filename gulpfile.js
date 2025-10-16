const gulp        	= require('gulp'),
      browsersync 	= require('browser-sync').create();



// BrowserSync
function browserSync(done){
	browsersync.init({
    server: {
      baseDir: "./",
      //directory: true,
      index: "index.html"
    },
    open: true
  });
	done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watcher() {
  gulp.watch(['./**/*.html', './assets/js/*.js', './assets/css/*.css'], browserSyncReload);
}

// export tasks
exports.default = gulp.parallel(watcher, browserSync);