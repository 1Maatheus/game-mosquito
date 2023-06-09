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

console.log(posX, posY);

//Criação de elementos HTML
let mosquito = document.createElement("img");
mosquito.src = "./assets/mosca.png";
mosquito.className = "mosquito-1";
mosquito.style.left = posX + "px";
mosquito.style.top = posY + "px";
mosquito.style.position = "absolute";

document.body.appendChild(mosquito);
