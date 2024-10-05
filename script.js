// Good Luck 💪🏾
function sumTwoSmallestNums(arr) {
  
    const sortedArr = arr.sort((a, b) => a - b);
    
    
    return sortedArr[0] + sortedArr[1];
}


console.log(sumTwoSmallestNums([12, 5, 24, 55, 18])); 
console.log(sumTwoSmallestNums([190, 300, 230, 800]));