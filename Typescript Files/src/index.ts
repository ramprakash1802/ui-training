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

const addNums = (...nums : number[]) : number => { //Rest paramaters
  return nums.reduce((prev, next) => prev + next)
}

console.log(addNums(1,2,3,4));

const throwErr = () => { // never type
  throw new Error('error');
}

const giveType = (value: number | string) : string => {
  if (typeof value === 'string') {
    return 'String'
  } 
  if (typeof value === 'number') {
    return 'Number'
  }
  return throwErr(); //never type for non-occuring conditions
}

let employee: Employee = {
  id: 1234,
  name: 'Jason',
  workTags: [1, '2']
}


type Employee = {
  id: number,
  name: string,
  work?: () => void;
  workTags: (string | number)[]

} //type alias

interface Employee1 {
  id: number,
  name: string,
  work?: () => void;
  workTags: (string | number)[]

} 

type fnType = (a: number, b: number) => string;

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


const addOrConcat = (a: number, b: number, c: 'add' | 'concat') : string | number => {
  if (c === 'add') {
    return a + b
  }
  return '' + a + b
}

let sent : string = addOrConcat(1, 2, 'concat') as string; // Type assertion

const titleElement = document.querySelector('h1')!; // non-null assertion

titleElement.style;


//Classes

class Coder {

  constructor (
    public readonly name: string,
    public lang: string,
    private readonly id: number, //cannot be used while inheriting
    protected contact: number = 1234, //can be used while inheriting
  ) {
    this.name = name,
    this.lang = lang,
    this.id = id
    this.contact = contact
  }
  public getNumber = () => console.log(this.contact);
}

class WebDev extends Coder {
  constructor (
    public computer: string,
    name: string,
    lang: string,
    id: number
  ) {
    super(name, lang, id)
    this.computer = computer
  }
}

const newEmployee = new WebDev('mac', 'Retro', 'Typescript', 1);

newEmployee.getNumber();

interface Game {
  name: string,
  type: string,
  playerCount: number,
}

let bg3 : Game = {
  name: 'BG#',
  type: 'PG',
  playerCount: 1,
}


class PCGame implements Game { //Implementaton of interfaces
  constructor (
    public name: string,
    public type: string,
    public playerCount: number
  ) {
    this.name = name
    this.type = type,
    this.playerCount = playerCount
  }
}

interface Transaction { // index signature
  // [index : string]: number
  pizza: number,
  coke: number,
}

const transaction: Transaction = {
  pizza: 10,
  coke: 10,
}

for (let i in transaction) {
  console.log(transaction[i as keyof Transaction]); // assertion using keyof without using index signature
}

transaction.pizza = 1
console.log(transaction);


const echo =  <T> (arg: T) : T => arg; // Generic Type

interface TypeCheck <T> {
  value: T,
  is: string,
}

interface key {
  id: number
}

const users = [
  {
    id:1,
    name: 'Retro',
  },
  {
    id:2,
    name: 'Ram,'
  }
]

const checkType = <T extends key, K extends keyof T> (arg1: T[], arg2: K) : T[K][] => { //Multiple generics and extensions
  return arg1.map(user => user[arg2])
}

console.log(checkType(users, 'name'));

interface Student {
  name: string,
  class: string,
  grade: string,
  attendance: number,
};

const Retro : Student = {
  name: 'Retro',
  class: 'XII',
  grade: 'B',
  attendance: 71,
}

const updateStudent = (student: Student, recordToUpdate: Partial<Student>) : Student => { //Partials: for getting a type that is part of an existing type or interface
  return {
    ...student,
    ...recordToUpdate,
  }
}

console.log(updateStudent(Retro, { grade: 'A' }));

const recordStudent = (student: Required<Student>) : void => { //All keys are required
  console.log(`${student} is recorded`);
}

recordStudent(Retro);

const colorCodes : Record <string, string> = { // combined key value type pairs
  'black': '#000',
  'white': '#fff',
}

type ReportCard = Pick <Student, 'name' | 'grade'> //Picks specified keys in an interface into a new type
type AttendanceCard = Omit <Student, 'class' | 'grade'> // Omits specified keys

type millimeter = Exclude <Quantity ,'cm'> // Excludes specified key in a union type
type centimeter = Extract <Quantity, 'cm'> // Extracts specifid key from a union type

type name = 'Ram' | 'Retro' | null;

type NoNullNames = NonNullable <name>