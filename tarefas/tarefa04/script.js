function calculoimc() {
    
    // Entrada
    let peso = document.getElementById('ikg').value
    let altura = document.getElementById('ialt').value
    let calculo = document.getElementById('calc')
    let res = document.getElementById('res')
    
    //Processamento
    let imc = peso / (altura * altura)
    let resu = ""
    if (imc < 18.5) {
        resu = "Você é uma pessoa abaixo do peso."
    } else if (imc < 24.9) {
        resu = "Você é uma pessoa com peso normal."
    } else if (imc < 29.9) {
        resu = "Você é uma pessoa com sobrepeso."
    } else if (imc < 34.9) {
        resu = "Você é uma pessoa com obesidade grau 1."
    } else if (imc < 39.9) {
        resu = "Você é uma pessoa com obesidade grau 2."
    } else {
        resu = "Você é uma pessoa com obesidade grau 3."
    }
    
    // Saída
    calculo.textContent = `Seu IMC é de ${imc}...`
    res.textContent = resu
}