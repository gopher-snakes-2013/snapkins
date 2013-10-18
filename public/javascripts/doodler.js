function runDoodler() {
  console.log('running');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var colorer = new StrokeColorer();

  var flag;

  canvas.addEventListener("mousedown", function(){
    flag = 0;
    colorer.nextColor();
  }, false);

  canvas.addEventListener("mousemove", draw, false);
  canvas.addEventListener("mouseup", function(){flag = 1;}, false);

  var lastx, lasty;
  // Let's stop putting lastx and lasty in the global scope ;)
  function draw(event){

    x = event.x - canvas.offsetLeft;
    y = event.y - canvas.offsetTop;


    if (flag === 0){
      context.strokeStyle = colorer.color();
      context.moveTo(lastx,lasty); //start position
      context.lineTo(x, y); //end position
      context.stroke();
    }
    lastx = x;
    lasty = y;
  };
}
