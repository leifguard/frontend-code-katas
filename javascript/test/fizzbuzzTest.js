var assert = require('assert');
var fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', function() {
	it('should return "fizz" when the given number can be devided by three', function() {
		assert.equal("fizz", fizzbuzz(3));
    });
	
	it('should return "buzz" when the given number can be devided by five', function() {
		assert.equal("buzz", fizzbuzz(5));
    });
	
	it('should return "fizzbuzz" when the given number can be devided by three and by five', function() {
		assert.equal("fizzbuzz", fizzbuzz(15));
    });
});