//Exercise 4 
const arrSum = (arr) => {
    let len = arr.length;
    let temp = arr[0];
    let maxEnd = arr[0];
    let start = 0;
    let end = 0;
    let s = 0;

    for (let i = 1; i < len; i++) {
        maxEnd = Math.max(arr[i], maxEnd + arr[i]);

        if (temp < maxEnd) {
            temp = maxEnd;
            start = s;
            end = i;
        }

        if (maxEnd < 0) {
            maxEnd = 0;
            s = i + 1;
        }
    }

    return [arr.slice(start, end + 1), temp];
}

let arr = [1, 2, 3];
let result = arrSum(arr);
console.log(result);    
