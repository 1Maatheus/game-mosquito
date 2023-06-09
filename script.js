//Capturando a altura e largura do window, criando um script de geramento randomico de altura e largura para usar no game.

let altura = 0;
let largura = 0;
let lifes = 1;
let time = 10;

function ajusteTela() {
  altura = innerHeight;
  largura = innerWidth;
}

ajusteTela();
// ------------------------------

//Criação do cronômetro

document.getElementById("cronometro").innerHTML = time;

let cronometro = setInterval(function () {
  time--;

  if (time < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
  } else {
    document.getElementById("cronometro").innerHTML = time;
  }
}, 1000);

//Função para criação do mosquito na tela de forma randomica, atualizando um mosquito novo e removendo o antigo.
function criacao() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (lifes > 3) {
      location.href = "fim_jogo.html";
    } else {
      document.getElementById("coracao-" + lifes).src =
        "./assets/coracao_vazio.png";

      lifes++;
    }
  }

  let posX = Math.floor(Math.random() * largura) - 90;
  let posY = Math.floor(Math.random() * altura) - 90;

  posX = posX < 0 ? 0 : posX;
  posY = posY < 0 ? 0 : posY;

  let mosquito = document.createElement("img");
  mosquito.src = "./assets/mosca.png";
  mosquito.className = mudaTamanho() + " " + ladoRandom();
  mosquito.style.left = posX + "px";
  mosquito.style.top = posY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

criacao();
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
//----------------------------------------------

// Criação do setInterval para mudança na tela do mosquito

let criaMosquito = setInterval(function () {
  criacao();
}, 2000);

//=============================
