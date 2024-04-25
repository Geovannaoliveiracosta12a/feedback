let botoes =docment.querySelectorall(".botoes buttom")

botoes.forEach(botao =>{
    botao.addEventlistenner("click", guardarNota )

})

function guardarNota(evento){
    let nota = evento.target.innerText

    localStorage.setItem("nota", nota)

}