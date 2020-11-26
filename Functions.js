//function addTwoNumbers //camelcasing

function square(number) //Parameter name is enough,type will be idenfied during run time compilation
{
    let squared = number * number;
    return squared;
}

let s = square(5.5);
console.log(s);

//function is taken as some value so can be assigned to variable
//so called as function expression

//function expression:anonymous function
let fun1 = function(number) {
    let squared = number * number;
    return squared;
}

let a = fun1(12)
console.log(a);