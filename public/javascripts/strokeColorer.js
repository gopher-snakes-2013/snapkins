function StrokeColorer() {
  this.indexOfCurrentColor = 0;
}

StrokeColorer.prototype.availableColors = ["#FFFFFF", "#FFFF00", "#FF00FF",
  "#FF0000", "#00FFFF", "#00FF00", "#0000FF"];

StrokeColorer.prototype.color = function() {
  return this.availableColors[this.indexOfCurrentColor];
}


StrokeColorer.prototype.nextColor  = function() {
  this.indexOfCurrentColor++;
  if (this.indexOfCurrentColor >= this.availableColors.length) {
    this.indexOfCurrentColor = 0;
  }
}
