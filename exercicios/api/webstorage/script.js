const botaoTema = document.getElementById("botaotema")

botaoTema.addEventListener("click", ()=> {
    //verificar se ja tem um tema pré definido
    const temaAtual = localStorage.getItem("tema")
    //Verificar qual é o tema e inverter
    const novotema = temaAtual === "dark" ? "light" : "dark"

    //add a classe no elemento body
    document.body.classList.toggle(novotema)

    //salvar as preferencias
    localStorage.setItem("item", novotema)
    botaoTema.textContent = novotema === "dark" ? 'Tema Claro' : 'Tema Escuro'
})

document.addEventListener('DOMContentLoaded', ()=> {
    const temaSalvo = localStorage.getItem("tema")

    // se for dark, adiciona a classe e altera o botão
    if (temaSalvo === "dark") {
        document.body.classList.add("dark")
        botaoTema.textContent = 'Tema Claro'
    } else {
        botaoTema.textContent = 'Tema Escuro'
    }
})

