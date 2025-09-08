function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>= 0 && hora< 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#C59367'
    } else if (hora >=12 && hora <= 18) {
        //Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#9eb2c5'
    } else{
        //Noite
        img.src = 'noite.png'
        document.body.style.background = '#1d1920'
    }
}