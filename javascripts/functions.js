// jshint esversion: 7

//Req. 3b
let arrAvg = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
   sum = sum + arr[i];
  }
  return sum / arr.length;
};

//Req. 3c
let arrMax = (arr) => {
  let maxNum = arr[0];
  arr.forEach(i => {
    if (i > maxNum) {
      maxNum = i;
    }
  })
  return maxNum;
};

//Req. 3d
let sumEvens = (arr) => {
  let sum = 0;
  for (i of arr) {
    if(i % 2 == 0){
      sum = sum + i;
    }
  }
  return sum;
}

//=======================================
let fruits = ["Apple", "Orange", "Plum"];
let maxSoFar = fruits[0].length;

//iterate over array ay
fruits.forEach((elem) => {
  if (elem.length > maxSoFar) {
    maxSoFar = elem.length;
  }
  result = `${result} ${elem} `;
});

console.log(maxSoFar);
