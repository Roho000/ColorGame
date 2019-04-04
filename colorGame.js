var numSquares=0;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	numSquares=6;
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")
			numSquares=3;
		else if(this.textContent==="Hard")
			numSquares=6;
		else
			numSquares=9;
		reset();
		//more squares fr difficulty
	});
}
	for(var i=0;i<squares.length;i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent="Correct!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
			}
		});
	}
	reset();
}

function reset(){
	colors=randomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	message.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else
			squares[i].style.display="none";
	}
	h1.style.backgroundColor="#232323";
}

resetButton.addEventListener("click",function(){
	reset();
})


function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var str="rgb("+r+", "+g+", "+b+")";
		arr.push(str);
	}
	return arr;
}