//Homework 2

//Task 1

//Write a JavaScript function to print an integer with commas as thousands separators.

function separateNumber(num) {
    num = num.toString().split("").reverse();
    let result = "";
  
    for (let i = num.length - 1; i >= 0; i--) {
      if (i % 3 === 0 && i !== 0) {
        result += num[i];
        result += ",";
      } else {
        result += num[i];
      }
    }
    return result;
}


//Task 2

//Create a function that takes an array of numbers and returns the sum of the two lowest
//positive numbers.

function sumOfTwoLowest(arr) {

	let filteredArr = arr.filter(function(val){
  	if(val > 0) return val;
  });
  
  let min1 = Math.min(...filteredArr);
  
  let minEl1 = filteredArr.splice(filteredArr.indexOf(min1), filteredArr.indexOf(min1));
  
  let min2 = Math.min(...filteredArr);
  
  let minEl2 = filteredArr.splice(filteredArr.indexOf(min2), filteredArr.indexOf(min2));
  
  return min1 + min2;
}


//Task 3 

//Create a function that, given a number, returns the corresponding value of that index in the
//Fibonacci series

function numValOfFibonchi(num) {
    let fib = [1, 1];
    
        for(let i = 2; i <= num; i++){
             fib[i] = fib[i - 1] + fib[i - 2];
      }
      
    return fib[num];
}

//Task 4

//Create a function that takes a number as an argument and returns true or false
//depending on whether the number is symmetrical or not. A number is symmetrical when it
//is the same as its reverse


function isSymmetrical(num) {
	let symNum = num;
	let reverseNum = 0;
	
  while(num > 0){
  	reverseNum = reverseNum * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  
  if (reverseNum === symNum) {
  	return true;
  }else {
  	return false;
   }
} 


//Task 5

//Write a function that returns all the elements in an array that are strictly greater than their
//adjacent left and right neighbors


function greatherThanLeftAndRight(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        result.push(arr[i]);
      }
    }
    
    return result;
}


//Task 6

//For each number in an array, check if that number is greater than the sum of all numbers
//that appear before it in the array. If all numbers in the array pass this test, return true.
//Return false otherwise.


function isGreatherThanSumOfAll(arr) {
    let sum = 0;
  
    for (let i = 1; i < arr.length; i++) {
      sum += arr[i - 1];
      if (arr[i] < sum) {
        return false
      }
    }
  
    return true;
  }

















