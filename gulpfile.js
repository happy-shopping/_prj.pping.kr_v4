var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

module.exports = gulp;

var src  = 'assets';
var loot  = 'html';

gulp.task('default',['html', 'sass', 'watch', 'browserSync']);

gulp.task('html', function () {
    return gulp .src(loot + '/**/*.html')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })

    .pipe(browserSync.reload({
        stream : true
    }));
});

gulp.task('sass',function() {
    return sass(src + '/sass/**/*.scss')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })

    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(src + '/css'))
    .pipe(browserSync.reload({
        stream : true
    }));
});

    // /wk/gitup/front.prj.pping.kr/

gulp.task('watch',function() {
    gulp.watch(loot + '/**/*.html',['html']);
    gulp.watch(src + '/sass/**/*.scss',['sass']);
});

gulp.task('browserSync', ['html', 'sass'], function () {
    return browserSync.init({
        port : 3333,
        server: {
            baseDir: 'D:/wk/html/front.html.pping.kr'
        }
    });
});
