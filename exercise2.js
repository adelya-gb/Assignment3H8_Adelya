//Exercise 2
const threeStepsAB = (text) => {
    let temp = text.toLowerCase()
    for (let i = 0; i < temp.length - 4; i++) {
        if ((temp[i] === "a" && temp[i+4] === "b") || (temp[i] === "b" && temp[i+4] === "a")) {
            return true;
        }
    }
    return false;
}

console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));


