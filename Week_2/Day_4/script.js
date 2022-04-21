const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

const drawCanvas = (x, y, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

//Saved properties - fillStyle, strokeStyle, font, shadow, blur, transformations

/* drawCanvas(10, 20, 60, 60, 'turquoise');
ctx.save();

drawCanvas(100, 150, 60, 60, 'orangeRed');
ctx.save();

drawCanvas(150, 250, 60, 60, 'magenta');

ctx.restore();

drawCanvas(300, 150, 60, 60);

ctx.restore();

drawCanvas(400, 20, 60, 60); */

// setTimeout, setInterval, requestAnimationFrame

const color = {
  red: Math.floor(Math.random() * 255),
  green: Math.floor(Math.random() * 255),
  blue: Math.floor(Math.random() * 255),
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  },
};

/* const updateCanvas = () => {
  color.red = (color.red + 1) % 255;
  color.green = (color.green + 1) % 255;
  color.blue = (color.blue + 1) % 255;

  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillStyle = color.rgb();
  ctx.fillRect(100, 100, 250, 250);

  requestAnimationFrame(updateCanvas);
};

updateCanvas(); */

function clearCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
}
/* let speed1 = 0;
let speed2 = 600;
let speed3 = 700;

const updateCanvas = () => {
  speed1 -= 1;
  speed2 -= 2;
  speed3 -= 3;

  clearCanvas();

  drawCanvas(speed1, 50, 100, 100, 'red');
  drawCanvas(100, speed2, 100, 100, 'green');
  drawCanvas(speed3, speed3, 100, 100, 'blue');

  requestAnimationFrame(updateCanvas);
};

updateCanvas(); */

// OOP - User inputs

ctx.font = '18px serif';

class Pokemon {
  constructor(x, y, url) {
    this.x = x;
    this.y = y;

    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.drawCharacter();
    });
    img.src = url;
    /* 'https://www.seekpng.com/png/full/182-1829970_caterpie-pokemon-sprite-animation-gifs.png' */
  }

  moveUp() {
    this.y -= 25;
  }

  moveDown() {
    this.y += 25;
  }

  moveLeft() {
    this.x -= 25;
  }

  moveRight() {
    this.x += 25;
  }

  reset() {
    this.x = 25;
    this.y = 25;
  }

  drawCharacter() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

const caterpie = new Pokemon(25, 25, 'https://projectpokemon.org/images/shiny-sprite/caterpie.gif');
const bulbasaur = new Pokemon(
  1100,
  700,
  'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif'
);

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      caterpie.moveUp();
      break;
    case 'ArrowDown':
      caterpie.moveDown();
      break;
    case 'ArrowLeft':
      caterpie.moveLeft();
      break;
    case 'ArrowRight':
      caterpie.moveRight();
      break;
    case 'Space':
      caterpie.reset();
      break;
    case 'KeyW':
      bulbasaur.moveUp();
      break;
    case 'KeyA':
      bulbasaur.moveLeft();
      break;
    case 'KeyS':
      bulbasaur.moveDown();
      break;
    case 'KeyD':
      bulbasaur.moveRight();
      break;
  }

  updateCanvas();
});

const updateCanvas = () => {
  clearCanvas();
  ctx.fillText('Caterpie x: ' + caterpie.x, 1000, 40);
  ctx.fillText('Caterpie y: ' + caterpie.y, 1000, 100);

  caterpie.drawCharacter();
  bulbasaur.drawCharacter();
};

updateCanvas();
