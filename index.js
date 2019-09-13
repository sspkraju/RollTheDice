var myDice = ['images/dice6.png','images/dice1.png',
	          'images/dice2.png', 'images/dice3.png',
	          'images/dice4.png','images/dice5.png',
	          'images/dice6.png'];

function roll(){
	var p1 = Math.floor( Math.random( ) * 6 ) + 1;
	var p2 = Math.floor( Math.random( ) * 6 ) + 1;
	
	document.querySelector("img.dice1").setAttribute("src", myDice[p1]);
	document.querySelector("img.dice2").setAttribute("src", myDice[p2]);
	
	if (p1 > p2) {
		
		document.querySelector("h2").innerHTML = "🏆Player 1 Wins";
	}
	else if (p2 > p1){ 
		document.querySelector("h2").innerHTML = "🏆Player 2 Wins";
	}
	else {
		document.querySelector("h2").innerHTML = "🤝It's a tie(try again)";
	}
}


document.addEventListener("keypress", function(event){
	
	if (event.key === 'r'){
	roll();};
});



