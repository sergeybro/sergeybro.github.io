/**
 * Created by Sergey on 9/18/2016.
 */

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};


function arrayToList (arr) {
    var tempArr = arr;
    var obj = {};

    obj.rest = null;
    obj.value = tempArr.shift();

    if (tempArr.length > 0) {
        obj.rest = arrayToList(tempArr);
    }

    return obj;
}


function arrayToList2(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}

arrayToList ([1,2,3]);
arrayToList2 ([1,2,3]);

function listToArray(list) {
    var arr = [list.value];

    if (list.rest) {
        arr = arr.concat(listToArray(list.rest));
    }

    return arr;
}

function listToArray2(list) {
    var arr = [];

    while (list){
        arr.push(list.value);
        list = list.rest;
    }

    return arr;
}

function listToArray3(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
        array.push(node.value);
    return array;
}

listToArray(list);
listToArray2(list);
listToArray3(list);