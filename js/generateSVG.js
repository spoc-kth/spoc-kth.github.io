
// *************************************************
// MAP
function initMap() {
  var stockholm = {lat: 59.336447, lng: 18.067980};
  // map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: stockholm
  });
  var styledMapType = new google.maps.StyledMapType(mapStyle_oldschool);
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
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: coopOstermalm,
    map: map
  });
  var marker3 = new google.maps.Marker({
    position: coopCentralen,
    map: map
  });
}



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

var bubbles = svg.selectAll("circle.bubble")  // Add circle svg
    .data(bubbleData)

bubbles.enter().append('rect')
        .attr("class", function(d){
            if (d.radialX < daysToShow) {
                return "bubble bubble-visible bubble-category-" + String(d.category);
            } else {
                return "bubble bubble-hidden bubble-category-" + String(d.category);
            }
        })
        .attr("id", function(d) {
            return "bubble_id_" + String(d.radialX) + "_" + String(d.radialY);
        })
        .attr("x", function(d) {
            return d.posX;  // Circle's X
        })
        .attr("y", function(d) {  // Circle's Y
            return d.posY;
        })
        .attr("width", function(d) {
            return minBubbleRadius;
        })
        .attr("height", function(d) {
            return maxBubbleRadius;
        })
        .style("fill", function(d) {
            return baseColor;
            //return colors[d.radialY];
        })
        .style("opacity", function(d) {
            return d.values.initial;
            //return colors[d.radialY];
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
        /*
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
        */

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



var numDays = document.getElementById("numDaysLeft").innerHTML = daysPerMonth-daysToShow;
function CurrentMonthName ()
{
    var dateObj = new Date();
    // create an array
    var monthsArr = new Array();
    // get current month
    var currMonth = dateObj.getMonth();
    // store month names into our array
    monthsArr[0] = "Januari";
    monthsArr[1] = "Februari";
    monthsArr[2] = "Mars";
    monthsArr[3] = "April";
    monthsArr[4] = "Maj";
    monthsArr[5] = "Juni";
    monthsArr[6] = "Juli";
    monthsArr[7] = "Augusti";
    monthsArr[8] = "September";
    monthsArr[9] = "Oktober";
    monthsArr[10] = "November";
    monthsArr[11] = "December";
    return monthsArr[currMonth];
}

document.getElementById("currentMonthName").innerHTML = CurrentMonthName();

/*
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
}*/
