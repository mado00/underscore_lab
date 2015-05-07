var test1 = require("../primeNumberPrinter.js")
var test2 = require("../reverseIt.js")
var test3 = require("../uniq.js")


describe('Prime Number Printer', function(){
    it('should return an array with all the prime numbers between 1 and x', function(){
        expect(test1.primeNumberPrinter(10)).toEqual([3, 5, 7, 9]);
    });
});

describe('Reverse String', function(){
    it('should returns that string in reverse', function(){
        expect(test2.reverseIt("I love dog")).toEqual("god evol I");
    });
});

describe('Uniq', function(){
    it('should returns a version of a given array with all duplicates removed', function(){
        expect(test3.uniq([1, 2, 1, 4, 1, 3])).toEqual([1, 2, 4, 3]);
    });    
});