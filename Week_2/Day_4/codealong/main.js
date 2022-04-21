const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

const gameLogic = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    ctx.clearRect(0, 0, cWidth, cHeight);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    ctx.font = '36px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${points}`, 100, 50);
  },
};

const player = new Component(50, 50, 'red', 0, 250);

const updateGameArea = () => {
  gameLogic.clear();
  gameLogic.score();
  player.newPos();
  player.update();
  updateObstacles();
  checkGameOver();
};

const obstacles = [];

function updateObstacles() {
  gameLogic.frames++;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].x -= 1;
    obstacles[i].update();
  }

  if (gameLogic.frames % 120 === 0) {
    let x = cWidth;

    let minHeight = 50;
    let maxHeight = 300;

    let height = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);

    let minGap = 100;
    let maxGap = 200;

    let gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

    obstacles.push(new Component(20, height, 'green', x, 0));

    obstacles.push(new Component(20, x - height - gap, 'green', x, height + gap));
  }
}

function checkGameOver() {
  const crashed = obstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    gameLogic.stop();
  }
}

gameLogic.start();
