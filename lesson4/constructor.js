/*
2. создать функцию конструтор для фруктов Fruit
let apple = new Fruit('зеленое', 'круглое')
console.log(apple) // { ... }
let banan = new Fruit('желтый', 'длинный')
+
задайте метод, showFruit, который будет у созданных объектов  apple и banan,
который выводит цвет и форму через пробел

при вызове
apple.showFruit()
покажет в консоли: 'зеленое круглое'
 */

function Fruit(color, property) {
    this.color = color;
    this.property = property;
}

let apple = new Fruit("зеленое", "круглое");
let banan = new Fruit("желтый","длинный");

function showFruit() {
    console.log(this.color + " " + this.property);
}

console.log(apple);
console.log(banan);

apple.showFruit = showFruit;
apple.showFruit();

banan.showFruit = showFruit;
banan.showFruit();

