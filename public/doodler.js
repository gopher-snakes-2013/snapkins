var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var flag;

canvas.addEventListener("mousedown", function(){flag = 0;}, false);
canvas.addEventListener("mouseup", function(){flag = 1;}, false);
canvas.addEventListener("mousemove", draw, false);
// canvas.removeEventListener("mouseup", draw, false);



function draw(event){

  var lastx, lasty;

  if (flag === 0){
    console.log(event);
    // x -= canvas.offsetLeft;
    // y -= canvas.offsetTop;
    
    var x = event.x - canvas.offsetLeft;
    var y = event.y - canvas.offsetTop;
    context.strokeStyle = "magenta";
    // context.beginPath();
    context.moveTo(lastx,lasty); //start position
    context.lineTo(x, y); //end position
    context.stroke();
    // context.closePath();
    // context.beginPath();
    // lastx = x;
    // lasty = y;
  }

  // if (flag === 1){
  //   lastx = event.x - canvas.offsetLeft;
  //   lasty = event.y - canvas.offsetTop;
  // }
}

