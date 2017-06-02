
var cards = ["Queen","King","Ace","Jack"];
var cardsinplay=[];
var checkmatch = function(){

// if(cardsinplay.length === 2){

	if(cardsinplay[0] === cardsinplay[1]){

		console.log("You found a match");
	}else{

		console.log("Sorry try again");
	}
// }

}

var flipcard = function(cardId){

console.log("User flipped " + cards[cardId]);
cardsinplay.push(cards[cardId]);

checkmatch();

}
// if(cardsinplay.length === 2){

// }

flipcard(0);
flipcard(2);

