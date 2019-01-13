function harmlessRansomNote (messageText, hayText) {
    var messageIsPossible;
    var messageTextArr = messageText.split(' ');
    var hayTextArr = hayText.split(' ');
    var hayTextObj = {};

    hayTextArr.forEach(function (word) {
        if (!hayTextObj[word]) {
            hayTextObj[word] = 0;
        }
        hayTextObj[word]++;
    });

    messageIsPossible = true;
    messageTextArr.forEach(function (word) {
      if (hayTextObj[word]) {
          hayTextObj[word]--;
          if (hayTextObj[word] < 0) {
              messageIsPossible = false;
          }
      } else {
          messageIsPossible = false;
      }
    });

    return messageIsPossible;
}