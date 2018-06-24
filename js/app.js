const cardList = ["fa fa-bug", "fa fa-bug", "fa fa-plane", "fa fa-plane", "fas fa-anchor", "fas fa-anchor", "fa fa-bus", "fa fa-bus", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"]
const cards = document.querySelectorAll("li.card");
const repeat = document.querySelector(".restart");

/*Used to compare cards when clicked*/
let firstClick = "";
let secondClick = "";

let clicks = 0;
let winner = 0;
/*Used to prevent clicking a third card*/
let cardLock = "off"; 
/*Used for timer*/
const minutesLabel = document.getElementById("minutes"); 
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let stars = 3;

startRound();
 
/* Functions*/

/* Timer */
let timerStart = setInterval(setTime, 1000);
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
};

function pad(val) {
    let valString = val + "";
    if (valString.length < 2){
        return "0" + valString;
    } else {
        return valString;
    }
}

/* Start of game settings */

function startRound() {
    /* Resets Star amount*/
    $(".fa-star").remove();
    $(".stars").append("<li><i class=\"fa fa-star\"></i></li><li><i class=\"fa fa-star\"></i></li><li><i class=\"fa fa-star\"></i></li>");
    totalSeconds = 0;
    winner = 0;
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
/*Adds event listeners to cards*/
function SelectCreatedCards() {
    let card = document.querySelectorAll(".card");

    for (let i = 0; i < card.length; i++){
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



/* Actions taken when clicking a card*/
function flip(clickedElement) {
 if (cardLock === "off")  {
    clickedElement.classList.add("show", "disable");
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
            firstClick.classList.add("open", "disabled");
            secondClick.classList.add("open", "disabled");
            winner += 1;
            clicks += 1;
            document.querySelector(".moves").innerHTML = clicks;
            firstClick = "";
            secondClick = "";
        } else {
        cardLock = "on";
        setTimeout(function(){
        firstClick.classList.remove("show");
        secondClick.classList.remove("show");
        clicks += 1;
        document.querySelector(".moves").innerHTML = clicks;
        firstClick = "";
        secondClick = "";
        cardLock = "off"
        /*Star system*/
        let moves = clicks
        console.log(moves);
        if ( moves === 12){
            $(".fa-star").first().detach();
            stars = 2;
        } 
        if ( moves === 20){
            $(".fa-star").first().detach();
            stars = 1;
        }
        },200)

      
    }   
        
if (winner === 8) {
      
let seconds = document.getElementById("seconds").innerText;
let minutes = document.getElementById("minutes").innerText;  
console.log(finalStarScore);
setTimeout(function(){alert(
"Good Job, you won!\nIt took you " + minutes + " minutes and " + seconds + " seconds\nYour number of moves was " + clicks + "\nYour number of stars is " + stars + "\nYou want to play again?" 
)

            startRound();
},201)
        }
   } 
}
}



repeat.addEventListener("click", startRound);