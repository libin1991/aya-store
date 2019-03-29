
//
const gulp = require("gulp");
const babel = require("gulp-babel");


// es6-> es5
gulp.task('babel', () =>
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
        }))
        .pipe(gulp.dest('dist'))
);