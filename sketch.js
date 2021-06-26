const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;
var bead1,bead2,bead3,bead4,bead5,bead6,bead7,bead8;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    iron = new Iron(500,50);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,100,70)
    stone = new Stone(650,100)
    bead1 = new Bead(180,150,30);
    bead2 = new Bead(230,70,30)
    bead3 = new Bead(850,200,30)
    bead4 = new Bead(900,200,30)
    bead5 = new Bead(950,500,30)
    bead6 = new Bead(1000,300,30)
    bead7 = new Bead(1050,120,30)
    bead8 = new Bead(1100,90,30)
}

function draw(){
    background("white");
    Engine.update(engine);
    plane.display();
    iron.display();
    hammer.display();
    rubber.display();
    stone.display();
    bead1.display();
    bead2.display();
    bead3.display();
    bead4.display();
    bead5.display();
    bead6.display();
    bead7.display();
    bead8.display();

    


 
}