const obj = {
    prop1: "Prop1",
    prop2: "Prop2",
};

function func  (arg1, arg2) {
    console.log(arg1 + ' ' + this.prop1 + ' ');
}

let bindFunc = func.bind(obj);
bindFunc(1,2);

func.call(obj, 1, 2);
func.apply(obj, [1,2]);