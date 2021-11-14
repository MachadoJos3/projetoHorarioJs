function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var msghora = window.document.getElementById('horario')

var data = new Date()
var hora = data.getHours()
// var hora = 6
msg.innerHTML = `Agora sao ${hora} horas.`

if(hora >= 6 && hora < 12){
    //Bom dia
    img.src = 'imagens/fotoManha.png'
    document.body.style.backgroundColor = '#e2cd9f'
    msghora.innerHTML = '🌄Bom dia'
}else if (hora >= 12 && hora <= 18){
    //Boa tarde
    img.src = 'imagens/fotoTarde.png'
    document.body.style.backgroundColor = '#ebd35e'
    msghora.innerHTML = '🌆Boa tarde'
}else if (hora >= 0 && hora <= 5){
    //Boa madrugada
    img.src = 'imagens/fotoMadrugada.png'
    document.body.style.backgroundColor = '#3e6666'
    msghora.innerHTML = '🌇Boa madrugada'
}else{
    //boa noite
    img.src = 'imagens/fotoNoite.png'
    document.body.style.backgroundColor = '#213636'
    msghora.innerHTML = '🌃Boa noite'
}
}