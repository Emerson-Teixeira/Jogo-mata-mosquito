var tela = window;
var altura; 
var largura;

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
    var posicaoY = Math.floor(Math.random() * altura) - 110
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
    }
    var mosquito = document.createElement('img')
    mosquito.src = '../Recursos/mosca.png'
    mosquito.className = geraTamanhoAleatorio()+ " " + geraLadoAleatorio()
    geraPosicaoAleatoria(mosquito)
    mosquito.id = "alvo"
    document.body.appendChild(mosquito)
}


