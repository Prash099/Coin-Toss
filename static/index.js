

var randomNumber = Math.floor(Math.random()*2 + 1)

var randomCoinImage = 'images/' + randomNumber + '.jpg';

var Image1 = document.querySelectorAll('img')[0];

Image1.setAttribute("src", randomCoinImage);


if (randomNumber === 1) {
  $("#result").html("Heads");
};
if (randomNumber === 2) {
  $("#result").html("Tails");
};
