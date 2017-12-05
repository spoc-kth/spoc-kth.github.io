
// *************************************************
// MAP
function initMap() {
  var clover = 'img/clover.png';
  var goldStar = {
          path: 'M49.34,29.72a9.1,9.1,0,0,0-2.71-1.81,9.16,9.16,0,0,0,2.71-1.81,11.65,11.65,0,0,0,3.44-7A8,8,0,0,0,44.86,10a8.19,8.19,0,0,0-2.31-5.64c-3.49-3.49-9.7-3-13.83,1.17a9,9,0,0,0-1.81,2.7,9.24,9.24,0,0,0-1.81-2.7C21,1.34,14.76.82,11.27,4.31A8.24,8.24,0,0,0,9,10a8.2,8.2,0,0,0-5.64,2.32C-.18,15.76.34,22,4.48,26.1a9.24,9.24,0,0,0,2.7,1.81,9,9,0,0,0-2.7,1.81C.34,33.85-.18,40.05,3.31,43.55A8.19,8.19,0,0,0,9,45.86a7.91,7.91,0,0,0,8.17,8,11.48,11.48,0,0,0,8-3.47,8.59,8.59,0,0,0,1.14-1.46c.12.54.27,1.07.44,1.59.1.28.21.56.32.84s.16.46.25.68c.17.38.35.75.53,1.12.06.11.11.23.16.34.23.44.48.86.74,1.27a.75.75,0,0,0,.07.12,19.65,19.65,0,0,0,8.38,7.35h0c.47.22,1,.41,1.45.6l.08,0c.46.17.94.31,1.41.45l.19,0c.45.12.9.22,1.36.31l.29.06c.44.08.88.13,1.33.18l.36,0c.57,0,1.15.07,1.74.07a1.21,1.21,0,0,0,0-2.42c-.41,0-.81,0-1.21,0l-.44,0L43,61.41l-.55-.09-.55-.1c-.21,0-.43-.09-.64-.15L40.92,61a17,17,0,0,1-3.57-1.4A17.34,17.34,0,0,1,32.71,56l-.11-.12c-.27-.29-.52-.6-.77-.92-.08-.09-.15-.19-.22-.28-.21-.27-.4-.55-.59-.83l-.24-.36c-.18-.28-.34-.57-.5-.86-.07-.12-.14-.24-.2-.36q-.33-.61-.6-1.26a11.32,11.32,0,0,0,7.22,2.78,7.91,7.91,0,0,0,8.16-8,8.15,8.15,0,0,0,5.64-2.31,8.32,8.32,0,0,0,2.28-6.79A11.65,11.65,0,0,0,49.34,29.72ZM47.17,41.34a7.08,7.08,0,0,1-4.84,2,6.78,6.78,0,0,1-7,6.82,9.63,9.63,0,0,1-6.19-2.38l-.85-.56V42.53a7.42,7.42,0,0,0,1.66,3.17c2.74,2.74,6.75,3.18,8.93,1a5.1,5.1,0,0,0,1.34-4.34,1,1,0,0,1,1.16-1.16,5.12,5.12,0,0,0,4.34-1.33,5.07,5.07,0,0,0,1.35-4.16,7.91,7.91,0,0,0-2.35-4.78,8.83,8.83,0,0,0-4.47-2H34.08a1,1,0,0,1,0-2.08h6.15a8.75,8.75,0,0,0,4.47-2,7.86,7.86,0,0,0,2.35-4.77A5.06,5.06,0,0,0,45.7,16a5.09,5.09,0,0,0-4.34-1.33,1,1,0,0,1-.86-.3,1,1,0,0,1-.3-.86,5.1,5.1,0,0,0-1.33-4.34c-2.19-2.19-6.2-1.74-8.94,1a8.83,8.83,0,0,0-2,4.47v6.14a1,1,0,0,1-2.08,0V14.59a8.71,8.71,0,0,0-2-4.47c-2.73-2.74-6.74-3.19-8.93-1a5.06,5.06,0,0,0-1.33,4.33,1,1,0,0,1-1.16,1.16A5.11,5.11,0,0,0,8.12,16c-2.19,2.19-1.74,6.19,1,8.93a8.75,8.75,0,0,0,4.47,2h7.29a1,1,0,1,1,0,2.08H13.59a8.83,8.83,0,0,0-4.47,2c-2.74,2.74-3.19,6.75-1,8.93a5.08,5.08,0,0,0,4.34,1.34,1,1,0,0,1,.86.3,1.08,1.08,0,0,1,.3.86A5.09,5.09,0,0,0,15,46.7c2.19,2.18,6.19,1.73,8.93-1a8.75,8.75,0,0,0,2-4.47v5.35a7.54,7.54,0,0,1-.52.59,9.81,9.81,0,0,1-6.85,3,6.78,6.78,0,0,1-7-6.83,7,7,0,0,1-4.84-2c-3-3-2.55-8.33,1-11.88A7.9,7.9,0,0,1,10,27.91a7.73,7.73,0,0,1-2.32-1.56c-3.55-3.55-4-8.87-1-11.87a7,7,0,0,1,4.84-2,7,7,0,0,1,2-4.84c3-3,8.33-2.55,11.87,1A7.73,7.73,0,0,1,26.91,11a7.9,7.9,0,0,1,1.55-2.32c3.55-3.55,8.88-4,11.88-1a7.08,7.08,0,0,1,2,4.84,6.85,6.85,0,0,1,6.79,7.82,10,10,0,0,1-2.95,6,7.78,7.78,0,0,1-2.33,1.56,8,8,0,0,1,2.33,1.55,10,10,0,0,1,2.95,6A7.1,7.1,0,0,1,47.17,41.34Z',
          fillColor: 'yellow',
          fillOpacity: 0.8,
          scale: 0.1,
          strokeColor: 'gold',
          strokeWeight: 4
        };
        var circle = {
                path: 'M 10, 10 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
                fillColor: 'green',
                fillOpacity: 0.8,
                scale: 0.1,
                strokeColor: 'darkseagreen',
                strokeWeight: 4
              };

  var stockholm = {lat: 59.336447, lng: 18.067980};
  // map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: stockholm
  });
  var styledMapType = new google.maps.StyledMapType(mapStyle_clean);
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
  // positions
  var uluru = {lat: -25.363, lng: 131.044};

  var coopNorraD = {lat: 59.358553, lng: 18.091486};
  var coopHotorget = {lat: 59.335285, lng: 18.063257};
  var coopCentralen = {lat: 59.330026, lng: 18.058139};
  var coopOstermalm = {lat: 59.336766, lng: 18.080502};
  var kth = {lat: 59.347367, lng: 18.074351};

  // markers
  var marker1 = new google.maps.Marker({
    position: coopNorraD,
    map: map,
    icon: goldStar,
    animation: google.maps.Animation.BOUNCE,
  });
  var marker2 = new google.maps.Marker({
    position: coopOstermalm,
    map: map,
    icon: circle
  });
  var marker3 = new google.maps.Marker({
    position: coopCentralen,
    map: map,
    icon: clover
  });
}



