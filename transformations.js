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
var o = 0;
// d3.selectAll("circle.bubble")
// 	.transition()
// 		.duration(2500)
// 		.delay(function(d, i) { 
// 			return i * 50; 
// 		})
// 		.on("start", function repeat() {
// 			d3.active(this)
// 				.style("fill", function(){
// 					return "red";
// 				})
// 				.transition()
// 					.style("fill", "blue")
// 				.transition()
//             		.on("start", repeat);
// 		})


for (var i=0; i<daysToShow; i++) {
		for (var c=0; c<categories; c++) {
		
			currentBubbleId = "#bubble_id_" + String(i) + "_" + String(c);
			console.log(currentBubbleId);
			

			d3.select("#bubble_id_" + String(i) + "_" + String(c))
				.transition()
					.duration(2500)
					.on("start", function repeat() {
						d3.active(this)
							.transition()
								.style("fill", function(){
				 					return "red";
				 				})
								.attr("cx", function(d) {
						             console.log(d, currentBubbleId, origin, i, c, coordSys[i][c]);
						             return 5;
						             //return origin.x + coordSys[i][c].x + 5;  // Circle's X
						         })
						    .transition()
						    	.style("fill", function(){
				 					return "blue";
				 				})
						        // .attr("cy", function(d) {  // Circle's Y
						        //     return origin.y + coordSys[i][c].y + 5;
						        // })
							.transition()
			             		.on("start", repeat);
					    });

		}
	}


