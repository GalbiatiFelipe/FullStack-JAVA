function digaMeuNome(nome) {
    console.log(nome)
}



function conta(numero1, numero2) {
    const soma = numero1 + numero2

    return soma // retorna para dentro da variavel res oq foi pedido (nesse caso a variavel soma.)
}

const res = conta(30, 40)

function divida(receita, gastos) {
    if(receita>gastos) {
        return 'está azul'      
    } else {
        return 'Está vermelho'
    }
}

const Felipe = divida(1500, 1200)
const Bizorro = divida(1800, 2000)

console.log(Felipe)
console.log(Bizorro)

/*
function digaNome(nome) {
    console.log(nome)
}

digaNome("Felipe")
*/
// traduzindo para arrow function

const digaNome = (nome) => {
    console.log(nome)
}
digaNome("Felipe")

