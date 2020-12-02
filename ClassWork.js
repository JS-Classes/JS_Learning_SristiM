//Find macthing number in a paragraph using REGEX
let p1 = `This is 1 number.m^2
This is 1 number.m^2
This is 1 number.m^2
This is 9991 number.m^3
This is 8881 number.m^3
This is 2 number after 3.m2`

let regexNUmber = /\d+/g; //1 or more numbers
let numbers = p1.match(regexNUmber);
console.log(numbers);

let emails = 'abc123@xyz.com abc123@xyz.net'

let regexEmail = /[a-z]+\w*@[a-z]+.com/g;
let correctEmails = emails.match(regexEmail);
console.log(correctEmails);