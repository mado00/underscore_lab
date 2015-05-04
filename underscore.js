
//var _. = function() {
	//base class
}

//average - returns the average value in a given array
_.average = function(array) {
	var sum = 0;
	array.forEach(function(elm) {
		sum += elm;
	});
	return sum / array.length;
}

//  contains - returns true is a given value is present in an array
_.contains= function(array, n) {
	
	for (var i = 0; i < array.length; i++) {
		if (array[i] === n) {
		return true;	
		}
	}
	return false;		
}

// first - returns the first element in an array
_.first = function(array) {
	return array[0];
}

//last - returns the last element in an array
_.last = function(array) {
	return array[array.length-1];
}

// max - returns the maximum value in an array
_.max = function(array) {
	var max = array[0]
	for (var i = 0; i < array.length; i++) {
		if (max < array[i + 1]){
			max = array[i + 1];
		} else {
			max;
		}
	}		
	return max;
}

// min - returns the minimum value in an array
_.min = function(array) {
	var min = array[0]
	for (var i = 0; i < array.length; i++) {
		if (min > array[i + 1]) {
			min = array[i + 1];
		} else {
			min;
		}
	}		
	return min;
}

// shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.

_.shuffle = function(array) {
	var i, j, temp;
	array = array.slice(0);
	i = array.length;
	if (i === 0) {
		return array;
	}
	while (--i) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};


// sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
_.sample = function(array, n) {
	var result = [];
	var n = n || 1;
	for (var i = 1; i <= n; i++) {
		r = Math.floor(Math.random() * array.length, n)
		result.push(array[r]);
	}
	return result;
}


// difference - returns the values from array that are not present in the other array.
_.difference = function(array1, array2) {
	var result = [];
	for( var i = 0; i < array1.length; i++) {
		var found = false;
		for (var j = 0; j < array2.length; j++) {
			if( array1[i] === array2[j]) {
				found = true;
				break;
			}
		}
		if(!found) {
			result.push(array1[i]);	
		}
	}
	return result;
}


// indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array
_.indexOf = function(array, n) {
	for(var i = 0; i < array.length; i++) {
		if (array[i] === n) {
			return i;		
		}	
	}
	return -1;
}


// pluck - extracts a list of property values and returns them in an array.
_.pluck = function(list, property) {
	var array = [];
	list.forEach(function(elm) {
		array.push(elm.name);
	}); 
	return array;		
}





