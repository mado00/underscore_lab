var _ = require("../underscore.js")

describe('Calculator Average', function(){
 it('should return average from elements in an array', function() {
    expect(_.average([4,6,1,1])).toEqual(3)
   
	})
});

describe('Maximum Value', function(){
 it('should return maximum value in an array', function() {
    expect(_.max([10, 5, 100, 2, 1000])).toEqual(1000)
   
	})
});

describe('First Element', function(){
 it('should return first element from in an array', function() {
    expect(_.first([5,6,2,1])).toEqual(5)
    
	})
});

describe('IndexOf', function(){
 it('should return the index at which value can be found in the array', function() {
    expect(_.indexOf([1, 2, 3], 2)).toEqual(1)
   
	})
});

describe('Map ', function(){
 it('should  returns a new array of values produced by running each element of an array through a given function', function() {
    expect(_.map([1, 2, 3], function(num){ return num * 3; })).toEqual([3, 6, 9])
   
	})
});

describe('Difference', function(){
 it('should returns the values from array that are not present in the other array', function() {
    expect(_.difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4])
  
	})
});


describe('Contains', function(){
 it('should returns true is a given value is present in an array', function() {
    expect(_.contains([7,55,99], 99)).toBe(true)
    
	})
});
 
