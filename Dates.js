let x = new Date();
//console.log(x);


// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getDay());

// console.log(x.getMinutes());
// console.log(x.getSeconds());
// console.log(x.getMilliseconds());
//console.log(x.getHours());


//code digital clock
let getTimeDigitally = () => {
    const now = new Date();
    var current_time = '';
    let hour = now.getHours(); //0-23
    let mins = now.getMinutes(); //0-59
    let seconds = now.getSeconds(); //0*59
    let ms = now.getMinutes();
    let meridiem = "AM";
    let hourNormalized;

    if (hour >= 12) {
        meridiem = "PM"
    }
    hourNormalized = hour > 12 ? hour - 12 : hour;
    return `${hour}:${mins}:${seconds}:${ms} ${meridiem}`

};

/*
setInterval(() => {
    console.clear();
    console.log(getTimeDigitally());
}, 1); //every millisecond
*/



//Return the number of milliseconds between January 1, 1970 and March 21, 2012:
var d = Date.parse("March 21, 2012");
//console.log(d);


//Find age of the person like: X years Y months Zdays
var DOB = "03/01/1995";
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;
//console.log(millisecondsBetweenDOBAnd1970);


//Lets conver every date component to millisecods
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30;
/*using 30 as base as months can have 28, 29, 30 or 31 days depending a month in a year it itself is a different piece of comuptation*/
var year = day * 365;

//Now lets calculate the date attributes of age
var years = Math.floor(ageInMilliseconds / year);
var months = Math.round(ageInMilliseconds / month);
var days = Math.round(ageInMilliseconds / day);

// console.log(ageInMilliseconds);
// console.log(year);
// console.log(813954581217 / 31536000000);

console.log(`Years :${years}`);