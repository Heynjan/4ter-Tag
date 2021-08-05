class Main {

    background;
    numOfEnemies = 1;
    numOfHitedEnemies = 0;
    enemies = [];
    constructor() {
        this.init();
    }

    init() {
        this.addBackground ();
        this.addEnemies ();
        setTimeout( () => {
            this.pause();
            this.reset();
        }, 10000 );
    }

    addBackground() {
        this.background = new Background ('assets/mohrhuhnhaus2.png');
        let counter = 0;
        setInterval( () => {
            counter ++;
            if ( counter % 2 === 0 ) {
                this.background.hide();
            } else {
                this.background.show();
            }
        }, 5000 )
    }

    addEnemies() {
        for ( let i = 0; i < this.numOfEnemies; i ++ ) {
            this.enemies.push ( new Enemy( enemy => {

                this.hits ( enemy );
            },
                'assets/mohrhuhn.png' ) );
        }
        console.log ( this.enemies );
    }

    hits( enemy ) {
        this.numOfHitedEnemies ++;
        console.count('hit');
        this.reset();
        if ( this.numOfHitedEnemies === this.numOfEnemies ) {
            console.log ( 'ich habe fertig' );
            this.reset();
        }
    }

    pause () {
        this.enemies.forEach( enemy => enemy.stopMove() );
    }

    reset () {
        this.enemies = [];
        this.addEnemies();
    }
}

let count = 0;
const gameended = setInterval(function(){
    console.log(count);
    count++

    if (count === 6) {
        console.log("game ended");
        clearInterval(gameended);
    }
}, 1000)