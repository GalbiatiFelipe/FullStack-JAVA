
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

//herança

class moto extends veiculo {
    constructor(marca, modelo, ano){
        super(marca, modelo, ano)
    }
}

class carro extends veiculo {
    constructor(marca, modelo, ano, numPortas){
        super(marca, modelo, ano)
        this.numPortas = numPortas
    }

    abrirPortas(){
        console.log('as portas do carro foram abertas')
    }
}

const novoCarro = new carro('Volkswagen', 'Gol', 2020, 4)
const novaMoto = new moto('Yamaha', 'MT-07', 2025)

novoCarro.ligar()
novoCarro.abrirPortas()

console.log('O carro está ligado?',novoCarro.checar)

