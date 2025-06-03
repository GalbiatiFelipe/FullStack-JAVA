// classe

class veiculo {
    //método construtor
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        
        //atributo privado
        this._ligado = false;
    }

    //métodos
    ligar() {
        this._ligado = true
    }

    desligar() {
        this._ligado = false
    }

    //método get
    get checar() {
        return this._ligado
    }
}

const novoVeiculo = new veiculo('honda', 'civic', 2025)

console.log(novoVeiculo)
novoVeiculo.ligar()
novoVeiculo.desligar()
console.log('o carro está ligado?', novoVeiculo.checar)
