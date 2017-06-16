var swipeCard = function() {

	var data = randomUserData;
	
	d3.selectAll("circle.bubble")
		.transition()
			.style("opacity", function(d) {
				if(data[d.radialX][d.radialY] > 0) {
					return maxOpacity;
				} else {
					return minOpacity;
				}
			})
			.attr("r", function(d) {
				if(data[d.radialX][d.radialY] > 0) {
			       return ((data[d.radialX][d.radialY])*maxBubbleRadius) + minBubbleRadius;
			    } else {
			    	return ((randomData[d.radialX][d.radialY])*maxBubbleRadius) + minBubbleRadius;
			    }
			    })


}

var resetBubbles = function() {

	var data = randomData;

	d3.selectAll("circle.bubble")
		.transition()
		.style("opacity", normalOpacity)
		.attr("r", function(d) {
                    return ((data[d.radialX][d.radialY])*maxBubbleRadius) + minBubbleRadius;
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




