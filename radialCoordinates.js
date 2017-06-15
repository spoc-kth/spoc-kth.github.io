var daysPerMonth = 30;
var angle = 360 / daysPerMonth;
var currAngle = 0;
var categories = 8;
var radius = 40;
var innerRadius = 50;
var currRadius = innerRadius;

totalItems = daysPerMonth*categories;

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

// **************************************************
// Setup settings for graphic
var canvas_width = 800;
var canvas_height = 800;
var origin = {
    'x': canvas_width/2,
    'y': canvas_height/2
}

// Create SVG element
var svg = d3.select("h3")  // This is where we put our vis
    .append("svg")
    .attr("width", canvas_width)
    .attr("height", canvas_height);

var daysToShow = 15;
for (var i=0; i<daysToShow; i++) {
    for (var c=0; c<categories; c++) {

    svg.append("circle")  // Add circle svg
        .attr("cx", function(d) {
            return origin.x + coordSys[i][c].x;  // Circle's X
        })
        .attr("cy", function(d) {  // Circle's Y
            return origin.y + coordSys[i][c].y;
        })
        .attr("r", function(d) {
            // Return a random number between a and b:
            a = 3;
            b = 15;
            return Math.floor((Math.random() * b) + a);
        });  // radius

    }
}

var numDays = document.getElementById("numDaysLeft").innerHTML = daysPerMonth-daysToShow;

