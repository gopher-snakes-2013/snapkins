describe("createCanvas", function(){
  beforeEach(function() {
    canvas = document.createElement('canvas');
  });


  it("should return a canvas object", function(){
    // var canvas = document.createElement('canvas');
    expect(canvas).toBeDefined();
  });
});