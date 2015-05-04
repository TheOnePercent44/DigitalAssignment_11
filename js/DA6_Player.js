function newPlayer(game, xcoord, ycoord)
{
	this.game = game;
	this.sprite = this.game.add.sprite(xcoord, ycoord, 'purpleBlock');
	this.sprite.anchor.setTo(0.5, 0.5);
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.MAX_SPEED = 500; // pixels/second
	this.MINDIST = 32;
    this.ACCELERATION = 1500; // pixels/second/second
    this.DRAG = 500; // pixels/second
	this.sprite.body.collideWorldBounds = true;
	this.sprite.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED); // x, y
	//this.sprite.body.drag.setTo(this.DRAG, 0); // x, y
	this.target = this.game.input;
	
	this.move = function()
	{
		/*var distance = this.game.math.distance(this.sprite.x, this.sprite.y, this.target.x, this.target.y);
		//if (distance > this.MINDIST)
		//{
        // Calculate the angle to the target
			var rotation = this.game.math.angleBetween(this.sprite.x, this.sprite.y, this.target.x, this.target.y);

			// Calculate velocity vector based on rotation and this.MAX_SPEED
			this.sprite.body.velocity.x = Math.cos(rotation) * this.MAX_SPEED;
			this.sprite.body.velocity.y = Math.sin(rotation) * this.MAX_SPEED;
		//}
		//else
		//{
		//	this.sprite.body.velocity.setTo(0, 0);
		//}*/
		//this.game.physics.moveToPointer(this.sprite, this.MAX_SPEED);
		Phaser.Physics.Arcade.moveToPointer(this.sprite, this.MAX_SPEED);
	}
	
	/*this.idle = function()
	{
		this.sprite.body.acceleration.x = 0;
	}
	
	this.moveRight = function()
	{
		this.sprite.body.acceleration.x = this.ACCELERATION;
	}
	
	this.moveLeft = function()
	{
		this.sprite.body.acceleration.x = -this.ACCELERATION;
	}*/
	
	this.shoot = function(bulletgroup)
	{
		var temp = this.game.add.sprite(this.sprite.x, this.sprite.y, 'purpleShot');
		this.game.physics.enable(temp, Phaser.Physics.ARCADE);
		temp.body.velocity.x = this.sprite.body.velocity.x;
		temp.body.velocity.y = 300;
		bulletgroup.add(temp);
	}
	
	this.kill = function(playersprite, bulletsprite)
	{
		bulletsprite.kill();
		this.sprite.kill();
	}
	
	return this;
};