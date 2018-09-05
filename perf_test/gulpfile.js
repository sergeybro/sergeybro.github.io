var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
// var minifyCSS = require('gulp-csso');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var concat = require('gulp-concat');

var processors = [
    autoprefixer({browsers: ['last 2 version']})
];

gulp.task('css', function(){
    return gulp.src('src/sass/main.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        // .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('js', function(){
    return gulp.src('src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function(){
    return gulp.src([
        'src/assets/*.{jpg,png,jpeg,svg,gif}'
    ])
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['css']);
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('build', ['css', 'js', 'copy']);
gulp.task('default', ['build']);