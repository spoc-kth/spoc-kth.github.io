// Date variables
var daysPerMonth = 30;
var daysToShow = 15;

var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();
var daysPerMonth = new Date(currentYear, currentMonth, 0).getDate();

var daysToShow = currentDate.getDate();

// Circle variables
var angle = 360 / daysPerMonth;
var currAngle = 0;
var innerRadius = 50;
var currRadius = innerRadius;
var radius = 40;
var categories = 8;
// Bubbles
var minBubbleRadius = 0;
var maxBubbleRadius = 20;

var totalItems = daysPerMonth*categories;



/* 
Bubble colors
*/

var colrMeat = d3.rgb('#f0a4a6');
var colrFish = d3.rgb('#b1d0cf');
var colrDiary = d3.rgb('#f0d886');
var colrVegetables = d3.rgb('#7a9969');
var colrOther = d3.rgb('#a79787');
var colrSnacks = d3.rgb('#e7a7c9');
var colrBread = d3.rgb('#f4d626');
var colrFreezer = d3.rgb('#558dc6');

var colr1 = colrMeat;
var colr2 = colrFish;
var colr3 = colrDiary;
var colr4 = colrVegetables;
var colr5 = colrOther;
var colr6 = colrSnacks;
var colr7 = colrBread;
var colr8 = colrFreezer;

var colors = [colr1, colr2, colr3, colr4, colr5, colr6, colr7, colr8];
// Bubble opacity
var minOpacity = 0.2;
var normalOpacity = 0.8;
var maxOpacity = 0.99;

// Setup settings for graphic
var canvas_width = 800;
var canvas_height = 800;
var origin = {
    'x': canvas_width/2,
    'y': canvas_height/2
}
// Bubble animation
var moveX = 7;
var moveY = 7;
var bubbleEase = d3.easeLinear;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}