// **************************************************
// Legend

var legendSvg = d3.select("#legend")
  .append("svg")
  .attr("width", 90)
  .attr("height", 50);

var legendBubbles = legendSvg.selectAll("circle.legend")
  .data(legendData)

legendBubbles.enter().append("circle")
  .attr("class", "legend")
  .attr("r", function(d) {
      return d.radius;
  })
  .attr("cx", function(d) {
      return d.posX;  // Circle's X
  })
  .attr("cy", function(d) {  // Circle's Y
      return d.posY;
  })
  .style("fill", function(d) {
      return d.fill;
  })

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

    var labels = svg.selectAll("text.label")
      .data(labelData)

    labels.enter().append('text')
      .attr("class", function(d){
          return "label";
      })
      .attr("x", function(d) {
          return d.posX;  // Circle's X
      })
      .attr("y", function(d) {  // Circle's Y
          return d.posY;
      })
      .attr("text-anchor", "middle")
      .text(function(d) {
        return d.label
      })

var bubbles = svg.selectAll("circle.bubble")  // Add circle svg
    .data(bubbleData)

bubbles.enter().append('circle')
        .attr("class", function(d){
            if (d.radialX == daysToShow && d.radialY == dayOfWeek-1) {
                return "bubble bubble-visible bubble-today bubble-category-" + String(d.category);
            } else if (d.radialX == daysToShow && d.radialY < dayOfWeek) {
                return "bubble bubble-visible bubble-category-" + String(d.category);
            } else if (d.radialX < daysToShow) {
                return "bubble bubble-visible bubble-category-" + String(d.category);
            } else {
                return "bubble bubble-opacity bubble-category-" + String(d.category);
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
            console.log((d.radialY+1)/categories);
            currMaxRadius = interpolatedRadius((d.radialY+1)/categories);
            return ((d.values['initial'])*currMaxRadius) + minBubbleRadius;
        })
        .style("fill", function(d) {
            return interpolate(d.values['initial']);
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

var forceStrength = 0.03;
var force = d3.forceCenter([origin.x, origin.y]);



var categoryBubbles = svg.selectAll(".category")  // Add circle svg
    .data(categoryData);

var categoryGroupBubbles = categoryBubbles.enter().append('g')
        .attr("class", function(d){
            return "category category-" + String(d.category);
        })
        .attr("id", function(d) {
            return "category_id_" + String(d.category) + "_" + String(d.category);
        })
        .attr("cx", function(d) {
            return d.x;  // Circle's X
        })
        .attr("cy", function(d) {  // Circle's Y
            return d.y;
        })
        .style("opacity", 0)
        .on("mouseover", function(d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html(categoryLabels[d.category] + ": " + String(Math.round(d.value*100)) + "% ekologiskt")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            div.transition()
                .duration(200)
                .style("opacity", 0);
        })


categoryGroupBubbles.append('circle')
        .attr("cx", function(d) {
            return d.x;  // Circle's X
        })
        .attr("cy", function(d) {  // Circle's Y
            return d.y;
        })
        .attr("r", function(d) {
            return 0;//((d.value)*maxBubbleRadius) + minBubbleRadius;
        })
        .style("fill", function(d) {
            return colors[d.category];
        })

categoryGroupBubbles.append('text')
    .attr("x", function(d) {
            return d.x - ((d.value)*maxBubbleRadius*5)/2;  // Circle's X
        })
        .attr("y", function(d) {  // Circle's Y
            return d.y;
        })
    .attr("dy", ".35em")
    .text(function(d) {
        return String(Math.round(d.value*100)) + "%";
    });

    // @v4 Merge the original empty selection and the enter selection
    categoryBubbles = categoryBubbles.merge(categoryGroupBubbles);


svg.append('text')
  .attr("class", "middle")
  .attr("x", function(d) {
      return origin.x;  // Circle's X
  })
  .attr("y", function(d) {  // Circle's Y
      return origin.y+1;
  })
  .attr("text-anchor", "middle")
  .style("width", innerRadius*2)
  .text(function(d) {
      return currentYear;
  });

//var numDays = document.getElementById("numDaysLeft").innerHTML = daysPerMonth-daysToShow;
