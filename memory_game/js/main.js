var cards = [
             {rank:"Queen",suit:"hearts",cardimage:"images 2/queen-of-hearts.png"},
             {rank:"Queen",suit:"diamond",cardimage:"images 2/queen-of-diamonds.png"},
             {rank:"King",suit:"diamond",cardimage:"images 2/king-of-diamonds.png"},
             {rank:"King",suit:"hearts",cardimage:"images 2/king-of-hearts.png"}
            ];
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

console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardimage);
cardsinplay.push(cards[cardId].rank);

checkmatch();



}

flipcard(0);
flipcard(2);

