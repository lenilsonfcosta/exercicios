function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // bom dia!
        img.src = 'foto-manha.jpeg'
        document.body.style.background = '#e2cd9f'
    } else if ( hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#515154'
    }

}

