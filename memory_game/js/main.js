var cards = [
             {rank:"Queen",suit:"hearts",cardimage:"images 2/queen-of-hearts.png"},
             {rank:"Queen",suit:"diamond",cardimage:"images 2/queen-of-diamonds.png"},
             {rank:"King",suit:"diamond",cardimage:"images 2/king-of-diamonds.png"},
             {rank:"King",suit:"hearts",cardimage:"images 2/king-of-hearts.png"}
            ];
var cardsinplay=[];
var checkmatch = function(){

	if(cardsinplay[0] === cardsinplay[1]){

		alert("You found a match");
	}else{

		alert("Sorry try again");
	}
}

var flipcard = function(){

cardId = this.getAttribute('data-id');
cardsinplay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardimage);
this.setAttribute('src',cards[cardId].cardimage);

if(cardsinplay.length === 2){

checkmatch();

}
}


var createBoard = function(){

	for (var i = 0; i < cards.length; i++)
{
		var cardElement = document.createElement('img');
                cardElement.setAttribute('src','images 2/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementById('game-board').appendChild(cardElement);
}
	
   } 
createBoard();

