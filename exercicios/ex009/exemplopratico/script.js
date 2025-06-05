// Definir classe contaBancária

class ContaBancaria {
    //propriedades
    #saldo;
    constructor() {
        this.#saldo = 0
    }

    //métodos
    depositar(valor) {
        this.#saldo += valor
    }

    sacar(valor) {
        this.#saldo -= valor
    }

    saqueDisponivel(valor) {
        /*
        if (valor <= this.#saldo) {
            return true
        } else {
            return false
        }
        */ // simplificação:
        return valor <= this.#saldo
    }

    //método getter
    get saldo() {
        return this.#saldo
    }
}

//Definir classe CaixaEletrônico

class CaixaEletronico {
    //propriedades
    constructor(conta) {
        this.conta = conta
    }

    //métodos
    depositar() {
        //pegar valor do depósito
        const valorDep = parseFloat(document.getElementById('ivalordep').value)
        //Fazer o depósito na conta
        this.conta.depositar(valorDep)
        //Exibir saldo
        this.mostrarSaldo(this.conta.saldo)
    }

    sacar() {
        //pegar valor do saque
        const valorSaque = parseFloat(document.getElementById('isaque').value)
        //fazer o saque da conta
        if (this.conta.saqueDisponivel(valorSaque)) {
            this.conta.sacar(valorSaque)
            this.mostrarSaldo(this.conta.saldo)
        } else {
            this.mostrarSaldo('saldo insuficiente!')
        }
    }
    
    mostrarSaldo(saldo) {
        document.getElementById('saldo').textContent = `Saldo: R$ ${saldo}`
        document.getElementById('ivalordep').value = ''
        document.getElementById('isaque').value = ''
    }
}

//cria instancias

const conta = new ContaBancaria()
const caixa = new CaixaEletronico(conta)