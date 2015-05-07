
// Write a function uniq which returns a version of a given array with all duplicates removed
module.exports = {
	uniq: function(array) {
		var result = [];
		var object = new Object();
		array.forEach(function(elm) {
			if (!object[elm]) {
				result.push(elm);
				object[elm] = 1;
			}
		}); 
		return result;
	}
}
//uniq([1, 2, 1, 4, 1, 3]);
//=> [1, 2, 4, 3]
