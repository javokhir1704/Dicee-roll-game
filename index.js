// Generating Random number 1
let randomNumber1 = Math.random() * 6; //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive). In our case, it's: 0 - 5.99999999999;

randomNumber1 = Math.floor(randomNumber1) + 1; // Math.floor() == >The Math.floor() method rounds a number DOWN to the nearest integer.

// Generating Random number 2
let randomNumber2 = Math.random() * 6; // fetchs: 0 - 5.9999999 (16 decimal places)
randomNumber2 = Math.floor(randomNumber2) + 1; // here, we're adding 1 to prevent getting zero on the dice roll and get the range of (1---6).



// Selecting img of PLayer 1
let firstImg = document.querySelectorAll('img')[0]; // selects the first img in the code
// add random number with path to select particular dice
let randomImageSource = 'dice-img/dice' + randomNumber1 + '.png'; // we'll get the range of imgs between (dice1.png - dice6.png);
// set the new path in attribute
firstImg.setAttribute('src', randomImageSource);


// Selection img of PLayer 2
let secondImg = document.querySelectorAll('img')[1];
// add random number with path to select particular dice
let randomImageSource2 = 'dice-img/dice' + randomNumber2 + '.png';
// set the new path in attribute
secondImg.setAttribute('src', randomImageSource2);



// Comparing the two random numbers

if (randomNumber1 > randomNumber2) {

  document.querySelector('h1').textContent ="The player 1 wins";
  
} else if (randomNumber1 < randomNumber2) {

  document.querySelector('h1').textContent = "The player 2 wins";

} else {

  document.querySelector('h1').textContent = "Draw";

}



// Add type JS
   var typed = new Typed('#element', {
      strings: ['Refresh again'],
      typeSpeed: 40,
   });

/*                                                              Alternative way for Dice roll challenge


  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  
  var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png -dice6.png

  var randomImageSource = "images/" + randomDiceImage; // images/dice1.png -images/dice6.png

  var image1 = document.querySelectorAll('img')[0]; // to choose the first img

  image1.setAttribute('src', randomImageSource);



  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);


  // If player 1 wins
  if(randomNumber1 > randomNumber2) {

    document.querySelector('h1').innerHTML = "Play 1 Wins!";

  } else if (randomNumber2 > randomNumber1) {

    document.querySelector('h1').innerHTML = "Play 2 Wins!";

  } else {

    document.querySelector('h1').innerHTML = "Draw";
  }

 */