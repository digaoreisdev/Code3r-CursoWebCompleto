function gerarNumeroEntre(min, max, tempo){
  if(min > max) [max, min] = [min, max];
  return new Promise(resolve => {
    setTimeout(function(){
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio);
    }, tempo)
  })
}

function gerarVariosNumeros(){
  return Promise.all([
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 100),
  ])
}

// gerarVariosNumeros()
//   .then(numeros => console.log(numeros))

console.time('promise')

gerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
  })