//FizzBuzz app 

$('.document').ready(function(){

//Validate and enter user input
	var validNumber = '';
	var number = prompt("Please kindly enter a number");

	if (isNaN(number)){
		newNumber = prompt("please enter a valid number");
		validNumber = +newNumber;
	} else{
		validNumber = +number
	}
//run the main function
	function userInput (validNumber){
		for (var i=1; i <= validNumber; i++){
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
	};
	userInput(validNumber);
});