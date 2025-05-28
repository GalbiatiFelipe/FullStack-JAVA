/*
Lógica:


2 - Definir um número de tentativas e criar o contador
3 - Validar o número do jogador
4 - Dar feedback ao jogador
5 - Exibir o número de tentativas restante
6 - Se o jogador não conseguir emitir uma mensagem e revelar o número
*/

//Entrada
const pegarId = (id) => document.getElementById(id)

function numeroGerado(min, max ) {
    return Math.random() * (max - min) + min;
}

//Processamento

function chute() {
    window.alert(parseFloat(pegarId('ichute').value))
}

//Saída

console.log(parseInt(numeroGerado(1, 100)))

