var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var browserSync = require('browser-sync').create();

var loot  = 'html';
var src = 'assets';
var paths = { scss : src + '/sass/**/*.scss' };

var scssOptions = {
  /**
   * outputStyle (Type : String , Default : nested) *
   * Values : nested, expanded, compact, compressed */
  outputStyle : "compressed",

  /**
   * indentType (>= v3.0.0 , Type : String , Default : space)
   * Values : space , tab */
  indentType : "space",

   /**
    * indentWidth (>= v3.0.0, Type : Integer , Default : 2)
    * 컴파일 된 CSS의 "들여쓰기" 의 갯수 */
  indentWidth : 2, // outputStyle is depend on nested, expanded

  /**
   * precision (Type : Integer , Default : 5) * 컴파일 된 CSS 의 소수점 자리수. */
  precision: 6,

  /**
   * sourceComments (Type : Boolean , Default : false)
   * 컴파일 된 CSS 에 원본소스의 위치와 줄수 주석표시. */
  sourceComments: false,

};

gulp.task('html', function () {
    return gulp.src(loot + '/**/*.html')
    .on('error', function(err) {
        console.error('Error!', err.message);
    })
    .pipe(browserSync.reload({
        stream : true
    }));
});


gulp.task('scss', function () {
  return gulp
    // SCSS 파일을 읽어온다.
    .src(paths.scss)
    // 소스맵 초기화(소스맵을 생성)
    .pipe(sourcemaps.init())
    // SCSS 함수에 옵션갑을 설정, SCSS 작성시 watch 가 멈추지 않도록 logError 를 설정
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(scss(scssOptions).on('error', scss.logError))
    // 위에서 생성한 소스맵을 사용한다.
    .pipe(sourcemaps.write({ addComment: false }))
    // .pipe(sourcemaps.write())
    // .pipe(sourcemaps.write('../maps'))
    // 목적지(destination)을 설정
    .pipe(gulp.dest(src + '/css'))
    .pipe(browserSync.reload({ stream : true }));
});

gulp.task('watch', function () {
  gulp.watch(loot + '/**/*.html',['html']);
  gulp.watch(paths.scss, ['scss']);
});

gulp.task('browserSync', ['html', 'scss'], function () {
   return browserSync.init({
       port : 3333,
       server: {
           baseDir: 'C:/Users/jeonj/happyshoppingEJ/front.html.pping.kr'
       }
   });
});

// gulp 를 실행하면 default 로 js:combine task, scss:compile task 그리고 watch task 를 실행하도록 한다.
gulp.task('default', ['html', 'scss', 'watch', 'browserSync']);
