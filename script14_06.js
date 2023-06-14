/*  1. Напишите функцию, которая принимает два числовых аргумента и выводит в 
консоль все четные числа от большего к меньшему.*/
 /* const num1=+prompt()
const num2=+prompt()
function calc(num1, num2){

  const start = num1 > num2 ? num1 : num2;
  const end = num1 > num2 ? num2 : num1;

  for (var i = start; i >= end; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}  
calc(num1, num2) */
  /*   2. Напишите функцию power, которая принимает два числовых
  аргумента (основание степени и саму степень) и возвращает
  число в указанной степени. Значение степени должно быть указано по умолчанию 2. */


  /* const number =+prompt()
  const degree = 2;
  function power (number,degree){
    let result ;
    result = number**2;
    console.log(result)

  }
  power (number,degree)   */



  /*  3. Напишите функцию, которая принимает числовой аргумент n и считает
   сумму чисел от 1 до n. */
 /*  const n = +prompt()
 function calcSum(n){
    let sum = 0 ;
    for (let i = 1; i <= n; i++) {
        
        sum += i;
        
     }
     return sum;
 }
 let result = calcSum(n);
 console.log(result); */


  /*  4. Напишите функцию, которая принимает два числовых аргумента n и m и считает 
    сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль 
    (в начале сумму четных чисел, а затем сумму нечетных).
  */
  /* const n = +prompt("Enter a number1")
  const m =+prompt("Enter a number2")
    function calculateEvenOddSum(n, m) {
        var evenSum = 0;
        var oddSum = 0;
      
        for (var i = n; i <= m; i++) {
          if (i % 2 === 0) {
            evenSum += i;
          } else {
            oddSum += i;
          }
        }
      
        console.log("Сумма четных чисел:", evenSum);
        console.log("Сумма нечетных чисел:", oddSum);
      }
      
      
      calculateEvenOddSum(n, m);    */

  /*    5. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает 
    первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null.
    Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
    (string.length > string.length) - сравнение длины строк
  */

    function findLongestString(strings) {
        if (strings.length === 0) {
          return null;
        }
      
        let longestString = strings[0];
      
        for (let i = 1; i < strings.length; i++) {
          if (strings[i].length > longestString.length) {
            longestString = strings[i];
          }
        }
      
        return longestString;
      }
      
      
      const strings = ['apple', 'sony', 'LG', 'philips'];
      const result = findLongestString(strings);
      console.log(result);

