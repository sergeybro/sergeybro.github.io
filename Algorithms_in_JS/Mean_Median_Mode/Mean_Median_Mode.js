function meanMedianMode(arr) {
    return {
        mean: mean(arr),
        median: median(arr),
        mode: mode(arr),
    }
}

function mean(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum+= item;
    });
    return sum / arr.length
}

function median(arr) {
    arr.sort((a, b) => {
        return a - b;
    });
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
}

function mode(arr) {
    let obj = {};
    arr.forEach(item => {
        if (!obj[item]) {
            obj[item] = 0
        }
        obj[item]++
    });
    let frequency = 0;
    let modeArr = [];
    for (let key in obj) {
        if (obj[key] > frequency) {
            frequency = obj[key];
            modeArr = [key];
        } else if (obj[key] === frequency) {
            modeArr.push(key);
        }
    }
    if (modeArr.length === Object.keys(obj).length) {
        modeArr = [];
    }
    return modeArr;
}