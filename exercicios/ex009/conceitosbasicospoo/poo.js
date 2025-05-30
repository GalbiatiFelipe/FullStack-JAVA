//objeto literal/anonimo(sem classe)
const pessoa = {
    //propriedades
    nome: 'Felipe',
    idade: 21,
    profissao: 'controlador de peso',
    cidade: 'Tabatinga',
    curso: 'progamação',

    //métodos
    apresentar: function() {
        console.log(`Olá meu nome é ${this.nome} tenho ${this.idade} anos nasci e cresci na cidade de ${this.cidade}. Atualmente trabalho como ${this.profissao} na empresa do meu pai, enquanto na parte da noite estudo ${this.curso}.`)
    }
}
//chamada
//pessoa.apresentar()

const carro = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    placa: 'DSM-7130',
    proprietario: 'Felipe de Oliveira Galbiati',
    multas: 0,
    verMultas(multas) {
        this.multas =+ multas
        console.log(`O veículo com as seguintes informações: ${this.marca} ${this.modelo} de placa ${this.placa} do dono que atende por ${this.proprietario} possui um número de ${multas} multas`)
    }
}

carro.verMultas(2)

