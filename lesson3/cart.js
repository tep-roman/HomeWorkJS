/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

Товары в корзине хранятся в массиве. Задачи:

a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */


let arrName = [ "Яблоко", "Апельсин", "Слива" ];
let arrPrice = [ 10, 20, 30 ];
let j = 0;
let score = "В корзине находится:";

console.log(score);

while ( j < arrPrice.length ) {
    console.log(`${arrName[j]} - ${arrPrice[j]} рублей` );
    j++;
}

function countBasketPrice(price) {
    let sumPrice = 0;
    for (let i = 0; i < price.length; i++) {
        sumPrice += price[i];
    }
    return sumPrice;
}

console.log(`Общая стоимость заказа -  ${countBasketPrice(arrPrice)} рублей`);