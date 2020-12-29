const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box, box1;
 
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
  
    box1 = new Box(300,450,50,75);
    box2 = new Box(350,450,50,75);
    box3 = new Box(400,450,50,75);
    box4 = new Box(450,450,50,75);
    box5 = new Box(500,450,50,75);
    
   
    box7 = new Box(325,400,50,75);
    box8 = new Box(375,400,50,75);
    box9 = new Box(425,400,50,75);
    box10 = new Box(475,400,50,75);
   
    box11 = new Box(375,300,50,75);
    box12 = new Box(425,300,50,75);
    

    box1a = new Box(600,250,50,75);
    box2a = new Box(650,250,50,75);
    box3a = new Box(700,250,50,75);
    box4a = new Box(750,250,50,75);
    box5a = new Box(800,250,50,75);
    
   
    box7a = new Box(625,200,50,75);
    box8a = new Box(675,200,50,75);
    box9a = new Box(725,200,50,75);
    box10a = new Box(775,200,50,75);
    
    box11a = new Box(675,100,50,75);
    box12a = new Box(725,100,50,75);

    hero = new Box(150,350,50,50);
    Matter.Body.setDensity(hero.box, 5);

    ground1 = new Ground(500,590,1000,20);
    ground2= new Ground(400,500,300,20);
    ground3 = new Ground(700,300,300,20);
    sling = new Sling(hero.box, {x:150,y:350});
   }

function draw(){
    background(0);
    Engine.update(engine);
     ground1.display();
     ground2.display();
     ground3.display(); 
     hero.display();  
    box1.display();    
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    box1a.display();    
    box2a.display();
    box3a.display();
    box4a.display();
    box5a.display();
   
    box7a.display();
    box8a.display();
    box9a.display();
    box10a.display();
    box11a.display();
    box12a.display();
}
function mouseDragged(){

    Matter.Body.setPosition(hero.box,{x: mouseX,y:mouseY});
}   

function mouseReleased(){

    sling.fly()

}