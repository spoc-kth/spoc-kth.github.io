

var generateRandomData = function() {
	var dataArray = [];
	for (var i=0; i<daysPerMonth; i++) {
		dataArray[i] = [];

		for (var c=0; c<categories; c++) {

			// Random number between 0 and 1
			dataArray[i][c] = getRandomArbitrary(0,1);

		}

	}
	return dataArray;

}

var generateRandomDataOneArray = function() {
	var dataArray = [];
	var j = 0;
	for (var i=0; i<daysPerMonth; i++) {
		//dataArray[i] = [];

		for (var c=0; c<categories; c++) {

			// Random number between 0 and 1
			dataArray[j] = getRandomArbitrary(0,1);
			j += 1;

		}

	}
	return dataArray;

}

var generateRandomUserData = function() {
	var dataArray = [];
	for (var i=0; i<daysPerMonth; i++) {
		dataArray[i] = [];

		shoppedToday = getRandomInt(0,2);

		for (var c=0; c<categories; c++) {
	
			if (shoppedToday) {
				shoppedThisCategory = getRandomInt(0,2);
				if (shoppedThisCategory) {
					// Random number between 0 and 1
					dataArray[i][c] = getRandomArbitrary(0,1);
				} else {
					dataArray[i][c] = 0;
				}
			} else {
				dataArray[i][c] = 0;
			}
		}

	}

	return dataArray;
}

var generateRandomUserDataOneArray = function() {
	var dataArray = [];
	var j = 0;

	for (var i=0; i<daysPerMonth; i++) {
		shoppedToday = getRandomInt(0,2);

		for (var c=0; c<categories; c++) {
	
			if (shoppedToday) {
				shoppedThisCategory = getRandomInt(0,2);
				if (shoppedThisCategory) {
					dataArray[j] = getRandomArbitrary(0,1);
				} else {
					dataArray[j] = 0;
				}
			} else {
				dataArray[j] = 0;
			}
			j += 1;
		}

	}

	return dataArray;
}

//	Takes an array of bubbleData and a new array. Will add the new data to
//	bubble array under bubbleData[i].values dictionary
var updateBubbleData = function(bubbleData, newData, newDataKey) {
	var j = 0;
	for (var i=0; i<daysPerMonth; i++) {
		for (var c=0; c<categories; c++) {
			
			bubbleData[j].values[newDataKey] = newData[j];

			j += 1;
		}
	}
	return bubbleData;
}

var generateBubbleData = function() {
	var j = 0;
	var dataArray = [];
	for (var i=0; i<daysPerMonth; i++) {
		for (var c=0; c<categories; c++) {

			var bubbleObj = {
				'posX': origin.x + coordSys[i][c].x,
				'posY': origin.y + coordSys[i][c].y,
				'radialX': i,
				'radialY': c,
				'category': c,
				'values': {},
			};
			dataArray[j] = bubbleObj;
			j += 1;

		}

	}
	var newData = generateRandomDataOneArray();
	var usrData = generateRandomUserDataOneArray();
	dataArray = updateBubbleData(dataArray, newData, 'initial');
	dataArray = updateBubbleData(dataArray, usrData, 'user1');
	return dataArray;

}
var storeNames = ["COOP Järna", "COOP Fridhemsplan", "COOP Gnesta"];
var generateTopList = function(size) {
	var dataArray = [];
}
var topListData = [
	{
		'name': "COOP Järna",
		'value': 0.3345,
		'position': 1
	},
	{
		'name': "COOP Järna",
		'value': 0.132,
		'position': 16
	},
	{
		'name': storeName,
		'value': 0.112,
		'position': 17
	},
	{
		'name': "COOP Järna",
		'value': 0.0845,
		'position': 18
	}
];

var randomData = generateRandomData();
var randomUserData = generateRandomUserData();
var bubbleData = generateBubbleData();
//console.log(bubbleData);

