/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

let a = +prompt("Введите любое целое число: ");
let b = +prompt("Введите любое целое число: ");
let x;
if (a >= 0 && b >= 0) {
    if (a >= b){
        alert(`Разница этих чисел = ${x = a - b}`);
    }
    else {
        alert(`Разница этих чисел = ${x = b - a}`);
    }
} else if (a < 0 && b < 0) {
    alert(`Произведение этих чисел = ${x = a * b}`);
} else {
    alert(`Сумма этих чисел = ${x = a + b}`);
}

/*
4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/

a = +prompt("Введите любое значение от 0 до 15: ");
let i;
switch (a) {
    case 0:
        i = -1;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 1:
        i = 0;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 2:
        i = 1;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 3:
        i = 2;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 4:
        i = 3;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 5:
        i = 4;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 6:
        i = 5;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 7:
        i = 6;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 8:
        i = 7;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 9:
        i = 8;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 10:
        i = 9;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 11:
        i = 10;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 12:
        i = 11;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 13:
        i = 12;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 14:
        i = 13;
        while (i < 15) {
            i++;
            console.log(i);
        }
        break;
    case 15:
        console.log(a);
        break;
}

/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
 */

a = 6;
b = 3;
function sum(x, y) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function composition(a, b) {
    return a * b;
}
let result = sum(a, b);
alert(result);

result = minus(a, b);
alert(result);

result = division(a, b);
alert(result);

result = composition(a, b);
alert(result);

/*
6. Реализовать функцию с тремя параметрами:
function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
 */

a = +prompt("Введите любое целое число: ");
b = +prompt("Введите любое целое число: ");
let c = prompt("Введите название арифметической операции, которую вы хотите выполнить (сложение, вычитание, деление" +
    " или умножение): ");
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "сложение":
            return arg1 + arg2;
        case "вычитание":
            return arg1 - arg2;
        case "деление":
            return arg1 / arg2;
        case "умножение":
            return arg1 * arg2;
    }
}
result = mathOperation(a, b, c);
alert(result);

/*
7. *Сравнить null и 0. Попробуйте объяснить результат.
При сравнении null == 0;
возвращается значение false.
null – тип данных null, означает, что значение неизвестно. 0 – число, тип данных number.
Также null > 0 выдаст false.
Но если сравнить null >= 0 ты выдаст true.
У меня нет логического ответа, жду его от преподавателя.
 */

/*
8. *С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
 */

a = 2;
b = 3;
c = a;
function power(val, pow){
    if (pow == 1) {
        alert (val);
    } else {
        val = val * c;
        power(val,pow - 1)
    }
}
power(a, b); // - этот вариант сделал сам, но не уверен, что верно

function power1(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * pow(val, pow - 1); // - не понимаю как работает это, почему val умножается на функцию
    }
}

alert( power1(a, b) ); // - этот вариант нашел в сети по уроку рекрсии JS