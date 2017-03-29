function fizzbuzz(input) {
	
	var output = "";
	
	if(input % 3 == 0) {
		output = "fizz";
	} 
	
	if(input % 5 == 0) {
		output += "buzz";
	} 
	
	return (output == "") ? input : output;
	
}

module.exports = fizzbuzz;