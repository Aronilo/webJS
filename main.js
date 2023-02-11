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


for (let i=0 ; i< 13; i++) {
    if (i === 12 && i!== 0) {
        console.log('||');
    }
    else if (i % 2 === 0) {
        console.log('*' .repeat(i) );
    }
    else {
        console.log('#' .repeat(i));
    }
}

