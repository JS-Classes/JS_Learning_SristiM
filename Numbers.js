const a = 0b01000111; //binary number
const b = 0o01234567; //octal
const c = 0x12AF; // hexadecimal

//Number API
let age = "67";
let ageNumber = Number.parseInt(age);
let ageNumber1 = Number.parseFloat(age);

//console.log(typeof NaN);

Number.isNaN();
Number.isInteger();
Number.isFinite();

//Math API
Math.abs(-34);
Math.ceil(55.56);
let r = Math.random(); //[0,1) O inclusive, 1 exclusive
//console.log(r);

//Find a random number between provided m and n

function FindRandomNum(m, n) {

    let x = Math.random();
    let randomNum = m + x * (n - m);
    return randomNum;

}

//console.log(FindRandomNum(20, 25));


let getRandom = (m, n) => m + Math.random() * (n - m);
//console.log(getRandom(50, 60));


//find a random string of particular length

function StringLength(length) {
    var result = '';
    var stringvar = 'ThisisrandomString';
    var stringLen = stringvar.length;
    for (var i = 0; i < length; i++) {
        result += stringvar.charAt(Math.floor(Math.random() * stringLen));
    }
    return result;
}

//console.log(StringLength(5));



////Find sd of set of numbers

let GetSd = (numbers) => {
    let sum = 0;
    const numberofItems = numbers.length;
    for (const num of numbers) {
        sum = sum + num;
    }
    const mean = sum / numberofItems;

    //finding sum[(x-mean)^2]
    let sqrDiff = 0;
    let sqrDiffSum = 0;
    for (const num of numbers) {
        let diff = num - mean;
        let sqrDiff = Math.pow(diff, 2);
        sqrDiffSum += sqrDiff;
    }

    //Finding sq
    const sd = Math.sqrt(sqrDiffSum / numberofItems)
    return sd;



}
const ages = [2, 45, 56, 78];
let sdAges = GetSd(ages);
console.log(sdAges);