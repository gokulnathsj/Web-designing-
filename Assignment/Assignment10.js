var button = document.querySelector("button");
// button.addEventListener("click", function(){
// 	if( document.body.style.background == "purple" )
// 		document.body.style.background = "white"; 
// 	else if( document.body.style.background == "" )
// 		document.body.style.background = "purple"; 
// 	else if( document.body.style.background == "white" )
// 		document.body.style.background = "purple"; 
// });

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});