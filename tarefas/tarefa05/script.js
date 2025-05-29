const numeroSecreto = Math.floor(Math.random() * 100) + 1
const maxTentativas = 10
let tentativas = 0

function verificarPalpite() {
    const input = document.getElementById('palpite')
    const palpite = Number(input.value)
    const mensagem = document.getElementById('mensagem')
    const tentativasTexto = document.getElementById('tentativas')
    
    tentativas++;

    if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`
    desabilitarJogo()
    } else if (tentativas >= maxTentativas) {
    mensagem.textContent = `Você perdeu! O número era ${numeroSecreto}.`
    desabilitarJogo()
    } else if (palpite < numeroSecreto) {
    mensagem.textContent = "Tente um número maior!"
    } else {
    mensagem.textContent = "Tente um número menor!"
    }

    tentativasTexto.textContent = `Tentativas: ${tentativas} de ${maxTentativas}`
    input.value = ''
    input.focus()
}

function desabilitarJogo() {
    document.getElementById('palpite').disabled = true
    document.querySelector('button').disabled = true
}

console.log(numeroSecreto)
