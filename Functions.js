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

//arrow function: uses arrow:lambda operation, there is no function name 
//example-1
var fun2 = number => number * number;

//example-2
(a, b) => {
    let sum = a + b;
    return sum;
}

//Closure
//Example-1
function outside(x) {
    function inside(y) { return x + y; }
    return inside;
}

let inside_fn = outside(10); //x:Gives a function that adds 10 to whatever argument is given
let result = inside_fn(40); //y
console.log(result);

//Example-2
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    let result = square(a) + square(b);
    return result;
}

let r = addSquares(12 * 13);

//Example-3
// let createPet = functon (name) {
//     return {
//         setName: function(newName) {
//             name = newName;
//         },
//         getName: function() {
//             return name;
//         }
//     }
// }

// let dog=createPet('diamond');

//Example-4: Using arrow function
let createPet = name => {
    return {
        setName: newName => name = newName,
        getName: () => name
    }
}

let dog = createPet('diamond');

///////////////////////////////////////Parameters

function formatName(salutation, name, address) {
    let completeName = salutation + ", " + name + ", " + address;
    return completeName;
}

let n = formatName("Ms.", "Sristi Musyaju", "ktm");
let n1 = formatName("Sristi Musyaju", "ktm");

console.log(n);
console.log(n1);

//Rest parameters
function add(a, b, ...moreArgs) {
    console.log(a);
    console.log(b);
    console.log(moreArgs);
}

add(12, 34);
add(1, 2, 3, 4);