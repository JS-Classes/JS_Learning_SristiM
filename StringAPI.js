//Long string literal
// "\" gives new line
let longString1 = "This is sentence,This is sentence.\
This is sentence,This is sentence.\
This is sentence,This is sentence.";

//string interpolation
let longString2 = `This is sentence,This is sentence.
This is sentence,This is sentence.
This is sentence,This is sentence.`;

let sentence = "Click Open Zoom Meetings on the dialog shown by your browser.";
let sentenceObject = new String(sentence);

//String API
console.log(sentence.charAt(5));
console.log(sentence.charCodeAt(5));
console.log(sentence.concat('5'));
console.log(sentence.startsWith('Clicks'));
console.log(sentence.includes('Zoom'));
console.log(sentence.indexOf('i'));
console.log(sentence.lastIndexOf('r'));
console.log(sentence.repeat(5));
console.log(sentence.replace("C", "D"));

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.toLowerCase());

console.log(sentence.split(' '));

console.log(sentence.substr(0, 5));