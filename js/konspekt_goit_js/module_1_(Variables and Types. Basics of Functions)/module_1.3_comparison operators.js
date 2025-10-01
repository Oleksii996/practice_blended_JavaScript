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
//#endregion

//#region Перетворення рядків у числа (String to Number Conversion)
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
