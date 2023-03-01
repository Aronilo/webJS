//Задача №1 Функция конвертации скоростей


function convertSpeed(speed, direction) {
    if (direction === 'kmh') {
        return `convertSpeed(${speed}, ${direction}) -> ${speed / 3.6} м/с`;
    } else if (direction === 'ms') {
        return `convertSpeed(${speed}, ${direction}) -> ${speed * 3.6} км/ч`;
    } else {
        return 'Error';
    }
}

console.log(convertSpeed(100, 'kmh'));
console.log(convertSpeed(100, 'ms'));

//Задача №2 Абсолютное значение

function absValue(number) {
    if (number < 0) {
        return `absValue(${number}) -> ${number * -1}`;
    } else {
        return `absValue(${number}) -> ${number}`;
    }
}

console.log(absValue(-2));
console.log(absValue(100));
console.log(absValue(0));

//Задача №3 Работа с объектом


const student = {
    group: 201,
    last_name: `Иванов`,
    first_name: `Иван`,
}

const keys = Object.keys(student);
console.log(keys);
let a = 'Cписок свойств: ';
a+=keys.join(`, `);
console.log(a);
console.log(`Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);

//Задача №4 Случайные числа

function randomNumber(min, max) {
    return `randomNumber(${min}, ${max}) -> ${Math.floor(Math.random() * (max - min)) + min}`
}

console.log(randomNumber(0, 10));
console.log(randomNumber(-10, 10));

//Задача №5 Значения из массива








