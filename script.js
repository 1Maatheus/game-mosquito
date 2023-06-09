//Capturando a altura e largura do window, criando um script de geramento randomico de altura e largura para usar no game.

let altura = 0;
let largura = 0;

function ajusteTela() {
  altura = innerHeight;
  largura = innerWidth;
}

ajusteTela();

let posX = Math.floor(Math.random() * largura) - 90;
let posY = Math.floor(Math.random() * altura) - 90;

posX = posX < 0 ? 0 : posX;
posY = posY < 0 ? 0 : posY;

// ---------------------------------------

//Criação de elementos HTML
let mosquito = document.createElement("img");
mosquito.src = "./assets/mosca.png";
mosquito.className = mudaTamanho() + " " + ladoRandom();
mosquito.style.left = posX + "px";
mosquito.style.top = posY + "px";
mosquito.style.position = "absolute";

document.body.appendChild(mosquito);

// ---------------------------------------

// Função para aplicar a mudança na tela dos mosquitos, de forma randomina.
function mudaTamanho() {
  let classe = Math.floor(Math.random() * 3);

  if (classe === 0) {
    return "mosquito-1";
  } else if (classe === 1) {
    return "mosquito-2";
  } else {
    return "mosquito-3";
  }
}

mudaTamanho();

function ladoRandom() {
  let classe = Math.floor(Math.random() * 2);

  if (classe === 0) {
    return "lado-a";
  } else {
    return "lado-b";
  }
}

ladoRandom();
