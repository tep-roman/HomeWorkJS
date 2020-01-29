/*
1. Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log
и вернуть пустой объект.
 */

let inputNumber = prompt("Введите число от 0 до 999");
let arrNumber = inputNumber.split("");
let arrNumberNew = arrNumber.reverse();
let objNumber  = {
    "единицы": +arrNumberNew[0],
    "десятки": +arrNumberNew[1],
    "сотни": +arrNumberNew[2]
};

function numToObj() {
    if (arrNumberNew.length == 3) {
        return objNumber;
    } else if (arrNumberNew.length == 2) {
        delete objNumber["сотни"];
        return objNumber;
    } else if (arrNumberNew.length == 1) {
        delete objNumber["сотни"];
        delete objNumber["десятки"];
        return objNumber;
    }
}

while (inputNumber.length > 3 || inputNumber == ("")) {
    inputNumber = prompt("Введите число от 0 до 999");
} console.log(numToObj());
