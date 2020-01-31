var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

document.addEventListener('keydown', keyDownEvent);

//draw Snake

var birdSize = 20;

var birdX = canvas.width / 3;

var birdY = canvas.height / 2;

//draw pipe

var pipeWidth = 20;

var pipeHeight = 20;

var pipeX = canvas.width / 2;

var pipeY = 0;

var pipeTotal = 10;

var gapPipe = 50;

var topPipeHeight = [];

//physics

var gravity = 15;

var speed = 20;

function drawBird() {
	ctx.beginPath();

	ctx.arc(birdX, birdY, birdSize, 0, 2 * Math.PI, false);

	ctx.fillStyle = 'yellow';

	ctx.fill();

	ctx.closePath();
}

function drawPipe() {
	ctx.beginPath();

	ctx.rect(pipeX, pipeY, pipeWidth, pipeHeight);

	ctx.fillStyle = 'green';

	ctx.fill();

	ctx.closePath();
}

function pipeHeight() {
	for (vari = 0; i < pipeTotal; i++) {
		var height = 0;
	}
}

function jump() {
	birdY -= 40;
}

function keyDownEvent(e) {
	switch (e.keyCode) {
		case 32:
			jump();

			break;

		default:
			break;
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawBird();

	drawPipe();

	//birdY += gravity;

	pipeX -= speed;
}

var game = setInterval(draw, 200);
