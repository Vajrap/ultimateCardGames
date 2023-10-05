class MenuView {
    constructor(){
        this.gameList = [
            SetGame
        ]
    }

    //const gameMenu = createElement <-- we create HTML element <div class = "gameMenu"> in this class, there'll be a list of game from this.gameList, may be we make them button of some kind, I don't know. which onclick will call a function named gameSelect(SetGame, etc.)
    //then we append the whole element of gameMenu to <div class = "gameView">gameView</div>    Which is a black class I created in HTML.
    createGameMenu() {
        const gameMenu = document.createElement('div');
        gameMenu.classList.add('gameMenu');
        const heading = document.createElement('h1');
        heading.textContent = 'Ultimate Card Games!';
        gameMenu.appendChild(heading)

        this.gameList.forEach((game) => {
            const gameButton = document.createElement('button');
            gameButton.textContent = game.name;
            gameButton.addEventListener('click', () => this.gameSelect(game));
            gameMenu.appendChild(gameButton);
        });

        gameView.appendChild(gameMenu)
    }

    initGame(gameClass){
        game = new gameClass()
    }

    gameSelect(game) {
        gameView.textContent = '' //
        this.initGame(game)
        console.log(game)
        if (game === SetGame){
            console.log(`initSetGameView`)
            initSetGameView() 
        }
    }
}