function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++ ) {

        var tempArrItem = arr[i];

        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempArrItem;
    }
    return arr;
}