var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')


canvas.addEventListener("mousedown", draw, false)

function draw(event){
  console.log(event);
  var x = event.x;
  var y = event.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  context.beginPath();
  context.moveTo(50,50);
  context.strokeStyle = "blue"
  context.lineTo(x+5, y);
  context.stroke();
}
