const gulp= require('gulp'); //importando gulp
const {series,parallel}=require('gulp') // importando a propriedade series de gulp


function tarefa1(cb){

    console.log('tarefa1....')
    return cb()
}
function tarefa2(cb){

    console.log('tarefa2....')
    return cb()
}

function copiar(cb){ // cliando a funcao que será executada quando invocarmos o gulp (cb é uma callback que passando informando que a funcao terminou)

    return gulp.src('pastaA/**/*.txt')
                .pipe(gulp.dest('pastaB')) 
}

function tarefaFim(cb){

    console.log('tarefa Fim....')
    return cb()
}

module.exports.default= series(parallel(
    tarefa1,tarefa2),
    copiar,
    tarefaFim)  // usando o sistema de modulos do node(commends js), para exportar a funcao