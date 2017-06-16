var swipeCard = function() {

	var data = randomUserData;
	
	d3.selectAll("circle.bubble")
		.transition()
		.style("opacity", minOpacity);

	for (var i=0; i<daysToShow; i++) {
		for (var c=0; c<categories; c++) {
			
			if(data[i][c] > 0) {
				d3.select("#bubble_id_" + String(i) + "_" + String(c))
					.transition()
					.style("opacity", maxOpacity)
					.attr("r", function(d) {
			            return ((data[i][c])*maxBubbleRadius) + minBubbleRadius;
			        })
			}
		
		}
	}

}

var resetBubbles = function() {

	var data = randomData;

	d3.selectAll("circle.bubble")
		.transition()
		.style("opacity", normalOpacity);

	for (var i=0; i<daysToShow; i++) {
		for (var c=0; c<categories; c++) {
			
			d3.select("#bubble_id_" + String(i) + "_" + String(c))
				.transition()
				.style("opacity", normalOpacity)
				.attr("r", function(d) {
		            return ((data[i][c])*maxBubbleRadius) + minBubbleRadius;
		        })
			
		
		}
	}

}