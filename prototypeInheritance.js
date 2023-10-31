function Animal (type, height, weight) {
    this.type = type;
    this.height = height;
    this.weight = weight;
};

Animal.prototype.newName = 'Dog';

const newPet = new Animal('Shephard', 20, 20);

console.log(newPet.newName);