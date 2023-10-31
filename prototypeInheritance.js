function Animal (name, type, height, weight) {
    this.name = name;
    this.type = type;
    this.height = height;
    this.weight = weight;
};


Animal.prototype.speak = function(){
    console.log(this.name + ' barks');
}

function Dog (name, breed) {
    this.name = name;
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

const myPet = new Dog('JoJo', 'Indie');
myPet.speak();