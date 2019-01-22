function caesarCipher(str, num) {

    num = num % 26;

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        strToLowerCase = str.toLowerCase(),
        newStr = '',
        currentIndex,
        newIndex;

    for (var i = 0; i < strToLowerCase.length; i++) {
        var currentLetter = strToLowerCase[i];
        if (currentLetter === ' ') {
            console.log(newStr, 'new string - continue');
            newStr = newStr + currentLetter;
            continue;
        }

        currentIndex = alphabet.indexOf(currentLetter);

        newIndex = currentIndex + num;

        if ( newIndex> 25) {
            newIndex = newIndex - 26;
        } else if (newIndex < 0) {
            newIndex = newIndex + 26;
        }
        if (str[i] === str[i].toUpperCase() ) {
            newStr = newStr + alphabet[newIndex].toUpperCase();
        } else {
            newStr = newStr + alphabet[newIndex];
        }
    }

    return newStr;
}

// var div = document.querySelector('div');
// div.innerHTML = caesarCipher('Zoo Keeper', 2);