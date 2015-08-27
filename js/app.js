//FizzBuzz app 

$('.document').ready(function(){

for (var i=1; i < 100; i++){

	var message = i;

	if(i%3 == 0 && i%5 == 0){
		message = "FizzBuzz";
	} else if(i%5 == 0){
		message = "Buzz";
	} else if (i%3 == 0){
		message = "Fizz";
	}
	$('.output').append('\n' + message + '\n');	

};
});