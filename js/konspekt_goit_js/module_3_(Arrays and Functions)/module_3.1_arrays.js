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

//#region Присвоєння за посиланням і за значенням (by reference and by value)

//Примітиви: рядки, числа, буль, null і undefined, під час присвоювання копіюються цілком, за значенням (by value).
// Зі складними типами все не так. У змінній, якій, наприклад, присвоєно масив, зберігаються не самі значення елементів масиву, а адреса того місця в пам'яті, де цей масив розташовано. Іншими словами — посилання (покажчик) на нього. Отже, вони передаються за посиланням (by reference).

//Усі примітивні типи присвоюються за значенням, тобто створюється копія.
{
  let a = 5;

  let b = a;
  console.log(a); // 5
  console.log(b); // 5
  // Присвоєння за значенням, у пам'яті буде створено ще
  // одну ячейку, в яку буде скопійовано значення 5

  // Змінимо значення a
  a = 10;
  console.log(a); // 10
  console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія
}

//Масиви (складний тип) присвоюються за посиланням, тобто змінна просто отримує посилання (покажчик у пам'яті) на вже існуючий масив.
{
  const a = ["Mango", "Poly"];
  const b = a;
  console.log(a); // ["Mango", "Poly"]
  console.log(b); // ["Mango", "Poly"]
}

//Змінимо масив, замінивши елемент з індексом 1, використовуючи посилання з a.
{
  const a = ["Mango", "Poly"];
  const b = a;
  console.log(a); // ["Mango", "Poly"]
  console.log(b); // ["Mango", "Poly"]

  a[1] = "Jacob";
  console.log(a); // ["Mango", "Jacob"]
  console.log(b); // ["Mango", "Jacob"]

  b[0] = "Ajax";
  console.log(a); // ["Ajax", "Jacob"]
  console.log(b); // ["Ajax", "Jacob"]
}

//Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.
{
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];

  console.log(arr1 === arr2); // false
  console.log([] === []); // false
}
//#endregion

//#region Приведення типів: масиви (Type Conversion: Arrays)
//Масив → Рядок
//При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами.
{
  const array = [1, true, "Poly"];
  console.log(String(array)); // "1,true,Poly"
  console.log(array + "5"); // "1,true,Poly5"
}

//Масив → Число
// При перетворенні масиву в число алгоритм складається з двох кроків: спочатку масив приводиться до рядка, а потім цей рядок приводиться до числового значення. Наприклад, порожній масив приводиться до порожнього рядка, який приводиться до числа 0.

{
  console.log(Number([])); // 0
  console.log(Number([1])); // 1
  console.log(Number([1, 2, 3])); // NaN
}

//Масив → Логічне значення (буль)
// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.
{
  const emptyArray = [];
  const nonEmptyArray = [1, 2, 3];

  console.log(Boolean(emptyArray)); // true
  console.log(Boolean(nonEmptyArray)); // true

  if (emptyArray) {
    console.log("if is in progress");
  } else {
    console.log("else is not performed");
  }

  if (nonEmptyArray) {
    console.log("if is in progress");
  } else {
    console.log("else is not performed");
  }
}
//При перетворенні масиву в логічне значення масив перетворюється на true. Отже, виконається вираз тернарного оператора для істинної умови, а саме змінній result буде присвоєно значення "A".

{
  const array = [false];
  const result = array ? "A" : "B";

  console.log(result); // "A"
}
//#endregion
