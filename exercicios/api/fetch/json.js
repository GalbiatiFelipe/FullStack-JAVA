//objeto javascript

const pessoa = {
    nome: "Felipe",
    idade: 21,
    ativo: true
}

//objeto json (equivale a uma string)

const jsonPessoa = '{"nome": "Felipe", "idade": 21, "ativo": true}'

// json -> js objt

const objeto = JSON.parse(jsonPessoa)
console.log(objeto.nome)

// js objt -> json

const json = JSON.stringify(pessoa)
console.log(json)