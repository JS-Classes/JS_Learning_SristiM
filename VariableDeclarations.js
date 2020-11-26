//Datatypes
//Dynamic compilation, same variable can hold multiple data types, last assigned value is taken

/////////////////////////////////////////Primary data types
var a = 45;
var b = "abc";
var c = 'xyz';
var d = true;
//var e = 2 n ** 123 n;
var e = undefined;
var f = null;
var j = +Infinity;
var k = -Infinity;

var l = NaN; //Not a number
var x = 'abc' / 23; //Var x will be NaN data type

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


//////////////////////////////////////Structural Data types
var g = [1, 2, 3, 4];
var h = { name: "sristi", isFemale: true };
var i = ["a", "b", "c"];

//any error in syntax is show by .ts i.e typescript compiler

// console.log(x);

//we can check the type of variables 
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);