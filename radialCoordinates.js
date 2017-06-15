
coordSys = [];

for (var d=0; d<daysPerMonth; d++) {
    currAngle = angle*d -90;
    coordSys[d] = [];

    for (var c=0; c<categories; c++) {
        currRadius += radius;
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
    currRadius = innerRadius;

} 


