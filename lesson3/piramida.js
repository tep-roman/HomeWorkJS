/*
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
 */

let arr = [];
let i = 0;
do {
    arr.push("x");
    console.log(arr);
    i++;
}
while ( i < 20); // - for и while уже применял, решил здесь для примера сделать через do while