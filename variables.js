
// weekday topLabels
weekdayLabels = [
  'Mån',
  'Tis',
  'Ons',
  'Tor',
  'Fre',
  'Lör',
  'Sön'
]
weekdayLabelsOriginal = weekdayLabels;

// Date variables
var daysPerMonth = 52;
var daysToShow = 15;

var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();
var daysPerMonth = new Date(currentYear, currentMonth, 0).getDate(); // number of days in current month
daysPerMonth = 52; // 52 weeks
var daysToShow = currentDate.getDate(); // current day of month
daysToShow = 47;

// Circle variables
var angle = 360 / daysPerMonth;
var currAngle = 0;
var innerRadius = 50;
var currRadius = innerRadius;
var radius = 30;
var categories = 7;

var canvas_width = 615;
var canvas_height = 615;
// Bubbles
var minBubbleRadius = 3;
var maxBubbleRadius = 14;

var totalItems = daysPerMonth*categories;



/*
Bubble colors
*/
var interpolate = d3.interpolateRgb("yellow", "seagreen");
console.log(interpolate(0.5));

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
var categoryLabels = ["Kött", "Fisk", "Mejeri", "Frukt & grönt", "Torrvaror", "Snacks", "Bröd", "Frys"];
categoryLabels = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
var monthLabels = {
  '0': 'January',
  '3': 'February',
  '7': 'March',
  '10': 'April',
  '13': 'May',
  '17': 'June',
  '20': 'July',
  '23': 'August',
  '27': 'September',
  '30': 'October',
  '33': 'November',
  '37': 'December'
}
var monthsArr = new Array();
    // get current month
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
var numberOfDaysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

var seasonLabels = ["Vår", "Sommar", "Höst", "Vinter"];

// Bubble opacity
var minOpacity = 0.2;
var normalOpacity = 0.8;
var maxOpacity = 0.99;

// Setup settings for graphic

var origin = {
    'x': canvas_width/2,
    'y': canvas_height/2
}
// Bubble animation
var moveX = 7;
var moveY = 7;
var bubbleEase = d3.easeLinear;

var step = 60;
var categoryPositions = [
	{ 'x': origin.x-step*2, 'y': origin.y+step },
	{ 'x': origin.x-(step), 'y': origin.y+step },
	{ 'x': origin.x+(step), 'y': origin.y+step },
	{ 'x': origin.x+step*2, 'y': origin.y+step },
	{ 'x': origin.x-step*2, 'y': origin.y-step },
	{ 'x': origin.x-(step), 'y': origin.y-step },
	{ 'x': origin.x+(step), 'y': origin.y-step },
	{ 'x': origin.x+step*2, 'y': origin.y-step },
];
var categoryPositions = [
	{ 'x': origin.x, 'y': origin.y },
	{ 'x': origin.x-(step*1.2), 'y': origin.y+(step*1.2) },
	{ 'x': origin.x+(step*0.6), 'y': origin.y+(step*1.5) },
	{ 'x': origin.x+step*2, 'y': origin.y+step },
	{ 'x': origin.x-step*2, 'y': origin.y+(step/6) },
	{ 'x': origin.x-(step), 'y': origin.y-step },
	{ 'x': origin.x+(step*0.9), 'y': origin.y-(step*1.35) },
	{ 'x': origin.x+step*2.3, 'y': origin.y-(step*0.5) },
];
var categoryData = [];

for (var i=0; i<categories; i++) {
	categoryData[i] = {
				'value': 0,
				'x': categoryPositions[i].x,
				'y': categoryPositions[i].y,
				'category': i,
				'label': ''
			};
}

// Store name
var storeName = "COOP Norra Djurgårdsstaden";


// number functions
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
