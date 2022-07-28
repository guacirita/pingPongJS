// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//  velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  //    modificado para melhorar o código
  //   circle(xBolinha,yBolinha,diametro);
  //   xBolinha += velocidadeXBolinha;
  //   yBolinha += velocidadeYBolinha;
  //  acrescentado para melhorar o código
  //   mostraBolinha();
  //   movimentaBolinha();
  //   verificaColisaoBorda();
  //    rect(5, 150, 10, 90); modificado
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
//  modificado
//     if (xBolinha + raio > width || xBolinha - raio <0) {
//         velocidadeXBolinha *= -1;
//     }

//     if (yBolinha + raio > height || yBolinha - raio <0) {
//         velocidadeYBolinha *= -1;
//     }

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
     velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
  }
}
// function draw() {
//   background(0); //1 - Desenha o background
//   mostraBolinha(); // 2 - Desenha a bolinha
//   movimentaBolinha(); // 3 - Movimenta a Bolinha
//   verificaColisaoBorda(); // 4 - Verifica Colisão da bolinha

//  // 5- Volta para o início da função draw()
// }
