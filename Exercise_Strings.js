//1. Declare a string variable with paragraph as value. Find following: 
//a. Number of sentences, words and characters
//b. Number of special characters
//c. Number of vowels and consonants

const paratext = `You are brilliant@$$$Girl. What is your name? Is that really you? Again?`;

parseParagraph(paratext);

function parseParagraph(params) {

    const re_para = /[.!?]/;
    const numOfSentences = params.split(re_para);
    console.log(`The number of sentences in the given paragraph is: ${numOfSentences.length - 1}`);
    console.log(`The number of words in the given paragraph is: ${params.split(' ').length}`);
    console.log(`The number of characters in the given paragraph is: ${'This is test.'.split('').length}`);


    var specialChars = params.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi);
    console.log(`The number of special characters in the given paragraph is: ${specialChars.length}`);

    var vowelCount = params.match(/[aeiouAEIOU]/gi);


    console.log(`The number of vowels in the given paragraph is: ${vowelCount.length}`);

    let consonantCount = params.match(/[bcdfghjklmnpqrstvxzwy]/ig);
    console.log(`The number of consonants in the given paragraph is: ${consonantCount.length}`);


}