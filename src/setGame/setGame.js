class SetGame extends Game {
    constructor(player){
        super(player);
        this.selectedCards = [];
        this.deckOfCards = this.createDeckOfCards();
        this.cardsOnTable = [];
        this.dealCards(12);
        this.startTime = Math.floor(Date.now() / 1000)
    }

    createDeckOfCards() {
        let i = 0
        let deckOfCards = []
        const shapes = ['diamond', 'squiggle', 'oval']
        const colors = ['red', 'purple', 'green']
        const numbers = [1, 2, 3]
        const shadings = ['solid', 'striped', 'outlined']

        for (const shape of shapes){
            for (const color of colors){
                for (const number of numbers){
                    for (const shading of shadings){
                        const card = new SetGameCard(shape, color, number, shading, i)
                        deckOfCards.push(card)
                        i ++
                    }
                }
            }
        }

        const shuffledDeckOfCards = this.shuffleArray(deckOfCards)
        return shuffledDeckOfCards
    }

    shuffleArray(array) {
        const shuffledDeck = []
        for (const card of array){
            const randomIndex = Math.floor(Math.random() * (shuffledDeck.length + 1));
            shuffledDeck.splice(randomIndex, 0, card);
        } 
        return shuffledDeck
    }

    dealCards(numberOfCards) {
        //pull 12 cards from cardDeck and push into cardsOnTalbe 
        for (let i = 0; i < numberOfCards; i++) {
            const card = this.deckOfCards.pop();
            this.cardsOnTable.push(card)
        }
    }

    selectCard(card) {
        if (this.selectedCards.includes(card)){
            this.clearSelectedCard(card)
            return;
        }
        if (this.selectedCards.length < 3){
            this.selectedCards.push(card);
            if (this.selectedCards.length === 3){
                this.checkSet();
            }
        }
    }

    checkSet() {
        if   ( this.checkCondition('number') && 
                this.checkCondition('shape') && 
                this.checkCondition('shading') && 
                this.checkCondition('color')
        ){
            alert(`It's A Set`)
            this.currentScore += 100
            this.selectedCards.forEach(selectedCard => {
                const idToRemove = selectedCard.id;
                this.cardsOnTable = this.cardsOnTable.filter(card => card.id !== idToRemove);
            });
            this.checkEndGame()
            this.clearAllSelectedCards()
        } else {
            alert(`Too bad, either you're not playing it right or you're playing it wrong.`)
            this.clearAllSelectedCards()
        }
    }

    checkCondition(theCondition){
        const [first, second, third] = this.selectedCards 
        const conditionVariables = new Set ([first[theCondition], second[theCondition], third[theCondition]]);
        const isPassedCondition = conditionVariables.size === 1 || conditionVariables.size === 3
        return isPassedCondition
    }

    clearSelectedCard(card){
        const index = this.selectedCards.indexOf(card);
        if (index > -1) {
          this.selectedCards.splice(index, 1);
        }
    }

    clearAllSelectedCards(){
        this.selectedCards = []
    }

    checkEndGame(){
        if (this.cardsOnTable.length === 0){
            //-> Game End?
            const endTime = Math.floor(Date.now() / 1000)
            const totalScore = this.currentScore - (endTime - this.startTime)
            const playerName = prompt(`Congratualtions! Please Enter your name.`)
            const scoreOnBoard = {playerName, totalScore}
            scoreBoard.push(scoreOnBoard)
        } else {
            return

        }
    }

    startNewGame(){
        game = new SetGame()
    }
}

function initSetGameView(){
    for (card of game.cardsOnTable){
        cardToShow = new SetGameCardView(card).createCard()
        console.log(cardToShow)
        gameView.appendChild(cardToShow)
    }
}