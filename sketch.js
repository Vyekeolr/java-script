function setup() {
  createCanvas(400, 400);
  background("green");
  
}

function draw() {
  if(mouseIsPressed){
  stroke("yellow");//COR DA LINHA
  fill("blue"); //cor do fundo
  rect(mouseX,mouseY,30,30);//criande o retângulo
    }
}
