const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');

	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	
	// if (`mathSymbol == +`)
	// {	let resultAdd = num1 + num2
	// 	console.log (resultAdd);	
	// }

	// else if (`mathSymbol == -`)
	// {	let resultSubtract = num1-num2
	// 	console.log (resultSubtract);
	// }
	
	// else if (`mathSymbol == /`)
	// {	let resultDivide = num1 / num2
	// 	console.log (resultDivide);
	// }
	
	// else if (`mathSumbol == *`)
	// {	let resultMultiply = num1 * num2
	// 	console.log (resultMultiply);
	// }
	
	// else if(`mathSymbol == %`)
	// {	let resultModulo = num1 % num2
	// 	console.log (resultModulo);
	// }

	operation = num1+`${mathSymbol}`+num2;
	
	console.log (eval(operation));
	
	// This line closes the connection to the command line interface.
	reader.close()



});
