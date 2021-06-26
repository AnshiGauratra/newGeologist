class Iron{
	constructor(x,y){

	    var options = {
			'density':30,
			'friction': 3,
			'restitution':0.8
		};

        this.body = Bodies.rectangle(x, y, 50, 50, options);
		//this.x = x;
		//this.y = y;
        this.width = 150;
        this.height = 100;
        World.add(world, this.body);
	}
        
    
    display(){
		var ironpos = this.body.position;		
		push()
		translate(ironpos.x, ironpos.y);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("black");
		fill("black");
    	rect(0, 0, this.width, this.height);
		pop()
	}
}

/*class Rubber{
	constructor(x,y,r){



		 var options = {
			'density':100,
			'friction': 3,
			'restitution':0.1
		};

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2,options);
		World.add(world, this.body);
	}

	display(){
			var rubberpos = this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipseMode(CENTER)
    		ellipse(0, 0, this.r, this.r);
			pop()
	}
}*/

