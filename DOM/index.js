// const button = document.querySelector("#myButton");
// const select = document.querySelector("select");
// const input = document.querySelector("#input")
// const mensagem = document.querySelector("#mensagem");


// function exibirMensagem() {
//   mensagem.innerHTML = `Olá me chamo <b>${input.value}</b>, e estou me especializando em <strong>${select.value}</strong>`;
// }

const primeiroValor = document.querySelector("#valor1")
const segundoValor = document.querySelector("#valor2")
const resposta = document.querySelector("#resposta")

function calcularSoma(){
    const resultado = parseInt(primeiroValor.value) + parseInt(segundoValor.value)
    resposta.innerHTML = `<p>O valor da soma de ${primeiroValor.value} e ${segundoValor.value} é igual a <strong>${resultado    }</strong></p>`
}
function calcularSubtracao(){
    const resultado = parseInt(primeiroValor.value) - parseInt(segundoValor.value)
    resposta.innerHTML = `<p>O valor da subtração de ${primeiroValor.value} e ${segundoValor.value} é igual a <strong>${resultado}</strong></p>`
}
function calcularDivisao(){
    const resultado = parseInt(primeiroValor.value) / parseInt(segundoValor.value)
    resposta.innerHTML = `<p>O valor da divisão de ${primeiroValor.value} e ${segundoValor.value} é igual a <strong>${resultado}</strong></p>`
}
function calcularMultiplicacao(){
    const resultado = parseInt(primeiroValor.value) * parseInt(segundoValor.value)
    resposta.innerHTML = `<p>O valor da multiplicação de ${primeiroValor.value} e ${segundoValor.value} é igual a <strong>${resultado}</strong></p>`
}