// **************************************************


// Create SVG element
var svg = d3.select("h3")  // This is where we put our vis
    .append("svg")
    .attr("width", canvas_width)
    .attr("height", canvas_height);


var data = randomData; 

for (var i=0; i<daysToShow; i++) {
    for (var c=0; c<categories; c++) {

        bubbleCoord = {
                'x': i,
                'y': c
            };
            pdata = [10,12,6,8,15];

        svg.selectAll("circle")  // Add circle svg
            .data(bubbleData)
            .enter()
                .append('circle')
                .attr("class", function(d){
                    if (d.radialX < daysToShow) {
                        return "bubble bubble-visible"
                    } else {
                        return "bubble bubble-hidden"
                    }
                })
                .attr("id", function(d) {
                    return "bubble_id_" + String(d.radialX) + "_" + String(d.radialY);
                })
                .attr("cx", function(d) {
                    return d.posX;  // Circle's X
                })
                .attr("cy", function(d) {  // Circle's Y
                    return d.posY;
                })
                .attr("r", function(d) {
                    return ((data[d.radialX][d.radialY])*maxBubbleRadius) + minBubbleRadius;
                })
                .style("fill", function(d) { 
                    return colors[d.radialY]; 
                })
                .transition()
                    .duration(0)
                    .on("start", function repeat() {
                        d3.active(this)
                            .transition()
                                .duration(1300)
                                .ease(bubbleEase)
                                .attr("cx", function(d) {
                                     return d.posX + ((getRandomArbitrary(0,1)*moveX)-(moveX/2));
                                 })
                                .attr("cy", function(d) {  // Circle's Y
                                    return d.posY + ((getRandomArbitrary(0,1)*moveY)-(moveY/2));
                                })
                            .transition()
                                .duration(1300)
                                .ease(bubbleEase)
                                .attr("cx", function(d) {
                                     return d.posX + ((getRandomArbitrary(0,1)*moveX)-(moveX/2));
                                 })
                                .attr("cy", function(d) {  // Circle's Y
                                    return d.posY + ((getRandomArbitrary(0,1)*moveY)-(moveY/2));
                                })
                            .transition()
                                .duration(0)
                                .on("start", repeat);
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