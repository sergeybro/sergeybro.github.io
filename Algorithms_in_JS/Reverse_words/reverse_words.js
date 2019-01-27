function reverseWordsOne(string) {
    var arrayFromString = string.split(' '),
        reversedWordsArray = [],
        newSring;

    arrayFromString.forEach(word => {
        reversedWordsArray.push(word.split('').reverse().join(''));
    });

    newSring = reversedWordsArray.join(' ');
    return newSring;
}

// reverse Words with no reverse array method

function reverseWordsTwo(string) {
    var arrayFromString = string.split(' '),
        reversedWordsArray = [],
        newSring;

    arrayFromString.forEach(word => {
        var reversedWord = '';

        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i]
        }
        reversedWordsArray.push(reversedWord);
    });

    newSring = reversedWordsArray.join(' ');
    return newSring;
}

