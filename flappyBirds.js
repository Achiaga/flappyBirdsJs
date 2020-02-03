varcanvas = document.getElementById('myCanvas');

varctx = canvas.getContext('2d');

document.addEventListener('keydown', keyDownEvent);

//draw Bird

var birdSize = 20;

var birdX = canvas.width / 4;

var birdY = canvas.height / 2;

//draw Pipe

var pipeWidth = 50;

var pipeHeight = 150;

var pipeX = (3 * canvas.width) / 4;

varpipesTop = [{ x: pipeX, y: 0 }];

varpipesBottom = [{ x: (3 * canvas.width) / 4, y: canvas.height - pipeHeight }];

varcont = canvas.width / 2;

varpipeY = 0;

varpipeTotal = 1;

varpipeGap = 50;

var maxRandomTopPipe = canvas.height - 50 - pipeGap;

var topPipeHeight = [];

//physics

var gravity = 15;

var speed = 20;

//random Pipes

/*for (var i = 0; i < pipeTotal; i++) {

  var randomHeight = Math.floor(Math.random() * maxRandomTopPipe);

  pipeX.push(cont);

  cont += 150;

  topPipeHeight.push(randomHeight);

}*/

function drawBird() {
	ctx.beginPath();

	ctx.arc(birdX, birdY, birdSize, 0, 2 * Math.PI, false);

	ctx.fillStyle = 'yellow';

	ctx.fill();

	ctx.closePath();
}

function drawPipe() {
	if (pipesTop !== null && pipesTop !== undefined) {
		ctx.beginPath();

		ctx.rect(pipesTop[0].x, pipesTop[0].y, pipeWidth, pipeHeight);

		ctx.fillStyle = 'green';

		ctx.fill();

		ctx.closePath();

		ctx.beginPath();

		ctx.rect(pipesBottom[0].x, pipesBottom[0].y, pipeWidth, pipeHeight);

		ctx.fillStyle = 'green';

		ctx.fill();

		ctx.closePath();
	}
}

function jump() {
	birdY -= 40;
}

function createPipe() {
	for (var i = 0; i < pipeTotal; i++) {
		pipesTop.push({ x: pipeX + pipeGap, y: 0 });

		pipeTotal++;
	}
}

function movePipe() {
	if (pipesTop !== null && pipesTop !== undefined) {
		for (var i = 0; i < pipeTotal; i++) {
			pipesTop[i].x -= 3;

			pipesBottom[i].x -= 3;

			if (pipesTop[i].x < 200) {
				pipesTop.shift();

				pipeTotal--;
			}
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

	if (pipeTotal < 10) {
		createPipe();
	}

	drawPipe();

	if (pipesTop[0] !== null) {
		movePipe();
	}

	//birdY += gravity;
}
