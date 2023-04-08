//Variaveis sobre a bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Velocidade movimento da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis raquete
let xraquete = 5
let yraquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

//Variaveis raquete oponente
let xraqueteOponente = 585
let yraqueteOponente = 150
let velocidadeYOponente ;

//Placar jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons jogo
let raquetada;
let ponto;
let trilha;

let colidir = false; // amigo git code

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0); // background da tela
  mostrarBolinha(); // desenha a bolinha na tela
  movimentaBolinha(); //Movimenta a bolinha na tela
  colisaoBolinha(); //Verifica a colição com os cantos
  mostraRaquete(xraquete, yraquete); //mostrar raquete
  movimentaRaquete(); // movimentação raquete
  //colisaRaquete(); // colidir bolinha raquete
  colisaoMinhaRaqueteBiblioteca(xraquete, yraquete);
  colisaoMinhaRaqueteBiblioteca(xraqueteOponente, yraqueteOponente);
  mostraRaquete(xraqueteOponente, yraqueteOponente);
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 20;
    }
      if (xBolinha + raio > 600){
    xBolinha = 590;
    }


}

function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro); 
  
}

function movimentaBolinha(){  // Movimento da bolinha
  xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
  
}

function colisaoBolinha(){
    if (xBolinha + raio> width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha*= -1;
  }
}

function mostraRaquete(x, y){
    rect(x,y, comprimentoRaquete,alturaRaquete);
  
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
  }
}

function movimentaRaqueteOponente(){
 // velocidadeYOponente = yBolinha  - yraqueteOponente - comprimentoRaquete / 2 - 30;
 // yraqueteOponente += velocidadeYOponente;
    if (keyIsDown(87)){
    yraqueteOponente -= 10;
  }
    if (keyIsDown(83)){
    yraqueteOponente += 10;
  }
}

//function colisaRaquete(){
//  if (xBolinha - raio < xraquete + comprimentoRaquete && yBolinha - raio < yraquete + alturaRaquete && yBolinha //+ raio > yraquete)  {
// velocidadeXBolinha *= -1
// }
//}

function colisaoMinhaRaqueteBiblioteca(x, y){
  colidir = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha , raio);
  if(colidir){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1
    ponto.play();
  }
  if (xBolinha < 10) {
      pontosDoOponente += 1
      ponto.play();
      }
    
}








