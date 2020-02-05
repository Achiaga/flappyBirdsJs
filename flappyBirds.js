var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

document.addEventListener('keydown', keyDownEvent);

//draw Bird

var birdSize = 20;

var birdX = canvas.width / 4;

var birdY = canvas.height / 2;

//draw Pipe

var pipeWidth = 50;

var pipeX = (3 * canvas.width) / 4;

var pipesTop = [{}];

var pipesBottom = [{}];

var cont = 0;

var pipeTotal = 6;

var pipeGap = 150;

var maxRandomTopPipe = canvas.height - pipeGap;

for (var i = 0; i < pipeTotal; i++) {
	let randomHeight = Math.floor(Math.random() * maxRandomTopPipe);

	pipesTop.push({
		x: pipeX + cont,

		y: 0,

		h: randomHeight,
	});

	pipesBottom.push({
		x: pipeX + cont,

		y: 100 + randomHeight,

		h: canvas.height - 100 - randomHeight,
	});

	cont += pipeGap;
}

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
	for (var i = 0; i < pipeTotal; i++) {
		ctx.beginPath();

		ctx.rect(pipesTop[i].x, pipesTop[i].y, pipeWidth, pipesTop[i].h);

		ctx.fillStyle = 'green';

		ctx.fill();

		ctx.closePath();

		ctx.beginPath();

		ctx.rect(pipesBottom[i].x, pipesBottom[i].y, pipeWidth, pipesBottom[i].h);

		ctx.fillStyle = 'green';

		ctx.fill();

		ctx.closePath();
	}
}

function jump() {
	birdY -= 40;
}

function movePipe() {
	for (var i = 0; i < pipesTop.length; i++) {
		pipesTop[i].x -= 3;

		pipesBottom[i].x -= 3;

		if (pipesTop[i].x < -pipeWidth / 2) {
			let last = 6;

			let lastX = pipesTop[last].x;

			let randomNewHeight = Math.floor(Math.random() * maxRandomTopPipe);

			pipesTop.push({
				x: lastX + pipeGap,

				y: 0,

				h: randomNewHeight,
			});

			pipesBottom.push({
				x: lastX + pipeGap,

				y: 100 + randomNewHeight,

				h: canvas.height - 100 - randomNewHeight,
			});

			pipesTop.shift();

			pipesBottom.shift();
		}
	}
}

function checkCollission() {
	for (var i = 0; i < pipesTop.length; i++) {
		if (pipesTop[i].x < birdX + birdSize && pipesTop[i].x > birdX - birdSize) {
		}
	}
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

	movePipe();

	//checkCollission();

	console.log(pipesTop);

	//birdY += gravity;
}

var game = setInterval(draw, 100);
