let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let number = Math.floor((Math.random() * 11) + 1)
    if(number === 1){
        return 11
    }else if (number === 11 || number === 12 || number === 12 ) {
        return 10
    } else {
        return number
    }
    
}

function startGame() {
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
     
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent  += cards[i] + " " 
    }

    if (sum <= 20) {
        message = "Do you want to draw a card ?"
    } else if (sum === 21) {
        message = "blackjack!"
        hasBlackJack = true
    } else {
        message = "you're out"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "SUM:" + " " + sum
}


function newCard() {
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
   
}



