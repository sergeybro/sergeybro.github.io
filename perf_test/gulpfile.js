var gulp = require('gulp');
// var pug = require('gulp-pug');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
// var sourcemaps = require('gulp-sourcemaps');
//
// gulp.task('html', function(){
//     return gulp.src('client/templates/*.pug')
//         .pipe(pug())
//         .pipe(gulp.dest('build/html'))
// });

gulp.task('css', function(){
    return gulp.src('./src/sass/main.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('stream', function () {
    // Endless stream mode
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('js', function(){
    return gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['clean', 'css', 'js'] /*[ 'html', 'css', 'js' ]*/);