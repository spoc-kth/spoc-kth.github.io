var swipeCard = function() {

	var data = randomUserData;
	
	d3.selectAll("circle.bubble")
		.on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);  
            var tooltipText = "";
            if(d.values['user1'] > 0) {
            	tooltipText = String(Math.round(d.values['user1']*100))
            } else {
            	tooltipText = String(Math.round(d.values['initial']*100))
            }

            div.html(categoryLabels[d.category] + ": " + tooltipText + "% ekologiskt")  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(200)      
                .style("opacity", 0);   
        })
		.transition()
			.style("opacity", function(d) {
				if(d.values['user1'] > 0) {
					return maxOpacity;
				} else {
					return minOpacity;
				}
			})
			.attr("r", function(d) {
				if(d.values['user1'] > 0) {
			       return ((d.values['user1'])*maxBubbleRadius) + minBubbleRadius;
			    } else {
			    	return ((d.values['initial'])*maxBubbleRadius) + minBubbleRadius;
			    }
			    })
}

var resetBubbles = function() {

	var data = randomData;

	d3.selectAll("circle.bubble")
		.transition()
		.style("opacity", normalOpacity)
		.attr("r", function(d) {
                    return ((d.values['initial'])*maxBubbleRadius) + minBubbleRadius;
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




