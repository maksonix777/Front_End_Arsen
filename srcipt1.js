// Функция для вычисления 10% от числа


const num = prompt("Введите число:");
const result = calc(num);
function calc(num) {
  return num * 0.1;
}
console.log("10% от числа " + num + " равно: " + result);


- - - - - - - - - - -

Написать программу, которая получает два числа и выводит наименьшее

const num1 = +prompt("enter a number 1")
const num2 = +prompt("enter a number 2")
if (num1 < num2){
 console.log(num1)
}
else {console.log(num2)}

 - - - - - - - - - - - -

Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений:
‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’


const number = +prompt("Enter a number")
if(number > 100){
console.log("Число больше 100")
}
else if (number == 100){
    console.log("Число равно 100")
}
else{
    console.log("Число меньше 100")
}

 - - - - - - - - - - - - - -

Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) 
и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi,
<name>’, если пользователь несовершеннолетний.

const userName = prompt("your name")
const userAge = +prompt("your age");

if (userAge >= 18) {
  console.log(`Hello, ${userName}`);
} 

else {
  console.log(`Hi, ${userName}`);
}