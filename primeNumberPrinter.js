//Write a function prime number printer which takes one arguement, x. Return an array with all the prime numbers between 1 and x
module.exports = {
	primeNumberPrinter: function(x) {
		var result = [];
		var i = 1;
		while (i < x) {
			if (this.prime(i)){
				result.push(i);
			}
		i++;
		}
		return result;
	},

	//prime_number_printer(10);

	// find number is prime number

	prime: function(n) {
		var i = 0;
		if ((n < 2) || (n % 2 === 0)) {
			return false;
		} else
		while (i < n ) {
			if (n % 2 === 0) {
				return false; 
			} else {
			i++;
			}
		}
		return true;
	}
}
//prime(8); //false
//prime(11); //true
