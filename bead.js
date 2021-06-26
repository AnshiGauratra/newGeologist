class Bead{
	constructor(x,y,r){

		 var options = {
			'density':90,
			'friction': 3,
			'restitution':0.5
		};

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2,options);
		World.add(world, this.body);
	}

	display(){
			var beadpos = this.body.position;		
			push()
			translate(beadpos.x, beadpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			ellipseMode(CENTER)
    		ellipse(0, 0, this.r, this.r);
			pop()
	}
}