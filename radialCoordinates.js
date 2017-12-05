
var radiusStep = function(x) {
  return radius - 1.5*x;
}

coordSys = [];
topLabels = [];

for (var d=0; d<daysPerMonth; d++) {
    currAngle = angle*d -90;
    var r, a, x, y;

    coordSys[d] = [];



    for (var c=0; c<categories; c++) {
        currRadius += radiusStep(c);
        r = currRadius;
        a = currAngle * (Math.PI/180);

        x = r*Math.cos(a);
        y = r*Math.sin(a);

        position = {
            'x':0,
            'y':0,
            'angle': currAngle,
            'radius': currRadius
        }

        position.x = x;
        position.y = y;
        //console.log(position);
        coordSys[d][c] = position;
    }

    // top labels
    currRadius += radius;
    r = currRadius+8;
    x = r*Math.cos(a);
    y = r*Math.sin(a);

    topLabels[d] = {
      'x': x,
      'y': y,
      'angle': currAngle,
      'radius': currRadius
    };

    currRadius = innerRadius;

}
