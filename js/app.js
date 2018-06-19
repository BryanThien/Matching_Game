/*
 * Create a list that holds all of your cardList
 */

 const cardList = ["fa fa-bug", "fa fa-bug", "fa fa-plane", "fa fa-plane", "fas fa-anchor", "fas fa-anchor", "fa fa-bus", "fa fa-bus", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"]
let cards = document.querySelectorAll("li.card");
let repeat = document.querySelector(".restart");
let firstClick = "";
let secondClick = "";
var clicks = 0;
var winner = 0;
var cardLock = "off";


startRound();
 
/* Functions*/

function startRound() {
    clicks = 0;
    document.querySelector(".moves").innerHTML = 0;
    firstClick = "";
    secondClick = "";
    shuffle(cardList);
    $(".deck").empty();
    let output = '';
    for (i = 0; i < cardList.length; i++) {
        output += '<li class = \"card\"><i class=\"' + cardList[i] + '\" ></i></li>';
    }
    
    document.querySelector(".deck").innerHTML = output;  
    SelectCreatedCards();   
}

function SelectCreatedCards() {
    var card = document.querySelectorAll(".card");

    for (i = 0; i < card.length; i++){
        card[i].addEventListener("click",function(){
            flip(this);  
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


function flip(clickedElement) {
    console.log(cardLock);
 if (cardLock === "off") {
    clickedElement.classList.add("show");
    /*Gets content and puts each in it's variable*/
    clicks ;
    if (firstClick === "") {
        firstClick = clickedElement;
    
    } else {
        secondClick = clickedElement;
    }
   /*Comparing values to have them be locked open and then deletes firstClick and secondClick's content for new clicks in the future*/
   if (firstClick !== secondClick && secondClick !== "") {
        if (firstClick.childNodes[0].className === secondClick.childNodes[0].className){
            firstClick.classList.add("open");
            secondClick.classList.add("open");
            winner += 1;
            clicks += 1;
            document.querySelector(".moves").innerHTML = clicks;
            firstClick = "";
            secondClick = "";
        } else {
        cardLock = "on";
        console.log(cardLock);
        setTimeout(function(){
        firstClick.classList.remove("show");
        secondClick.classList.remove("show");
        clicks += 1;
        document.querySelector(".moves").innerHTML = clicks;
        firstClick = "";
        secondClick = "";
        cardLock = "off"
        },1000)
        
    }   
        
        if (winner === 8) {
            console.log("you win");
        }
/*If they don't match, the class "show" is removed to make them return to not be shown*/
   } 
}
}






repeat.addEventListener("click", startRound);



/*
 *  - add the card to a *list* of "open" cardList (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cardList match
 *    + if the cardList do match, lock the cardList in the open position (put this functionality in another function that you call from this one)
 *    + if the cardList do not match, remove the cardList from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cardList have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
