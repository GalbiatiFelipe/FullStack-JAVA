function calcularDesconto() {
    //entrada
    let vOriginal = document.getElementById('ivalor').value;
    let desconto = document.getElementById('idesconto').value;
    let res = document.getElementById('res')
    //processamento
    let vDesconto = (vOriginal * desconto) / 100;
    let vFinal = vOriginal - vDesconto;

    //saida
    res.textContent = `O valor final é de ${vFinal}`
}

