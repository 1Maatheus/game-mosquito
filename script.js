let altura = 0;
let largura = 0;

function ajusteTela() {
  altura = innerHeight;
  largura = innerWidth;
}

ajusteTela();

let posX = Math.floor(Math.random() * largura);
let posY = Math.floor(Math.random() * altura);

console.log(posX, posY);
