// Javascript for Memory Game
// Matas Bakutis
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMath = function(){

	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		}else{
			alert("Sorry, try again.");
		}
	};

}

var flipCard = function(cardId){

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMath();
};

flipCard(0);
flipCard(2);





