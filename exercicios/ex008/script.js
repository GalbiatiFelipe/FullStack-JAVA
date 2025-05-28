const matrizGastos = [
    ["alimt", 0],
    ["transp", 0],
    ["lazer", 0],
    ["outros", 0],
    ["total", 0]
]
// funçoes utilitarias
const pegarId = (id) => document.getElementById(id)
const valorNeg = (valor) => valor < 0
const somaValor = (total, valor) => total + valor
const limparCampos = () => pegarId('ivalor').value = ''
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',')
//obter valores de formulario
const pegarValorinf = () => parseFloat(pegarId('ivalor').value)
const obterCategoriainf = () => pegarId('categoria').value

//obter categoria da matriz
const obtercategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

// Atualizar valores da matriz

const attValorCat = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const attInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = pegarId(nome)

        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    })

}


function addGasto() {
    const valorInformado = pegarValorinf()
    const categoriaInf = obterCategoriainf()
    if (valorNeg(valorInformado)) {
        alert('O valor não pode ser negativo')
        return;
    }
    const categoria = obtercategoria(matrizGastos, categoriaInf)
    const total = obtercategoria(matrizGastos, "total")

    attValorCat(categoria, valorInformado)
    attValorCat(total, valorInformado)
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

