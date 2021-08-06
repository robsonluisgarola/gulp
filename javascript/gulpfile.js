const gulp = require('gulp');
const {series}=require('gulp');
const concat = require('gulp-concat');
const uglify= require('gulp-uglify');
const babel = require('gulp-babel');


function transformacaoJS(){

    return gulp.src('src/**/*.js')
                .pipe(babel({
                    comments:false,
                    presets:['env']
                }))
                .on('erro',err=> console.log(err))
                .pipe(uglify())
                .pipe(concat('codigo.min.js'))
                .pipe(gulp.dest('build'))
}

module.exports.default= series(transformacaoJS)