
var cards = ["queen","king","ace","jack"];
var cardsinplay=[];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsinplay.push(cardOne)
cardsinplay.push(cardTwo)

if(cardsinplay.length === 2){

	if(cardsinplay[0] === cardsinplay[1]){

		alert("You found a match");
	}else{

		alert("Sorry try again");
	}
}

console.log("user flipped " + cardsinplay[1])