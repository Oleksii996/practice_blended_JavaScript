//#region Масиви - Доступ до елементів (Arrays)

// Масив — це впорядкована структура даних, яка використовується для зберігання колекції елементів.
// Масиви можуть містити елементи різних типів даних: числа, рядки, булеві значення тощо.

// Створення масиву: використовуємо квадратні дужки [].
// Усередині дужок елементи розділяються комами.

const planets = ["Earth", "Mars", "Venus"]; // масив рядків
console.log(planets);

const numbers = [1, 2, 3, 4, 5]; // масив чисел
console.log(numbers);

// Хоча в масивах зазвичай зберігаються однотипні дані,
// це не сувора вимога — можна змішувати типи даних.
const mixed = ["apple", 10, true]; // масив з елементами різних типів
console.log(mixed);

// Доступ до елементів масиву:
// Щоб отримати елемент, використовуємо синтаксис квадратних дужок — arrayName[index]
// Індекс елемента починається з 0 (тобто перший елемент має індекс 0).

const spacePlanets = ["Earth", "Mars", "Venus"];
console.log(spacePlanets[0]); // 'Earth'
console.log(spacePlanets[1]); // 'Mars'
console.log(spacePlanets[2]); // 'Venus'

//Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.
const sunPlanets = ["Earth", "Mars", "Venus"];
const firstElement = planets[0];
console.log(firstElement); // 'Earth'

//Спроба доступу до неіснуючого індексу поверне значення undefined.

const SunPlanets = ["Earth", "Mars", "Venus"];
console.log(planets[3]); // undefined
console.log(planets[999]); // undefined

//#endregion

//#region Перевизначення значення елемента
