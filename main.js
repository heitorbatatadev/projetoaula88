
var canvas = new fabric.canva('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight (50);
		hole_obj.set({
		top:hole_y,
		left:hole_x
		});
		canvas.add(hole_obj);
		});
		new_image();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj);
		});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x) && (ball_y==hole_y)){ canvas.remove(ball_obj);
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(playerY>=0)
    	playerY = playerY - blockImg_.
		canvas.remove(playerOBJ);
    	playerUPD();
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
	}

	function left()
	{
		if(ball_X >5)
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}

