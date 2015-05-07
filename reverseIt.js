// Write a function called reverse_it(string) that takes a string and returns that string in reverse.
module.exports = {
	reverseIt: function(string) {
		var str = string.split("");
		var reverse = "";
		str.forEach(function(elm) {
			reverse = elm + reverse;
		});
		return reverse;	
	}
}
//reverse_it("I love dog")
