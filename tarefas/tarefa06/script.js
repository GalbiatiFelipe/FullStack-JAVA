
class Parquimetro {
constructor() {
    this.tabelaPrecos = [
    { valor: 3.00, tempo: 120 },
    { valor: 1.75, tempo: 60 },
    { valor: 1.00, tempo: 30 }
    ];
    this.valorMaximo = 3.00;
}

calcularTempoEPagamento(valorInserido) {
    if (valorInserido <= 0 || isNaN(valorInserido)) {
    return "Por favor, insira um valor válido.";
    }

    const valorConsiderado = Math.min(valorInserido, this.valorMaximo);
    let tempoTotal = 0;
    let valorRestante = valorConsiderado;

    for (let item of this.tabelaPrecos) {
    while (valorRestante >= item.valor) {
        tempoTotal += item.tempo;
        valorRestante -= item.valor;
    }
    }

    let troco = valorInserido - valorConsiderado;

    return {
    tempo: tempoTotal,
    troco: troco.toFixed(2).replace('.', ',')
    };
}
}

const parquimetro = new Parquimetro();

function calcular() {
    const valorReais = document.getElementById("ivalor").value;
    const valor = parseFloat(valorReais);
    const resultado = parquimetro.calcularTempoEPagamento(valor);
    const res = document.getElementById("res");

    if (typeof resultado === "string") {
        res.textContent = resultado;
    } else {
        res.innerHTML = `
        Tempo de permanência: ${resultado.tempo} minutos<br>
        Troco: R$ ${resultado.troco}
        `;
    }
}



