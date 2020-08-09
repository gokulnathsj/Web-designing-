// var secretNumber = 4;
// var guess = Number(prompt("Guess a number"));

// if( guess == secretNumber)
// 	alert("you got it right");
// else if (guess > secretNumber)
// 	alert("Too high. Guess again!");
// else{
// 	alert("Too low. Guess again!");
// }


// var num = -10
// while(num <= 19)
// {
// 	console.log(num);
// 	num++;
// }
// num2 = 10
// while( num2 <= 40 )
// {
// 	if( num2 % 2 == 0)
// 		console.log(num2);
// 	num2++
// }


// function factorial(x)
// {
// 	var fact = 1;
// 	while( x > 0)
// 	{
// 		fact = fact * x;
// 		x--;
// 	}
// 	return fact;
// }

// console.log(factorial(6))


// function change(x)
// {
// 	for( var i = 0 ; i < x.length ; i ++ )
// 	{
// 		if( x[i] == "-")
// 		{
// 			x[i] = "_";
// 			console.log(x[i]);
// 		}
// 	}
	
// }
// console.log(change("goo-ggole"));

// setInterval(function , timeinterval);
function setCursorByID(id,cursorStyle) {
 var elem;
 if (document.getElementById &&
    (elem=document.getElementById(id)) ) {
  if (elem.style) elem.style.cursor=cursorStyle;
 }
}