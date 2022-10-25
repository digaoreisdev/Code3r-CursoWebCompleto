const gulp = require('gulp')
const { series } = require('gulp')
// Poderia fazer: const series = gulp.series

const antes1 = callBack => {
  console.log('Tarefa Antes 1!')
  return callBack()
}

const antes2 = callBack => {
  console.log('Tarefa Antes 2!')
  return callBack()
}

function copiar(callBack) {
  // console.log('Tarefa de Copiar!')
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  gulp.src('pastaA/**/*.txt')
  // .pipe(imagePelaMetade())
  // .pipe(imageEmpretoEBranco())
  // .pipe(transformacaoA())
  // .pipe(transformacaoB())
  // .pipe(transformacaoC())
  .pipe(gulp.dest('pastaB'))
  return callBack()
}

const fim = callBack => {
  console.log('Tarefa Fim!')
  return callBack()
}

module.exports.default = series(
  antes1,
  antes2,
  copiar,
  fim,  
)