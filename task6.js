// 1. Usage of MAP Method

const num=[1,2,3,4,5,6,7,8,9,10];
const squareOfNum=num.map(function(n) { return n*n; });
console.log(num);
console.log(squareOfNum);

// 2. Cube value only for Odd number

const num1=[1,2,3,4,5,6,7,8,9,10];
const cubeOfNum=num1.filter(function(n) {return n % 2 !==0}).map(function(n) {return n*n*n});
console.log(cubeOfNum);

// 3. Perform Arithmetic operations

const num3=[1,2,3,4,5];
let sum=num3.reduce(function(sum,num) {return sum+num;},0);
let pdt=num3.reduce(function(pdt,num) {return pdt*num;},1);
console.log(sum);
console.log(pdt);