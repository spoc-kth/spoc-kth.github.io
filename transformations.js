/*  SLIDER TRANSITIONS ==========================
*/
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}



/* INTERACTIONS =========================
*/
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
		.attr("cx", function(d) {
            return d.posX;  // Circle's X
        })
        .attr("cy", function(d) {  // Circle's Y
            return d.posY;
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

	d3.selectAll(".category")
		.transition()
			.attr("r", function(d) {
	            return 0;
	        })
	        .style("opacity", 0);
}


var mergeBubbles = function() {

	d3.selectAll("circle.bubble")
		.transition()
            .ease(bubbleEase)
            .attr("cx", function(d) {
                 return origin.x;
             })
            .attr("cy", function(d) {  // Circle's Y
                return origin.y;
            })

}

var mergeCategories = function() {
	for (var i=0; i<categories; i++) {

		var currentCat = ".bubble-category-" + String(i);
		d3.selectAll(currentCat)
		.transition()
            .ease(bubbleEase)
            .attr("cx", function(d) {
                 //return origin.x;
                 return categoryPositions[d.category].x;
             })
            .attr("cy", function(d) {  // Circle's Y
                //return origin.y;
                return  categoryPositions[d.category].y;
            })
        .transition()
        	.style("opacity", 0);
	}
    d3.selectAll(".category")
    .transition()
        .style("opacity", normalOpacity);
    d3.selectAll(".category circle")
    .transition()
        .attr("r", function(d) {
            return ((d.value)*(maxBubbleRadius*5)) + minBubbleRadius;
        })
        .attr("cx", function(d) {
            //console.log(d);
            //return origin.x;
            return categoryPositions[d.category].x;
         })
        .attr("cy", function(d) {  // Circle's Y
            //console.log(d);
            //return origin.y;
            return  categoryPositions[d.category].y;
        })

}

var forceMerge = function() {
	simulation.force('x', d3.forceX().strength(forceStrength).x(d.x));
    simulation.force('y', d3.forceY().strength(forceStrength).y(d.y));
    simulation.alpha(1).restart();
}
