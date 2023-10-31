class Cricketer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play () {
        console.log(this.name + 'is playing');
    }
}

class Batsman extends Cricketer {
    constructor (name, age, battingSide) {
        super(name, age);
        this.battingSide = battingSide;
    }
    bat () {
        console.log(this.name + ' is batting');
    }
}

const newPlayer = new Batsman('Random', 21, 'Right-handed');
newPlayer.bat();