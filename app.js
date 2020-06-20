let colors = [];
let pickedColor, clickedColor;


var container = document.querySelector("#container");
var newColorsBtn = document.querySelector("#bt-1");
var mainColor = document.querySelector("#score");
var header = document.querySelector("#header")
var firstDiv = document.querySelector(".firstDiv");
var message = document.querySelector(".message");
var allButtons = document.querySelectorAll("button");
//setting up the board

//Function to start the game
init()

function init() {
	setup(6);
	headerColor();
	modeButtons()
}


//main function to setup the board.

function setup(num) {

	resetBoard();
	//pushing random colors to colors array using getRandomRgb function
	for (var i = 0; i < num; i++) {

	//pushing random generated color to the colors Array
  	colors.push(getRandomRgb());

  	container.insertAdjacentHTML('beforeend', '<div class="square"></div>');
  }
  	// Settings Divs Color from Colors Array and for header
  	colorLogic();
  	headerColor();	

}


//function for Header color logic(pick random color from colors array)

function headerColor() {
	let num = Math.floor(Math.random() * colors.length);
	pickedColor = colors[num];
	mainColor.innerHTML = pickedColor;

}

//function to generate random Number RGB

function getRandomRgb() {
	// var r = Math.floor(Math.random() * 256);
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function colorLogic() {
	//settings colors from square by looping through colors array
	var playDivs = document.querySelectorAll(".square");
  	for (var y =0; y < colors.length; y++) {
  		playDivs[y].style.backgroundColor = colors[y];

  	//adding click listener to all the square, once a square is clicked, clicked color is matched
  	//with the picked color and several decisions are made based on the coutcome of if else
  	playDivs[y].addEventListener("click", function() {
  			clickedColor = this.style.backgroundColor;
  			if(clickedColor === pickedColor) {
  			header.style.backgroundColor = clickedColor;
  			newColorsBtn.innerHTML = "Play Again?"
  			newColorsBtn.classList.remove("selected");

  			for(var j=0; j<colors.length; j++) {
  				playDivs[j].classList.remove("hide");
  				playDivs[j].style.backgroundColor = clickedColor;
  			}

  			message.innerHTML = "Correct"
  			// if the click doesnt match with picked color, square is bein hidden using display none
  		} 	else{
  			this.classList.add("hide");
  			newColorsBtn.classList.remove("selected");
  			message.innerHTML = "Try Again"
  		}
	
  	})
  	}
}

//function to reset the board. 

function resetBoard() {
	colors =[];
	container.innerHTML = "";
	message.innerHTML = "";
	header.style.backgroundColor =""
	newColorsBtn.innerHTML = "New Colors"
}

//adding click listener to all Buttons
function modeButtons() {
for (var i = 0; i <allButtons.length; i++ ) {
	allButtons[i].addEventListener("click", function() {
		//first removing selected css class from all buttons
		for(var y=0; y<allButtons.length; y++) {
			allButtons[y].classList.remove("selected");
		}
		//adding selected css class to the selected button
		this.classList.add("selected");
		//checking to see if the selected button is easy difficullty
		//if yes then run setup(3) for 3 square, else run setup(6)
		this.textContent === "Easy" ? setup(3) : setup(6);
		// resetBoard();
	})
}
}