const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')
const links = document.getElementsByTagName('a')


function saudacao(){
    mensagem.innerHTML = '<p>Hello World</p>'
}

function exibirAlerta(){
    alert(links.textContent)
}