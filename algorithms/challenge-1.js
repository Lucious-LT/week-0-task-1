function countCharOccurrences(str, char) {
    let count = 0;

    for (let i =0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count++;
}  
let myStr = "hello"
let charToCount = "l"
console.log(countCharOccurrences(myStr, charToCount))

let myStr1 = "banana"
let charToCount1 = "a"
console.log(countCharOccurrences(myStr1, charToCount1))

let myStr2 = "racecar"
let charToCount2 = "z"
console.log(countCharOccurrences(myStr2, charToCount2))

module.exports = countCharOccurrences;
