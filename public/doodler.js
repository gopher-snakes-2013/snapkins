var homepage_canvas = document.getElementById("doodleView")

function fillRect() {
  homepage_canvas = homepage_canvas.getContext("2d");
  homepage_canvas.fillRect(50,25,150,100);
}

function clearCanvas(){
  homepage_canvas.width = homepage_canvas.width;
}
