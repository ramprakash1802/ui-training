let a: number = 1;

let numbers = ['s', '2'];
let tupleEg: [string, number] = ['1', 1];
tupleEg.push(12);

const enum Sizes { Small = 1, Medium = 2, Large };

const mySize: Sizes = Sizes.Medium;

enum names { name1 = 'retro', name2 = 'ram' };

const functionEg =  (arg1: number, arg2 = '2') : string  => {
    if(arg1 == 2) {
        return '2';
    }
    return `${arg2}`;
}


let employee: Employee = {
  id: 1234,
  name: 'Jason',
}


type Employee = {
  id: number,
  name: string,
  work?: () => void;

} //type alias

const kgToLbs = (weight: number | string | null) => { //nullable types
  if (typeof weight === "string") {
    return parseInt(weight) * 2;
  }
  else if (weight === null) {
    return null;
  }
  return weight * 2;
} //union typess

console.log(kgToLbs("2"));


type Draggable = {
  drag: () => void;
}

type Resizable = {
  resize: () => void;
}

type UIWidget = Draggable & Resizable;

const textBox : UIWidget = {
  drag: () => console.log('Dragged'),
  resize: () => console.log('resized'),
} // intersection

type Quantity = "mm" | "cm"; // Literal types

let unit : Quantity = "mm";

type Customer = {
  birthday?: Date,
}

const newCustomer = () : Customer => ({});

console.log(newCustomer()?.birthday); //optional chaining
