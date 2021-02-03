
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,90,30);
  mango2=new mango(998,190,32)
  mango3=new mango(1088,175,35)
  mango4=new mango(998,95,29)  
  mango5=new mango(928,215,35)
  mango6=new mango(1178,205,35)
   
  stone1=new Stone(240,419,10)
  
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  
  constraint1=new Constraints(stone1.body,{x:240,y:419})


}

function draw() {

  background(230);
  //Add code for displaying text here!
	Engine.update(engine);
 
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();
  image(boy ,200,340,200,300);
  stone1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  constraints.fly();
}




























