function harmlessRansomNote (messageText, hayText) {
    var messageIsPossible,
        messageTextArr = messageText.split(' '),
        hayTextArr = hayText.split(' '),
        hayTextObj = {};

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