describe('StrokeColorer', function () {
  it('it starts out ', function () {
    var colorer = new StrokeColorer();
    expect(colorer.color()).toEqual('#FFFFFF');
  });

  describe('#nextColor', function() {
    it("advances the color to #FFFF00 when it's called once", function() {
      var colorer = new StrokeColorer();
      colorer.nextColor();
      expect(colorer.color()).toEqual('#FFFF00');
    });

    it('resets to the beginning after it runs out of availableColors', function() {
      var colorer = new StrokeColorer();
      colorer.nextColor();
      colorer.nextColor();
      colorer.nextColor();
      colorer.nextColor();
      colorer.nextColor();
      colorer.nextColor();
      colorer.nextColor();
      expect(colorer.color()).toEqual('#FFFFFF');
    });
  });
});

