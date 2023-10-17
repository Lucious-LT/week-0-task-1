function checkNumber(num) {
    // checkNumber 3, 5, 0
   if(num > 0){
    return "Positive"
   } else if (num < 0){
    return "Negative"
   } else{
     return "Zero"
   }
}
console.log(checkNumber(5));

let num2 = 5
let result2 = checkNumber(num2)
console.log(result2)

let num3 = 0
let result3 = checkNumber(num3)
console.log(result3);
module.exports = checkNumber;