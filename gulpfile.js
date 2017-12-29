var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

module.exports = gulp;

var src  = 'assets';
var loot  = 'html';

gulp.task('default',['html', 'sass', 'sass2', 'watch', 'browserSync']);

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

gulp.task('sass2',function() {
    return sass('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/sass/pc/*.scss')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })

    .pipe(cleanCSS({debug: true, compatibility: 'ie8'}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/css/pc'));
});

gulp.task('sass3',function() {
    return sass('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/sass/happytree/*.scss')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })

    .pipe(cleanCSS({debug: true, compatibility: 'ie8'}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/css/happytree'));
});

gulp.task('corp',function() {
    return sass('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/sass/corp/*.scss')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })

    .pipe(cleanCSS({debug: true, compatibility: 'ie8'}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/css/corp'));
});

gulp.task('adm',function() {
    return sass('C:/workspace/html/google sync/_prj/_prj.admin/assets/sass/*.scss')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })

    .pipe(cleanCSS({debug: true, compatibility: 'ie8'}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('C:/workspace/html/google sync/_prj/_prj.admin/assets/css'));
});

gulp.task('sass4',function() {
    return sass(src + '/sass/pc/event/**/*.scss')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })

    .pipe(gulp.dest(src + '/css/pc/event'))

    .pipe(browserSync.reload({
        stream : true
    }));
});

gulp.task('watch',function() {
    gulp.watch(loot + '/**/*.html',['html']);
    gulp.watch(src + '/sass/**/*.scss',['sass', 'sass4']);
    gulp.watch('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/sass/pc/**/*.scss',['sass2']);
    gulp.watch('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/sass/happytree/**/*.scss',['sass3']);
    gulp.watch('C:/workspace/html/google sync/_prj/_prj.ajax/public_html/_v3/sass/corp/**/*.scss',['corp']);
    gulp.watch('C:/workspace/html/google sync/_prj/_prj.admin/assets/sass/**/*.scss',['adm']);
});

gulp.task('browserSync', ['html', 'sass', 'corp', 'sass2', 'sass3', 'sass4'], function () {
    return browserSync.init({
        port : 3333,
        server: {
            baseDir: 'C:/workspace/html/google sync/happyshopping'
        }
    });
});
