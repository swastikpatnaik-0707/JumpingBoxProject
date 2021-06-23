
var box1,box2,box3,box4;
var square, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    box1 = createSprite(0,580,360,30);
    box1.shapeColor = rgb(0,0,255);

    box2 = createSprite(295,580,200,30);
    box2.shapeColor = rgb(255,128,0);

    box3 = createSprite(515,580,200,30);
    box3.shapeColor = rgb(153,0,76);

    box4 = createSprite(740,580,220,30);
    box4.shapeColor = rgb(0,100,0);

    square = createSprite(random(20,750),100, 40,40);
    square.shapeColor = rgb(255,255,255);
    square.velocityX = 5;
    square.velocityY = 10;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    square.bounceOff(edges);

    if(box1.isTouching(square) && square.bounceOff(box1)){
        square.shapeColor = rgb(0,0,255);
        music.play();}

    if(box2.isTouching(square)){
        square.shapeColor = rgb(255,128,0);
        square.velocityX = 0.5;
        square.velocityY = 0.2;
        music.stop();
    }

    if(box3.isTouching(square) && square.bounceOff(box3)){
        square.shapeColor = rgb(153,0,76);
    }

    if(box4.isTouching(square) && square.bounceOff(box4)){
        square.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
