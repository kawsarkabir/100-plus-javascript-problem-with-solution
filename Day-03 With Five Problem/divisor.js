/*=========================================================================================
5. Write a javaScript program that takes two inputs A and B and prints all numbers that are multiples of  A but divisors of B. If there are no numbers, print “NO”.
	Example_
Test Input: 5 and 20
Expected Output: 5 10 20

Test Input:6 and 20
Expected Output:“NO”
==========================================================================================*/
var a = 5;
var b = 20;
for(var i = 5; i <= 20; i+=5){
	if( b%a == 0 ){
		console.log(i);
	}
	else{
		console.log('no');
	}
}
