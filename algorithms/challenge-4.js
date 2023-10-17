function findSmallest(num1, num2, num3) {
  let smallest = num1;
  if(num2 < smallest ){
    smallest= num2
  }
  if(num3<smallest ){
    smallest = num3
  }
  return smallest
}
let num1= 10
let num2 = 8
let num3 = 5
let smallest = findSmallest(num1,num2,num3)
console.log (smallest)


module.exports = findSmallest; 

