	var paper,ground,trash1,launcher,trash2,trash3;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;
	const Constraint = Matter.Constraint;

	function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,50); 
	ground = new Ground(400,760,1800,10);
	trash1 = new Trash(900,710,20,100);
	trash2 = new Trash(985,750,150,20);	
	trash3 = new Trash(1050,710,20,100);
	launcher = new Launcher(paper.body,{x:200,y:200});
	Engine.run(engine);
	}


	function draw() {
	rectMode(CENTER);

	background(125);

	drawSprites();

	paper.display();   
	trash1.display();
	trash2.display();
	trash3.display();
	ground.display(); 
	launcher.display();
		
	}
	function mouseDragged(){
		Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY}); 
	  }
	  function mouseReleased(){
		 launcher.fly();
	  }
	