var assert = require('assert');

var fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', function() {
		
	it('should return the number when the given number can not be devided by three and by five', function() {
		assert.equal("1", fizzbuzz(1));
		assert.equal("2", fizzbuzz(2));
	});
	
	it('should return fizz if input can be divided by three', function() {
		assert.equal("fizz", fizzbuzz(3));
		assert.equal("fizz", fizzbuzz(6));
	});
	
	it('should return buzz if input can be divided by five', function() {
		assert.equal("buzz", fizzbuzz(5));
		assert.equal("buzz", fizzbuzz(10));
	});
	
	it('should return fizzbuzz if input can be divided by five and by three', function() {
		assert.equal("fizzbuzz", fizzbuzz(15));
		assert.equal("fizzbuzz", fizzbuzz(30));
	});

});