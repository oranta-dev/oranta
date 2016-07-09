var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-cssnano'),
    renameFiles = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');
//debug = require('gulp-debug');

//Main Sass task
gulp.task('sass', function() {
    gulp.src('public/sass/*.scss', {base: '.'})
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Safari >= 8'],
            cascade: false
        }))
        //.pipe(renameFiles({
        //  suffix: '.min'
        //}))
        //.pipe(debug())
        //.pipe(minifyCSS())
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('public/sass/*.scss', ['sass']);
});