//Redeclaration allowed which is not good practice as only last assigned value is taken
var x = 'abc';
//1000 lines of codes in between
var x = 123;

//Let: Redeclaration is not allowed but allowed to mutate
let y = 100;
//let y = "abc"; // when compiled throws error saying identifier 'Y' has already been declared
y = "abc";

const a = true;
//a = false; //GIves TypeError: Assignment to constant variable


//Var is function scoped or global
function add() {
    var xx = "abc"; //var is function scoped, if declared outside then its global scoped
}

//Block Scoped
function add1() {
    var xx = 'abc';
    if (xx == "") {
        let x1 = 123; //x1 is block scoped for the if block, redeclaration of variable will be allowed outside the block
    }

}

//Variable can be hoisted, the compiler allows such declaration but result will be undefined
console.log(m);
var m = 45;
//let m = 34;//gives error "Cannot access 'm' before initialization"