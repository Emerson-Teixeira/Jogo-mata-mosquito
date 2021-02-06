var tela = window;
var altura; 
var largura;
var pontosDeVida = 3;
var tempo = 20;
var dificuldade = 0;
var nivel = window.location.search

nivel = nivel.replace("?", "")



if(nivel == 1 ){
    dificuldade = 1000
}
if(nivel == 2 ){
    dificuldade = 750
}
if(nivel == 3 ){
    dificuldade = 500
}


function iniciarJogo(){
    var dif = document.getElementById("diff").value
    if (dif == 0 ){
        alert('Selecione uma Dificuldade')
    }
    else{
        
        window.location.href = "../HTML/jogo.html?" + dif
        
    }
}
function iniciaCronometro(){
    var cronometro = setInterval(function(){
        tempo--;
        if(tempo<0){
            clearInterval(cronometro)
            clearInterval(iniciaJogo)
            window.location.href = "../HTML/vitoria.html"
        }
        else
            document.getElementById('textoCronometro').innerHTML = tempo
    },1000)
}

function ajustaPosicao (){
    altura = tela.innerHeight
    largura = tela.innerWidth
    //console.log(altura,largura)
}

tela.addEventListener('resize',ajustaPosicao())

function geraTamanhoAleatorio(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "mosquito0"
        case 1:
            return "mosquito1"
        case 2: 
            return "mosquito2"        
    }
}

function geraLadoAleatorio(){
    switch(Math.floor(Math.random() * 2)){
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"       
    }
}

function geraPosicaoAleatoria(mosquito){
    var posicaoX = Math.floor(Math.random() * largura) - 110
    var posicaoY = Math.floor(Math.random() * altura) - 310
    if(posicaoX<0){
        mosquito.style.left = 0 + "px"
    }
    else{
        mosquito.style.left = posicaoX + "px"
    }
    if(posicaoY<0){
        mosquito.style.top = 0 + "px"
    }
    else{
        mosquito.style.top = posicaoY + "px" 
    } 
}

function geraMosquitoAleatorio(){
    if (document.getElementById("alvo")){
        document.getElementById("alvo").remove()
        document.getElementById("p"+pontosDeVida).src = "../Recursos/coracao_vazio.png"
        pontosDeVida--
        if (pontosDeVida==0){
            window.location.href = "../HTML/gameOver.html"
        }
    }
    
    var mosquito = document.createElement('div')
    mosquito.className = geraTamanhoAleatorio()+ " " + geraLadoAleatorio()
    geraPosicaoAleatoria(mosquito)
    mosquito.id = "alvo"
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}


