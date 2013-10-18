$(document).ready(function(){


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var flag;
var strokeColor = ["#FFFFFF", "#FFFF00", "#FF00FF", "#FF0000", 
                    "#00FFFF", "#00FF00", "#0000FF"];
var strokeCounter=7;

canvas.addEventListener("mousedown", function(){
  flag = 0;
  strokeCounter++;
  if (strokeCounter === 8) {
    strokeCounter = 0;
  }; 
}, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", function(){flag = 1;}, false);

function draw(event){

  x = event.x - canvas.offsetLeft;
  y = event.y - canvas.offsetTop;


  if (flag === 0){
    context.strokeStyle = strokeColor[strokeCounter];
    context.moveTo(lastx,lasty); //start position
    context.lineTo(x, y); //end position
    context.stroke();
    // strokeColor = 
  }
  lastx = x;
  lasty = y;

};
  $('#save_version').on('click', function(event){
    event.preventDefault();
    var data = canvas.toDataURL();
   // console.log($(data).serialize());
    console.log(data);
    $.ajax({
      type: 'post',
      url: '/canvas',
      data: {"data": data}
    }).done(function(){
      console.log("success")
      $('#save_version').css('background',"red");
    })
})
});




