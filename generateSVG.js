// **************************************************


// Create SVG element
var svg = d3.select("#svg")  // This is where we put our vis
    .append("svg")
    .attr("width", canvas_width)
    .attr("height", canvas_height);


var data = randomData; 

var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

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
            return ((d.values['initial'])*maxBubbleRadius) + minBubbleRadius;
        })
        .style("fill", function(d) { 
            return colors[d.radialY]; 
        })
        .on("mouseover", function(d) {     
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div.html(categoryLabels[d.category] + ": " + String(Math.round(d.values.initial*100)) + "% ekologiskt")  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(200)      
                .style("opacity", 0);   
        })
        .transition()
            .delay(function(d) { return getRandomArbitrary(0,1)*1000; })
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

        
var numDays = document.getElementById("numDaysLeft").innerHTML = daysPerMonth-daysToShow;

for (var k=0;k<topListData.length;k++) {
    var j = k+1;
    var number = document.getElementById("toplistNumber" + String(j));
    var name = document.getElementById("toplistName" + String(j));
    var percentage = document.getElementById("toplistPercentage" + String(j));

    number.innerHTML = topListData[k].position;
    name.innerHTML = topListData[k].name;
    var p = topListData[k].value*100;
    p = Math.round(p);
    percentage.innerHTML =  String(p) + "%";
}

