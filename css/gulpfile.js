const gulp= require('gulp');
const {series}=require('gulp');
const uglifycss=require('gulp-uglifycss');
var sass = require('gulp-sass')(require('sass')); // a linha correta é está. o gulp-sass 5 não tem copilador.
const concat= require('gulp-concat');

function transformacaoCss(){

    return gulp.src('src/sass/index.scss')
            .pipe(sass().on('error',sass.logError))
            .pipe(uglifycss({'uglyComments':true}))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))
}

module.exports.default= series(transformacaoCss)