/*
1 - Ouvir o evento de quando o usuário sair do campo de CEP
2 - validar o CEP
3 - Fazer busca no ViaCEP
*/

//1.
const cep = document.getElementById("cep")


cep.addEventListener("blur", (evento)=> {
    const elemento = evento.target
    const cepInformado = elemento.value

    //2.
    if(!(cepInformado.length === 8)) {
        return
    }

    //3. Promessa do Fetch
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
     .then(response => response.json())
     .then(data => {
        //processamento da pagina
        if(!data.erro) {
            document.getElementById('logradouro').value = data.logradouro
            document.getElementById('bairro').value = data.bairro
            document.getElementById('cidade').value = data.cidade
            document.getElementById('estado').value = data.estado
        }
     })
     .catch(error => console.error("Erro ao buscar CEP", error))
})

