const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

//Rectangles
//fillRect(x, y, width, height)
//strokeRect(x, y, width, height)
//clearRect(x, y, width, height)

const draw = () => {
  //rectangles
  /*   ctx.fillStyle = 'purple';
  ctx.fillRect(125, 125, 300, 300);
  ctx.clearRect(145, 145, 260, 260);
  ctx.strokeRect(150, 150, 250, 250);

  ctx.fillStyle = 'color'
  ctx.strokeStyle = 'color'
  ctx.lineWidth = 20

  //paths
  ctx.fillStyle = 'black';
  ctx.lineWidth = 10; */
  /* ctx.beginPath();
  //first line
  ctx.moveTo(50, 50);
  ctx.lineTo(250, 50);

  //moves the pen to the end of the first line
  ctx.moveTo(250, 50);
  ctx.lineTo(250, 250); */
  //strokes the line
  /*  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
  ctx.closePath(); */
  //Arcs
  //arc(x, y, radius, startAngle, endAngle, anticlockWise)
  // radians = (Math.PI/180) * degrees
  /*  ctx.beginPath();
  ctx.arc(350, 350, 175, 0, Math.PI * 2);
  ctx.lineWidth = 20;
  ctx.strokeStyle = 'green';
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(350, 350, 75, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath(); */
  /* let grd = ctx.createLinearGradient(0, 0, 800, 0);
  grd.addColorStop(0, 'red');
  grd.addColorStop(1, 'blue');

  ctx.fillStyle = grd;

  ctx.fillRect(0, 0, 900, 600); */
  /*  ctx.font = '64px serif';

  ctx.fillText('Hello world', 10, 100);
  ctx.strokeText('Hello world', 10, 300); */
};

//draw();

//Paths
//beginPath()
//stroke()
//fill()
//closePath

//Color
//ctx.fillStyle = 'rgba(2, 2, 2, 0.5)'
//ctx.strokeStyle = 'red'

//Images

const tileImg = new Image();

/* tileImg.addEventListener('load', () => {
  tileImg.src = 'images/tile.jpg';
}); */

tileImg.src = 'images/tile.jpg';

let tileX = 0;
let tileY = 0;

const drawCanvas = () => {
  ctx.clearRect(0, 0, 900, 600);

  let tilePattern = ctx.createPattern(tileImg, 'repeat');
  ctx.fillStyle = tilePattern;
  ctx.fillRect(0, 0, 900, 600);

  /* ctx.drawImage(tileImg, tileX % 900, tileY, 50, 50);

  tileX += 5;


  setTimeout(() => {
    drawCanvas();
  }, 30); */
};
