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
var numOfArms = 7;
var daysToShow = 5;

var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();
var daysPerMonthNum = new Date(currentYear, currentMonth, 0).getDate();
var daysPerMonth = 7; // how many arms the dandelion has

var firstDayOfMonth = new Date(currentYear, currentMonth-1, 1);
firstWeekdayOfMonth = firstDayOfMonth.getDay()-1;
weekdayLabels = weekdayLabelsOriginal.slice(firstWeekdayOfMonth, weekdayLabelsOriginal.length);
weekdayLabels = weekdayLabels.concat(weekdayLabelsOriginal.slice(0,firstWeekdayOfMonth));

daysToShow = currentDate.getDate();
//daysToShow = 12;

// Circle variables
var angle = 360 / daysPerMonth;
var currAngle = 0;
var innerRadius = 10;
var currRadius = innerRadius;
var radius = 41;
var categories = 8;
categories = 4;

var canvas_width = 615;
var canvas_height = 615;
// Bubbles
var minBubbleRadius = 7;
var maxBubbleRadius = 17;

var totalItems = daysPerMonth*categories;




/*
Bubble colors
*/

// green 228B22
var baseH = 120;
var baseS = 76;
var baseV = 55;
var baseColr = d3.rgb('#228B22');
var baseColor = d3.hsl(baseColr);
var gray = d3.rgb('#dddddd')

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
				//'x': categoryPositions[i].x,
				//'y': categoryPositions[i].y,
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


// MAP STYLE
//
var mapStyle_clean = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "color": "#dfdcd5"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "color": "#dfdcd5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "color": "#bad294"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efebe2"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fbfbfb"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#a5d7e0"
            }
        ]
    }
]
var mapStyle_oldschool =
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];
