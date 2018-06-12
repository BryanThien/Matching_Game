/*
 * Create a list that holds all of your cards
 */

 let cards = ["fa fa-bug", "fa fa-bug", "fa fa-plane", "fa fa-plane", "fas fa-anchor", "fas fa-anchor", "fa fa-bus", "fa fa-bus", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"]

let openCards = [];
let repeat = document.querySelector(".restart");

startRound();
 
/* Functions*/

function startRound() {
    shuffle(cards);
    $(".deck").empty();
    let output = '';
    for (i = 0; i < cards.length; i++) {
        output += '<li class = \"card\"><i class=\"' + cards[i] + '\" ></i></li>';
    }
    
    document.querySelector(".deck").innerHTML = output;  
    SelectCreatedCards();   
}

function SelectCreatedCards() {
    let card = document.querySelectorAll(".card");
    for (i = 0; i < card.length; i++){
        card[i].addEventListener("click",function(event){
           flip(event);
        });
        }
}






// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*creating variables to contain icon name for matching later*/
let firstClick;
let secondClick;

function flip(event) {
    event.target.classList.add("show");
    /*Gets content and puts each in it's variable*/
    if (!firstClick) {
        firstClick = event.target;
    } else {
        secondClick = event.target;
    }
   /*Comparing values to have them be locked open and then deletes firstClick and secondClick's content for new clicks in the future*/
   if (firstClick === secondClick) {
        firstClick.classList.add("open");
        secondClick.classList.add("open");
        firstClick = "";
        secondClick = "";
        /*If they don't match, the class "show" is removed to make them return to not be shown*/
   } else {
       firstClick.classList.remove("show");
       

   }
}




repeat.addEventListener("click", startRound);



/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
