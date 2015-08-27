$('.document').ready(function(){

for (var i=1; i < 100; i++){

	if(i%3 == 0 && i%5 == 0){
		$('.output').append("\n" +"FizzBuzz"+ "\n");
	} else if(i%5 == 0){
		$('.output').append("\n" +"Bizz"+ "\n");
	} else if (i%3 == 0){
		$('.output').append("\n" +"Fizz"+ "\n");
	} else {
		$('.output').append("\n" +i+ "\n");
	}

};
});