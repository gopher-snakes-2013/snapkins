$('#save_version').on('click', function(event){
  event.preventDefault();
  console.log("hi");
})

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var flag;

canvas.addEventListener("mousedown", function(){flag = 0;}, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", function(){flag = 1;}, false);


function draw(event){

  x = event.x - canvas.offsetLeft;
  y = event.y - canvas.offsetTop;


  if (flag === 0){

    context.strokeStyle = "blue";
    context.moveTo(lastx,lasty); //start position
    context.lineTo(x, y); //end position
    context.stroke();
  }
  lastx = x;
  lasty = y;

};
