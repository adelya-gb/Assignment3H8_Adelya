//Exercise 1
const isArithmeticProgression = (arrNum) => {
    let allNum = true
    let selisih = arrNum[1] - arrNum[0]

    for (let el of arrNum) {
        if (typeof el !== 'number') {
            allNum = false
            return "Invalid Array"
        } else {
            allNum = true
        }
    }
    // console.log(allNum);

    if (allNum === true && arrNum.length > 0) {
        for (let i = 2; i < arrNum.length; i++) {
            if (arrNum[i] - arrNum[i-1] !== selisih) {
                return false
            } 
        }
        return true
    }
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));
