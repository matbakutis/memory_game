// Javascript for Memory Game
// Matas Bakutis
var cards = [
		{
			rank: "queen",
			suit: "hearts",
			cardImage: "images/queen-of-hearts.png"
		},
		{
			rank: "queen",
			suit: "diamonds",
			cardImage: "images/queen-of-diamonds.png"			
		},
		{
			rank: "king",
			suit: "hearts",
			cardImage: "images/king-of-hearts.png"
		},
		{
			rank: "king",
			suit: "diamonds",
			cardImage: "images/king-of-diamonds.png"			
		}
			];

var cardsInPlay = [];

var numberWins = 0;
var numberTries = 0;

var checkForMath = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			numberWins++;
			numberTries++;
		}else{
			alert("Sorry, try again.");
			numberTries++;
		};
		document.getElementById('wins').innerHTML = numberWins;
		document.getElementById('tries').innerHTML = numberTries;
	};
};

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMath();
};

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		document.getElementById('wins').innerHTML = numberWins;
		document.getElementById('tries').innerHTML = numberTries;
	}
};

var resetBoard = function(){
	document.getElementById('game-board').innerHTML = "";
	cardsInPlay = [];
	createBoard();
};

var resetScore =  function(){
	numberWins = 0;
	numberTries = 0;
	document.getElementById('wins').innerHTML = numberWins;
	document.getElementById('tries').innerHTML = numberTries;
	resetBoard();
}

createBoard();
document.getElementById('reset-button').addEventListener('click', resetBoard);
document.getElementById('score-button').addEventListener('click', resetScore);
