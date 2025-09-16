const buttonRandom = document.querySelector('.button-random')
const mensagem = document.querySelector('.mensagem')
const numeroSorteado = document.querySelector('.numero-sorteado')

function clicou() {
    const firstValue = document.querySelector('.primeiro-valor').value;
    const secondValue = document.querySelector('.segundo-valor').value;

    const randomNumber = Math.random() * (firstValue, secondValue)
    const resultado = randomNumber.toFixed(0);
    mensagem.innerHTML = 'O número sorteador foi: <br>'
    numeroSorteado.innerHTML = resultado
}

buttonRandom.addEventListener('click', clicou)