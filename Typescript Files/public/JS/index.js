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
let employee = {
    id: 1234,
    name: 'Jason',
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
