let hackathon = 'Hackathon 2020' + 12;
let x = "X";
let y = "Y";
let isMale = true;

// String literal
let name = `Cotiviti ${12+34-56}`;
// console.log(name);

let a = "12 432 4234 gdf 32 4j gfd sg732jgdjs";
let re = /gd/;
// let re1 = new RegExp('[0-9]');

let b = a.match(re);
//console.log(b);

//String literal - string interpolation
let p = 'Cotiviti $(hackathon)';

//console.log(p);

//Regular Expression
let message = "Infectious agent antigen detection by immunoassay technique, (eg, enzyme immunoassay [EIA], enzyme-linked immunosorbent assay [ELISA]";
let regexVowels = /[aeiou]/g; //match any character listed inside [], g switch means search globally, i switch for case insensitive, m switch for multiline
let matches = message.match(regexVowels);

console.log(matches);