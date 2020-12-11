// 1. Find normal distribution of set of random numbers
// 2. Find a random number between provided m and n
// 3. Find a random string of particular length

// 1. Find normal distribution of set of random numbers


///////////////////////2.Find a random number between provided m and n

function FindRandomNum(m, n) {

    let x = Math.random();
    let randomNum = m + x * (n - m);
    return randomNum;

}

console.log(FindRandomNum(20, 25));

//OR using arrow function
let getRandom = (m, n) => m + Math.random() * (n - m);
console.log(getRandom(50, 60));


// /////////////////////3. Find a random string of particular length

function StringLength(length) {
    var result = '';
    var stringvar = 'ThisisrandomString';
    var stringLen = stringvar.length;
    for (var i = 0; i < length; i++) {
        result += stringvar.charAt(Math.floor(Math.random() * stringLen));
    }
    return result;
}

console.log(StringLength(5));


//another way
let getRandomString = (length) => {
    const wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        let randomNum1 = Math.random() * wordChars.length;
        let index = Math.floor(randomNum1);
        let c = wordChars.charAt(index);
        randomString += c;
    }
    return randomString;

}

let randString = getRandomString(5);
console.log(randString);

//console.log('0'.charCodeAt(0));