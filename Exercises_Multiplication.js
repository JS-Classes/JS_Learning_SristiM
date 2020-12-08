//1. Program to print multiplication table for a number
function MultiplicationOfANum(num) {
    console.log(`The multiplication of the provided number ${num} is :`);
    for (let i = 1; i <= 10; i++) {

        // multiply i with number
        const result = num * i;

        // display the result

        console.log(`${num} * ${i} = ${result}`);
    }
}
//MultiplicationOfANum(5);

//2. Program to print multiplcation for a number upto some range(default should be 10)


function MultiplicationOfANumTillRange(num, range = 10) {
    console.log(`The multiplication of the provided number ${num} till the multiplication range ${range} is :`);
    for (let i = 1; i <= range; i++) {

        // multiply i with number
        const result = num * i;

        // display the result

        console.log(`${num} * ${i} = ${result}`);
    }
}
//MultiplicationOfANumTillRange(5, 25);

//Program to print multiplication table for numbers from m to n

function MultiplicationTable(m, n, range = 10) {
    for (let num = m; num <= n; num++) {
        console.log(`Multiplication Table for ${num} till the multiplication range ${range} is :`)
        for (let i = 1; i <= range; i++) {
            let multiply = num * i;
            console.log(`${num} * ${i} = ${multiply}`);

        }
    }
}

MultiplicationTable(2, 4, 20);

//array of objects
const people = [
    { name: 'Sristi', dob: '1234', isFemale: true },
    { name: 'Sristi2', dob: '1234', isFemale: true }
];
console.table(people);

//node js specific command
process.stdout.write("Hi");
process.stdout.write("Hi");
process.stdout.write("Hi");