// Consider an array/list of sheep where some sheep may be
// missing from their place. We need a function that
// counts the number of sheep present in the array (true
//     means present).

array = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
];
function countSheep() {
  let x = 0;
  for (elem of array) {
    if (elem == true) {
      x += 1;
    }
  }
  console.log(x);
}
countSheep();


// 2 //---------------------
// Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".

//  Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6.
// Если введенное значение является строкой, оно должно вернуть «Ошибка».

let calc = function (num) {
  if (typeof num === "string") {
    return "Error";
  } else {
    return num * 50 + 6;
  }
};
console.log(calc(2));


//3//---------------
//Создаем функцию с именем ярлыка для ✓
// удаляем строчные гласные (a, e, i, o, u) в данной строке.

function shortcut(arrayWord) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let elem of arrayWord) {
    if (!vowels.includes(elem)) {
      result += elem;
    }
  }
  return result;
}
console.log(shortcut("Remove vowels letters"));


//4//---------
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bmi = weight / (height / 100) ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30.0) {
    return "Obese";
  }
}
let weight = 75;
let height = 180;
console.log(bmi(weight, height));


//5//-------
// function multiply(a, b){
//     let result = 1;
//      result =  a * b
//       return result
//     }

//     console.log(multiply(3,2))

function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 7));


//6//------------
function yesOrno(x) {
  if (x === true) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
const x = true;
yesOrno(x);


//7//------------------------
function sumOfnum(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    const element = sumOfnum[i];
    sum += i;
  }
  return sum;
}
const num = 5;
const result = sumOfnum(num);
console.log(`The sum of numbers from 1 to ${num} is ${result}`);


//8//------------
// Я новичок в программировании и теперь
//  хочу получить сумму двух массивов... Фактически сумму всех их элементов.

// P.S. Каждый массив содержит только
// целые числа. Выходные данные тоже являются числом.

function arraySum(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  for (let el of arr1) {
    sumArr1 += el;
  }
  for (let el of arr2) {
    sumArr2 += el;
  }
  return (result = sumArr1 + sumArr2);
}
console.log(arraySum([1, 2, 2], [2, 1, 1]));


//9//------
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

mResults = [
  "3:1",
  "2:2",
  "0:1",
  "3:1",
  "2:2",
  "5:1",
  "3:1",
  "2:2",
  "0:1",
  "2:2",
];

function teamScore(mResults) {
  let points = 0;
  let sumPoints = 0;
  for (let i = 0; i < mResults.length; i++) {
    if (mResults[i][0] > mResults[i][2]) {
      points += 3;
    } //  x > y: 3 points (win)
    if (mResults[i][0] == mResults[i][2]) {
      points += 1;
    } //  x < y: 0 points (loss)
    if (mResults[i][0] < mResults[i][2]) {
      points += 0;
    } //  x = y: 1 point (tie)
  }
  sumPoints += points;
  return sumPoints;
} //[0,0][0,2] [1,0][1,2]//
console.log(teamScore(mResults));


//10//-------
function liters(time) {
  return Math.floor(time * 0.5);
}
console.lof(liters(5));
