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

//#region Перевизначення значення елементи масиву (Reassigning an Array Element)
//Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення. Цей процес називається "перевизначенням" значення елемента.Ось приклад, як перевизначити елементи масиву:
{
  const planets = ["Earth", "Mars", "Venus", "Uranus"]; // масив рядків
  planets[0] = "Jupiter";
  planets[2] = "Neptune";
  console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']
}

//#endregion

//#region Довжина масиву (Length of an Array)
//Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка автоматично змінюється під час додавання або видалення елементів.
{
  const planets = ["Earth", "Mars", "Venus"];
  console.log(planets.length); // 3
}

//приклад
{
  const planets = ["Earth", "Mars", "Venus"];

  if (planets.length >= 3) {
    console.log("3 or more elements");
  } else {
    console.log("3 or less elements");
  }
}

//Приклад-функція
// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта. Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.
{
  function getOrderQuantity(order) {
    return order.length;
  }
}

//#endregion

//#region Індекс останнього елемента масиву (Index of the Last Array Element)
// Щоб знайти значення останнього елемента масиву, нам потрібно знати його індекс. Індекс останнього елемента можна визначити за допомогою формули довжина_масиву -1. Оскільки індексація елементів масиву починається з 0, а довжина масиву зберігає загальну кількість елементів, віднімаючи 1 від довжини масиву, ми отримуємо індекс останнього елемента.

{
  const planets = ["Earth", "Mars", "Venus"];
  const lastElementIndex = planets.length - 1;
  console.log(planets[lastElementIndex]); // "Venus"
}

//Приклад-функція
// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

{
  function getLastElementMeta(array) {
    return [array.length - 1, array[array.length - 1]];
  }

  console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); //
  console.log(getLastElementMeta(["apple", "peach", "pear"])); //
}

//Приклад-функція
// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

{
  function getExtremeElements(array) {
    return [array[0], array[array.length - 1]];
  }

  console.log(getExtremeElements(["Earth", "Venus"])); //
  console.log(getExtremeElements(["apple", "peach", "pear", "pear", "banana"])); //
  console.log(getExtremeElements([1, 2, 3, 4, 5])); //
}

//#endregion
