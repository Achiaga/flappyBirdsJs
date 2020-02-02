var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

document.addEventListener('keydown', keyDownEvent);

//draw Snake

var birdSize = 20;

var birdX = canvas.width / 4;

var birdY = canvas.height / 3;

//draw pipe

var pipeWidth = 50;

// var pipeHeight = 200;

var pipeX = [];

var cont = canvas.width / 2;

var pipeY = 0;

var pipeTotal = 10;

var pipeGap = 50;

var maxRandomTopPipe = canvas.height - 50 - pipeGap;

var topPipeHeight = [];

//physics

var gravity = 15;

var speed = 20;

//random Pipes
for (var i = 0; i < pipeTotal; i++) {
	var randomHeight = Math.floor(Math.random() * maxRandomTopPipe);
	pipeX.push(cont);
	cont += 150;
	topPipeHeight.push(randomHeight);
}

function drawBird() {
	ctx.beginPath();

	ctx.arc(birdX, birdY, birdSize, 0, 2 * Math.PI, false);

	ctx.fillStyle = 'yellow';

	ctx.fill();

	ctx.closePath();
}

function drawPipe() {
	for (var i = 0; i < pipeTotal; i++) {
		ctx.beginPath();

		ctx.rect(pipeX[i], pipeY, pipeWidth, topPipeHeight[i]);

		ctx.fillStyle = 'green';

		ctx.fill();

		ctx.closePath();
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
	for (var i = 0; i < pipeTotal; i++) {
		if (birdX === pipeX[i]) {
			pipeX.splice(i, 1);
		}
		pipeX[i] -= speed;
	}

	console.log(pipeX);
}

var game = setInterval(draw, 100);
