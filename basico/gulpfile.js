const gulp = require('gulp')
const {series,parallel}=require('gulp');

function antes1(cb){

    console.log('tarefa antes1')

    return cb()
}

function antes2(cb){

    console.log('tarefa antes2')

    return cb()
}

function copiar(cb){

    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))// Nesta transformação o gulp cria a PastaB
    

    return cb()
}

function fim(cb){

    console.log('tarefa fim')

    return cb()
}


module.exports.default =series(
        // tarefas em series
    parallel(antes1,antes2),    
    copiar,
    fim)