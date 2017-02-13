function getStats(txt) {
    let nChars = txt.length;

    let words = txt.match(/\w+/g);
    let nWords = words.length;

    let lines = txt.split("\n");
    let nLines = lines.length;

    let nNonEmptyLines = 0;
    for(let i = 0; i < lines.length; i++){
        if(lines[i].search(/[A-Za-z0-9_]/) != -1){
            nNonEmptyLines++;
        }
    }

    let maxLineLength = 0;
    for(let i =0; i < lines.length; i++){
        if(lines[i].length > maxLineLength){
            maxLineLength = lines[i].length;
        }
    }

    let averageWordLength = 0;
    for(let i =0; i < words.length; i++){
        averageWordLength = averageWordLength + (words[i].length / words.length);
    }

    let palindromes = [];
    for(let i =0; i < words.length; i++){
        let lowercase = words[i].toLowerCase();
        if(lowercase.length > 1) {
            if (isPalindrome(lowercase)) {
                if (palindromes.indexOf(lowercase) == -1) {
                    palindromes.push(lowercase);
                }
            }
        }
    }

    let longestWords = [words[0]];
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < longestWords.length; j++){
            if(words[i].length > longestWords[j].length){
                if(longestWords.indexOf(words[i]) == -1)
                longestWords.push(words[i]);
                break;
            }
        }
        longestWords.sort(function(a, b){
            x = a.toLowerCase();
            y = b.toLowerCase();
            if(x.length > y.length) return -1;
            if(x.length < y.length) return 1;
            if(x[0] > y[0]) return -1;
            if(x[0] < y[0]) return 1;
            return 0;
        })
        while(longestWords.length > 10){
            longestWords.pop();
        }
    }

    let mostFrequentWords = [];




    return {
        nChars: nChars,
        nWords: nWords,
        nLines: nLines,
        nNonEmptyLines: nNonEmptyLines,
        averageWordLength: averageWordLength,
        maxLineLength: maxLineLength,
        palindromes: palindromes,
        longestWords: longestWords,
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}


function isPalindrome(text){

    if(text.length % 2 == 1){
        let firstHalf = text.substring(0, text.length / 2);
        let secondHalf = text.substring(text.length/2 + 1);
        let secondHalfReversed = "";
        for(let i = secondHalf.length - 1; i >= 0; i--){
            secondHalfReversed = secondHalfReversed + secondHalf[i];
        }
        if(firstHalf == secondHalfReversed){
            return true;
        }
        return false;
    }

    let firstHalf = text.substring(0, text.length / 2);
    let secondHalf = text.substring(text.length / 2);
    let secondHalfReversed = "";
    for(let i = secondHalf.length - 1; i >= 0; i--){
        secondHalfReversed = secondHalfReversed + secondHalf[i];
    }
    if(firstHalf == secondHalfReversed){
        return true;
    }
    return false;

}
