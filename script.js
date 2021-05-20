// Salvar valores do input em um objeto

const btn = document.getElementById('btn')

function salvar() {
    const cor1 = document.getElementById('cor1').value
    const cor2 = document.getElementById('cor2').value
    const graus = document.getElementById('graus').value
    const corfonte = document.getElementById('corfonte').value
    const texto = document.getElementById('txtarea').value
    const fonte = document.getElementById('fonte').value
    
    if (graus > 360) {
        alert('Digite no maximo 360 graus')
    } else {

        const dados = {
            cor1,
            cor2,
            graus,
            corfonte,
            texto,
            fonte,
        }
        // transformar objeto em JSON e salvar no localstorage
        const json = JSON.stringify(dados)
        localStorage.setItem('estilos', json)

        estilo()
        
    }
}

btn.addEventListener('click', salvar)

// consumindo o estilo do localstorage e fazendo o parse

function estilo(){
    const storage = JSON.parse(localStorage.getItem('estilos'))
    
    //Estilo do texto
    const txt = document.getElementById('textofinal')
    txt.innerText = `${storage.texto}`
    txt.style.fontSize = `${(storage.fonte + 'px')}`
    txt.style.color = `${storage.corfonte}`

    //Estilo do background
    const back = document.getElementById('res')
    back.style.backgroundImage = `linear-gradient(${storage.graus}deg, ${storage.cor1}, ${storage.cor2})`
}
