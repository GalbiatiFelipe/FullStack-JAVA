
const cep = document.getElementById("cep")


cep.addEventListener("blur", (evento)=> {
    const elemento = evento.target
    const cepInformado = elemento.value

    //2.
    if(!(cepInformado.length === 8)) {
        return
    }

    
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
     .then(response => response.json())
     .then(data => {
        
        if(!data.erro) {
            document.getElementById('logradouro').value = data.logradouro
            document.getElementById('bairro').value = data.bairro
            document.getElementById('estado').value = data.estado
        }
     })
     .catch(error => console.error("Erro ao buscar CEP", error))
})

