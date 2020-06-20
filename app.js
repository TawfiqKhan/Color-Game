let colors = [];


var playDivs = document.querySelectorAll(".square");

var startButton = document.querySelector("#bt-1");
var resetButton = document.querySelector("#bt-2");
var mainColor = document.querySelector("#score");
var header = document.querySelector("#header")
var firstDiv = document.querySelector(".firstDiv");
var h2 = document.querySelector("h2");

var easyDiff = document.querySelector("#bt-3");
var hardDiff = document.querySelector("#bt-4");

//setting up the board

setup(6);
headerColor();

//starts the board all over again. **Needs  Working

startButton.addEventListener("click", function() {
	for(var i=0; i<colors.length; i++) {
		playDivs[i].classList.remove("hide");
	}
	setup(6);
})

// resets the color to all blue

resetButton.addEventListener("click", function() {
	reset();
})

easyDiff.addEventListener("click", function() {
	setup(3);

})

hardDiff.addEventListener("click", function() {
	setup(6);
})

//function to generate random Number RGB



function reset() {
	for(var i =0; i <colors.length; i++) {
	playDivs[i].style.backgroundColor = "";
}
}

//main function to setup the board.

function setup(num) {

	//pushing random colors to colors array using getRandomRgb function
	colors =[];
	for (var i = 0; i < num; i++) {
	// colors.splice(i, 1, getRandomRgb());

	//pushing random generated color to the colors Array
  	colors.push(getRandomRgb());

  	//Settings Divs Color from Colors Array
  	playDivs[i].style.backgroundColor = colors[i];

  	playDivs[i].addEventListener("click", function() {
  		if(this.style.backgroundColor === mainColor.innerHTML) {
  			header.style.backgroundColor = this.style.backgroundColor;
  			h2.innerHTML = "Correct"
  		} else{
  			this.classList.add("hide");
  		}
	
  	})
}
  	//adding click event to each div, also if clicked adding display none to hide the div 
}



function headerColor() {
	let num = Math.floor((Math.random() * (colors.length-1)) + 1);
	mainColor.innerHTML =colors[num];
	console.log("type of header colors is " + typeof colors[num])
	// header.style.backgroundColor = colors[num];

}

function getRandomRgb() {
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// function matchColor () {

// 	if()

// }