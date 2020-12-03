//if..else if..ese
let x = 34;
if (x <= 45) {

} else if (x < 60) {

} else {

}

//Switch
let y = "b";
switch (y) {
    case "a":
        break;
    case "b":
    case "c":
        break;
    default: //can exist in any position in the switch
}

//Loops
//for loop
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

//while
let i = 0;
while (i < 10) {
    console.log(i + 1);
    i++;
}
//do while
let ii = 0;
do {
    console.log(ii + 1);
    ii++;
} while (i < 10);

//Collection: array
let numbers = [1, 2, 22, 33];
for (let number of numbers) {
    console.log(number);
}


let person = { name: 'Sristi', address: 'ktm' };
//lets iteration in the properties provided: name, address for the object person
for (let prop in person) {
    console.log(`${prop}=${person[prop]}`)
}

//break,continue:label

for (let x = 0; x < 5; x++) {
    if (x == 3) {
        continue; //skip current iteration value x=3 and continue next iteration i.e.x=4
        //break;//end the loop once x=3
    }
    console.log(x);
}

if ("2" == 2.0) { //js tries to convert lhs and rhs to same data type then compare
    console.log("test");
}

if ("2" === 2.0) { //strictly equal to, js tries to compare lhs and rhs with provided data type
    console.log("test1");
}


for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        if (x === 3 && y === 3) {
            break;
        }
        console.log(`x=${x} y=${y}`);

    }


    console.log(x);
}