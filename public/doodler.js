var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')


canvas.addEventListener("mousemove", draw, false)

function draw(event){
  console.log(event);
  var x = event.x;
  var y = event.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  context.beginPath();
  context.moveTo(x,y);
  context.strokeStyle = "magenta"
  context.lineTo(x+500, y);
  context.stroke();
}
