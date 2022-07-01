var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    var tsProject = ts.createProject('module.tsconfig.json');

    var fonts = gulp.src(['src/assets/fonts/*.ttf'])

    var tsResult = tsProject.src().pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(uglify()).pipe(gulp.dest('dist')),
        fonts.pipe(gulp.dest('dist/assets/fonts'))
    ]);
});
