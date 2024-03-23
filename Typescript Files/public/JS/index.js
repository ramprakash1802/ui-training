"use strict";
var _a;
let a = 1;
let numbers = ['s', '2'];
let tupleEg = ['1', 1];
tupleEg.push(12);
;
const mySize = 2 /* Sizes.Medium */;
var names;
(function (names) {
    names["name1"] = "retro";
    names["name2"] = "ram";
})(names || (names = {}));
;
const functionEg = (arg1, arg2 = '2') => {
    if (arg1 == 2) {
        return '2';
    }
    return `${arg2}`;
};
const addNums = (...nums) => {
    return nums.reduce((prev, next) => prev + next);
};
console.log(addNums(1, 2, 3, 4));
const throwErr = () => {
    throw new Error('error');
};
const giveType = (value) => {
    if (typeof value === 'string') {
        return 'String';
    }
    if (typeof value === 'number') {
        return 'Number';
    }
    return throwErr(); //never type for non-occuring conditions
};
let employee = {
    id: 1234,
    name: 'Jason',
    workTags: [1, '2']
};
const kgToLbs = (weight) => {
    if (typeof weight === "string") {
        return parseInt(weight) * 2;
    }
    else if (weight === null) {
        return null;
    }
    return weight * 2;
}; //union typess
console.log(kgToLbs("2"));
const textBox = {
    drag: () => console.log('Dragged'),
    resize: () => console.log('resized'),
}; // intersection
let unit = "mm";
const newCustomer = () => ({});
console.log((_a = newCustomer()) === null || _a === void 0 ? void 0 : _a.birthday); //optional chaining
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let sent = addOrConcat(1, 2, 'concat'); // Type assertion
const titleElement = document.querySelector('h1'); // non-null assertion
titleElement.style;
//Classes
class Coder {
    constructor(name, lang, id, //cannot be used while inheriting
    contact = 1234) {
        this.name = name;
        this.lang = lang;
        this.id = id;
        this.contact = contact;
        this.getNumber = () => console.log(this.contact);
        this.name = name,
            this.lang = lang,
            this.id = id;
        this.contact = contact;
    }
}
class WebDev extends Coder {
    constructor(computer, name, lang, id) {
        super(name, lang, id);
        this.computer = computer;
        this.computer = computer;
    }
}
const newEmployee = new WebDev('mac', 'Retro', 'Typescript', 1);
newEmployee.getNumber();
let bg3 = {
    name: 'BG#',
    type: 'PG',
    playerCount: 1,
};
class PCGame {
    constructor(name, type, playerCount) {
        this.name = name;
        this.type = type;
        this.playerCount = playerCount;
        this.name = name;
        this.type = type,
            this.playerCount = playerCount;
    }
}
const transaction = {
    pizza: 10,
    coke: 10,
};
for (let i in transaction) {
    console.log(transaction[i]); // assertion using keyof without using index signature
}
transaction.pizza = 1;
console.log(transaction);
const echo = (arg) => arg; // Generic Type
const users = [
    {
        id: 1,
        name: 'Retro',
    },
    {
        id: 2,
        name: 'Ram,'
    }
];
const checkType = (arg1, arg2) => {
    return arg1.map(user => user[arg2]);
};
console.log(checkType(users, 'name'));
;
const Retro = {
    name: 'Retro',
    class: 'XII',
    grade: 'B',
    attendance: 71,
};
const updateStudent = (student, recordToUpdate) => {
    return Object.assign(Object.assign({}, student), recordToUpdate);
};
console.log(updateStudent(Retro, { grade: 'A' }));
const recordStudent = (student) => {
    console.log(`${student} is recorded`);
};
recordStudent(Retro);
const colorCodes = {
    'black': '#000',
    'white': '#fff',
};
