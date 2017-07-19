
console.log("Challenge 4");

// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?

let num = 1;

function divideEvenly() {
	while ( num % 10 !== 0 || num % 9 !== 0 || num % 9 !== 0 || num % 8 !== 0 || num % 7 !== 0 || num % 6 !== 0 || num % 5 !== 0 || num % 4 !== 0 || num % 3 !== 0 || num % 2 !== 0 ) {
	num++;
	}
	console.log(num);
}

divideEvenly();







/* do {
	console.log("The number is: ", numberToBeTested);
	
}  while (numberToBeTested % 10 !== 0) && (numberToBeTested % 9 !== 0) && (numberToBeTested % 8 !== 0) && (numberToBeTested % 7 !== 0) && (numberToBeTested % 6 !== 0) &&
		(numberToBeTested % 6 !== 0) && (numberToBeTested % 5 !== 0) && (numberToBeTested % 4 !== 0) && (numberToBeTested % 3 !== 0) && (numberToBeTested % 2 !== 0) && (numberToBeTested % 1 === 0)
*/

