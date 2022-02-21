const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()

const falar = pessoa.falar
falar() //Aqui conflita paradigmas entre funcional e Orientação a Objetos

const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa()