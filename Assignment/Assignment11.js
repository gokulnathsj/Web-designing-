var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var resetButton = document.getElementById("reset")
var numInput = document.querySelector("input");
var h1 = document.querySelector("h1");
var max = document.querySelector("#max");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5

p1button.addEventListener("click", function(){
	if(!gameOver)
		p1Score++;
		if(p1Score === winningScore){
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1Score;
})

p2button.addEventListener("click", function(){
	if(!gameOver)
		p2Score++;
		if(p2Score === winningScore){
			p2display.classList.add("winner");
			gameOver = true;
		}
		p2display.textContent = p2Score;
})

resetButton.addEventListener("click", function(){
	reset()

});

numInput.addEventListener("change", function(){
	max.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p1display.classList.remove("winner");
	gameOver = false;
}