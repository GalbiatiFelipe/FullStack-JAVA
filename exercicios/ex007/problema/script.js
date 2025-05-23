/*
const soma = (a, b) => a + b;

const calculo = (operacao, a, b) => operacao(a, b);

console.log(calculo(soma, 20, 20))
*/

function divisao(dividendo, divisor){
    if(divisor == 0)            
        return "Não é possível dividir por zero";

    if(divisor == 1)        
        return dividendo;

    return dividendo / divisor; 
}
console.log(divisao(42,0));