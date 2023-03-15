//Задача №1 Конвертация скоростей

console.log('36 км/час соответствует 10 м/с \n 20 м/с соответствует 72 км/час');

//Задача №2 Треугольник
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

//Задача №3 Fizz-Buzz

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

//Задача №4 Елка к новому году

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

//Задача №5 Угадай число

let number1 = 10;
let userNumber = +prompt('Введите число');
while (!parseInt(userNumber)) {
    while (userNumber !== number1) {
        if (userNumber > number1) {
            userNumber = +prompt('Ваше число больше');
        } else if (userNumber < number1) {
            userNumber = +prompt('Ваше число меньше');
        }
    }
}
console.log('Вы угадали число');

//Задача №6 Деление

let n = +prompt('Введите число n');
let x = +prompt('Введите число x');
let y = +prompt('Введите число y');
if (n % x === 0 && n % y === 0) {
    console.log(`n = ${n}, x = ${x}, y = ${y} => TRUE`);
} else {
    console.log(`n = ${n}, x = ${x}, y = ${y} => FALSE`);
}

//Задача №7 Кварталы

let monthNumber = +prompt(`Введите номер месяца`);
if (monthNumber === 1 || monthNumber === 2 || monthNumber === 3) {
    console.log(`Месяц ${monthNumber} => 1 квартал`)
} else if (monthNumber === 4 || monthNumber === 5 || monthNumber === 6){
    console.log(`Месяц ${monthNumber} => 2 квартал`)
} else if (monthNumber === 7 || monthNumber === 8 || monthNumber === 9){
    console.log(`Месяц ${monthNumber} => 3 квартал`)
} else {
    console.log(`Месяц ${monthNumber} => 4 квартал`)
}



