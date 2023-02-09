console.log('36 км/час соответствует 10 м/с \n 20 м/с соответствует 72 км/час');

let side = 5;
let side2 = 7;
let side3 = 5;

if (side + side2 > side3 && side + side3 > side2 && side2 + side3 > side) {
    console.log('Треугольник существует');
    let p = (side + side2 + side3) / 2;
    console.log(`Периметр = ${p}`);
    let area = Math.sqrt(p * (p - side) * (p - side2) * (p - side3));
    console.log(`Площадь = ${area}`);
    console.log(`Соотношение = ${p / area}`);
} else {
    console.log('Треугольник не существует');
}


let number = prompt('Введите число');
for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(`${i} buzz`);
    } else if (i % 5 === 0) {
        console.log(`${i} fizz buzz`);
    } else {
        console.log(`${i} fizz`);
    }
}


let star = "*";
let grid = "#";
let line = "";
let space = " ";
let tree = "";
let treeHeight = 13;

for (let i = 0; i < treeHeight; i++) {
    for (let j = 0; j < treeHeight - i; j++) {
        line += space;
    }
    for (let k = 0; k < i + 0.5; k++) {
        if (k % 2 === 0) {
            line += star;
        } else {
            line += grid;
        }
    }
    tree += line + "\n";
    line = "";
}
tree += space.repeat(treeHeight - 1) + "||";
console.log(tree);
