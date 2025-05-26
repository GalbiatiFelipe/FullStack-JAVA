const matrizGastos = [
    ["alimt", 0],
    ["transp", 0],
    ["lazer", 0],
    ["outros", 0],
    ["total", 0]
]

// funçoes utilitarias
// const pegarId = (id) => document.getElementById(id)

function pegarId(id) {
    document.getElementById(id)
}

//const valorNeg = (valor) => valor < 0

function valorNeg(valor) {
    valor < 0
}

//const somaValor = (total, valor) => total + valor

function somaValor(total, valor) {
    total + valor
}

//const limparCampos = () => pegarId('ivalor').value = ''

function limparCampos() {
    pegarId('ivalor').value = ''
}
//const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',')

function formataMoeda(valor) {
    valor.tofixed(2).replace('.', ',')
}

//obter valores de formulario
//const pegarValorinf = () => parseFloat(pegarId('ivalor').value)

function pegarValorinf() {
    pegarId('ivalor')

}
//const obterCategoriainf = () => pegarId('categoria').value

function obterCategoriaInf() {
    pegarId('categoria')
}

//obter categoria da matriz
//const obtercategoria = (matriz, nomeCategoria) => matriz.find((item[0] === categoriaInf))

function obterCategoria(matriz, nomeCategoria) {
    const categoria = obterCategoria(matrizGastos, categoriaInf)
    const categoriaInf = categoriaInf()
    matriz.find((matrizGastos[0]) === categoriaInf)
}

// Atualizar valores da matriz

//const attValorCat = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor)

function attValorCat(categoria, valor) {
    categoria[1] = somaValor(categoria[1], valor)
}

const attInterface = () => {

}
       
function addgasto() {
    const valorInformado = pegarValorinf()
    
    if (valorNeg(valorInformado)) {
        alert('O valor não pode ser negativo')
        return;
    }
    
    const total = obterCategoria(matrizGastos, "total")

    attValorCat(categoria, valorInformado)
    attValorCat(total, valorInformado)

    matrizGastos.forEach(([nome, valor]) => {
    const elemento = pegarId(nome)

    elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    })

    attInterface()
    limparCampos()
}

/*
1. pegar o valor informado
2. pegar a categoria
3. impedir números negativos
4. de acordo com a categoria atualiza o valor
 4.1 criar variáveis para controlar e armazenar os valores de cade categoria
5. atualizar interface
6. limpar campos
*/

