//Manipulação de eventos DOM

document.getElementById('botao').addEventListener('click', function() {
    const elemento = document.getElementById('texto')
    const feedback = document.getElementById('feedback')
    elemento.style.color = corAleatoria()
    feedback.textContent = 'Cor alterada!'
})

const corAleatoria = () =>{
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

//Preveção de comportamento padrão

document.getElementById('formulario').addEventListener('submit', ()=> {
    const evento = document.getElementById('enviarForm')
    evento.preventDefault()
})

//Tratar erros de requisição do Fetch

fetch('https://api.exemplo.com/data')
.then(response => {
    if (!response.ok) {
        throw new Error('Resposta da rede não funcionou')
    }
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.error('Sem problemas com a funcionalidade do Fetch', error))