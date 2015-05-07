
var _ = (function() {
	return {

//average - returns the average value in a given array
	average : function(array) {
	var sum = 0;
		array.forEach(function(elm) {
		sum += elm;
		});
		return sum / array.length;
	},

//  contains - returns true is a given value is present in an array
	contains : function(array, n) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] === n) {
			return true;	
		}
	}
	return false;		
	},

// first - returns the first element in an array
	first : function(array) {
		return array[0];
	},

//last - returns the last element in an array
	last : function(array) {
		return array[array.length-1];
	},

// max - returns the maximum value in an array
	max : function(array) {
		var max = array[0]
		for (var i = 0; i < array.length; i++) {
			if (max < array[i + 1]){
				max = array[i + 1];
			}
		}		
		return max;
	},

// min - returns the minimum value in an array
	min : function(array) {
		var min = array[0]
		for (var i = 0; i < array.length; i++) {
			if (min > array[i + 1]) {
				min = array[i + 1];
			}
		}		
		return min;
	},

// shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.

	shuffle : function(array) {
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
	},


// sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
	sample : function(array, n) {
		var result = [];
		var n = n || 1;
		for (var i = 1; i <= n; i++) {
			r = Math.floor(Math.random() * array.length, n)
			result.push(array[r]);
		}
		return result;
	},


// difference - returns the values from array that are not present in the other array.
	difference : function(array1, array2) {
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
	},


// indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array
	indexOf : function(array, n) {
		for(var i = 0; i < array.length; i++) {
			if (array[i] === n) {
				return i;		
			}	
		}
		return -1;
	},


// pluck - extracts a list of property values and returns them in an array. Using forEach with element
	pluck : function(list, property) {
		var array = []
		list.forEach(function(elm) {
			array.push(elm.name);
		}); 
		return array;
	},

//	each - iterates over an array and calls a given function with each element 
	each : function(array) {
		array.forEach(function(elm) {
		});
		return array;	
	},

// compact - returns a new array with all provided   values removed
	compact : function(array) {
		var result = [];
			array.forEach(function(elm) {
				if (elm !== "undefined") {
					result.push(elm);
				}
			});
			return result;
	},

// map - returns a new array of values produced by running each element of an array through a given function
	map : function(array, func) {
		var result = [];
		array.forEach(function(elm) {
			result.push(func(elm));
		});
		return result; 
	},

/*_.map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]

_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
=> ["DOGS", "BEFORE", "CATS"]
*/


// filter - Looks through each value in the list, returning an array of all the values that pass a truth test
	filter : function(array, func) {
		var result = [];
		array.forEach(function(elm) {
			if (func(elm)) {
				result.push(elm);	
			}
		});
		return result; 
	}
	} // return

})();

module.exports = _;


