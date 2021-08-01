const {series}=require('gulp');
const gulp=  require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglifycss=require('gulp-uglifycss')
const htmlmin=require('gulp-htmlmin')

function transformaSass(){

    return gulp.src('src/sass/index.scss') // SELECIONEI SOMENTE O INDEX.SCSS PORQUE ELE FAZ O @IMPORT DOS DEMAIS
         //   .pipe(sass().on('error',sass.logError))
            .pipe(uglifycss({"uglyComments": true}))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))
}

function copiarHTML(){

    return gulp.src('src/index.html')
         //  .pipe(concat('index.min.html'))
         //  .pipe(htmlmin({collapseWhitespace:true}))
           .pipe(gulp.dest('build')) 
}

module.exports.default= series(transformaSass,copiarHTML)