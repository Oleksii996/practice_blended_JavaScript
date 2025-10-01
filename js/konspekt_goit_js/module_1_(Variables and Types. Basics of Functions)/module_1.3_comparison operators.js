//#region Оператори порівняння (Comparison Operators)
const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false
//#endregion

//#region Оператори рівності (Equality Operators)
//Несувора рівність (loose equality)
console.log(5 == 5); // true
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 != 5); // false
// Погано, бо виконується неявне приведення рядків і булевого значення до числа
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

//Сувора рівність (strict equality)
//Добре, приведення типів не виконується
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true
//#endregion

//#region Перетворення типів: числа (Type Conversion: Numbers)
//Вбудована функція Number()
console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN
//Неявне перетворення типів (implicit type conversion)
console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4

//Перетворення рядків у числа (String to Number Conversion)
//Метод Number.parseInt()
console.log(Number.parseInt("5")); // 5
console.log(Number.parseInt("5.5")); // 5
console.log(Number.parseInt("5cm")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("cm5")); // NaN
console.log(Number.parseInt("")); // NaN
console.log(Number.parseInt("qweqwe")); // NaN;
//Метод Number.parseFloat()
console.log(Number.parseFloat("5")); // 5
console.log(Number.parseFloat("5.5")); // 5.5
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("5cm")); // 5
console.log(Number.parseFloat("5.5cm")); // 5.5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat("qweqwe")); // NaN
//#endregion

//#region Арифметичні функції (Arithmetic Functions)
//Math.floor(num) - округлення до меншого цілого
console.log(Math.floor(5.1)); // 5
console.log(Math.floor(5.9)); // 5
console.log(Math.floor(-5.1)); // -6
console.log(Math.floor(-5.9)); // -6
//Math.ceil(num) - округлення до більшого цілого
console.log(Math.ceil(5.1)); // 6
console.log(Math.ceil(5.9)); // 6
console.log(Math.ceil(-5.1)); // -5
console.log(Math.ceil(-5.9)); // -5
//Math.round(num) - округлення до найближчого цілого
console.log(Math.round(5.1)); // 5
console.log(Math.round(5.5)); // 6
console.log(Math.round(5.9)); // 6
console.log(Math.round(-5.1)); // -5
//Math.max(a, b, c, ...) - пошук найбільшого числа
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.max(-1, -2, -3, -4, -5)); // -1
//Math.min(a, b, c, ...) - пошук найменшого числа
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.min(-1, -2, -3, -4, -5)); // -5
//Math.random() - генерація псевдовипадкового числа від 0 до 1
console.log(Math.random()); // 0.123456789...
console.log(Math.random()); // 0.987654321...
//#endregion

//#region Дробові числа (Floating Point Numbers)
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
//Метод toFixed(n) - повертає рядок з округленим числом до n знаків після коми
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
//#endregion
