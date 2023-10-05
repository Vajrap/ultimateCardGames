class SetGameCard {
    constructor(shape, color, number, shading, id){
    this.shape = shape;
    this.color = color;
    this.number = number;
    this.shading = shading
    this.id = id
    }
}


class SetGameCardView {
    constructor(card){
        this.card = card
    }

    createCard(){
        const cardBoardView = document.createElement('div');
        cardBoardView.classList.add('setGameCardBoard');
        cardBoardView.id = this.card.id;

        const content = this.paths[this.card.shape];
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('cardShape')
        for (let i = 0; i < this.card.number; i++) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '-2 -2 54 104')
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            for (const attr in content) {
                path.setAttribute(attr, content[attr]);
            }

            svg.appendChild(path);
            contentContainer.appendChild(svg);
        }
        cardView.appendChild(contentContainer)
        return cardView
    }

    // if(this.card.shadings === 'solid'){
    //     content.fill = 'none';
    // }
    // if(this.card.shadings === 'striped'){
    //     content.fill = 'url(#striped-'+card.color+')';
    // }
    // if(this.card.shadings === 'outlined'){
    //     content.fill = this.colorsCode[this.card.color]
    // }

    paths = {
        diamond: {
          d: "M25 0 L50 50 L25 100 L0 50 Z"
        },
        squiggle: {
          d: "M38.4,63.4c0,16.1,11,19.9,10.6,28.3c-0.5,9.2-21.1,12.2-33.4,3.8s-15.8-21.2-9.3-38c3.7-7.5,4.9-14,4.8-20 c0-16.1-11-19.9-10.6-28.3C1,0.1,21.6-3,33.9,5.5s15.8,21.2,9.3,38C40.4,50.6,38.5,57.4,38.4,63.4z"
        },
        oval: {
          d: "M25,99.5C14.2,99.5,5.5,90.8,5.5,80V20C5.5,9.2,14.2,0.5,25,0.5S44.5,9.2,44.5,20v60 C44.5,90.8,35.8,99.5,25,99.5z"
        }
      }
    
    colorsCode = {
        red: '#e74c3c',
        green: '#27ae60',
        purple: '#8e44ad'
    };
    
}
