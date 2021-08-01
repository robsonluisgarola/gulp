const {series}=require('gulp');
const gulp = require('gulp');
const concat= require('gulp-concat');
const uglify= require('gulp-uglify');
const babel= require('gulp-babel');

// CRIANDO UMA FUNCAO QUE PODEMOS CHAMÁ-LA DE TRANSFORMA

function transforma(){

    return gulp.src('src/**/*.js')
                .pipe(babel({ // PARA O BABEL VOU PASSAR UM OBJETO DE CONFIGURACAO
                    comments: false, // PARA O NOVO ARQUIVO NÃO QUERO OS COMENTÁRIOS
                    presets:['env'] // QUEREMOS QUE O BABEL USE A ÚLTIMA VERSÃO DO JAVASCRIPT
                }))
                .pipe(uglify())// PEGA TODO O CÓDIGO E MIMIFICA
                .pipe(concat('codigo.min.js'))/*O CÓDIGO VAI SER CONCATENADO (HAVENDO VÁRIOS ARQUIVOS ,SERÁ CRIADO UM ÚNICO)
                                QUANTIDADE DE ARQUIVOS SERÁ CADA LINHA DO ARQUIVO. O PARAMENTRO DO CONCAT E O NOME DO NOVO ARQUIVO*/
                .pipe(gulp.dest('build')) // A PASTA DE DESTINO NÃO EXISTINDO SERÁ CRIADA
            
}
    module.exports.default= series(transforma)
    