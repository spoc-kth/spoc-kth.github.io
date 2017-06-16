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


var data = randomData; 

for (var i=0; i<daysToShow; i++) {
    for (var c=0; c<categories; c++) {

    svg.append("circle")  // Add circle svg
        .attr("class", "bubble")
        .attr("id", function(d) {
            return "bubble_id_" + String(i) + "_" + String(c);
        })
        .attr("cx", function(d) {
            return origin.x + coordSys[i][c].x;  // Circle's X
        })
        .attr("cy", function(d) {  // Circle's Y
            return origin.y + coordSys[i][c].y;
        })
        .attr("r", function(d) {
            // Return a random number between a and b:
            a = minBubbleRadius;
            b = maxBubbleRadius;
            return ((data[i][c])*maxBubbleRadius) + minBubbleRadius;
        })
        .style("fill", function(d) { 
            return colors[c]; 
        });

    }
}

var numDays = document.getElementById("numDaysLeft").innerHTML = daysPerMonth-daysToShow;

/* TODO : 
 * Filter out user data
      - look through user's data last month
      - If user has been shopping this category this day
        - resize bubble
        - opacity: 1
 * Idle animation
    - Random "floating" animation
 * "Swipe my card" function
    - Function that mimics a swipe of a coop member card
 * Set styling on hover??


*/