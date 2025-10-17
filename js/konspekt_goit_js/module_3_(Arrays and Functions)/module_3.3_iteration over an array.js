//#region Ітерація по масиву
// Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.

// У прикладі нижче масив planets містить назви планет, і цикл for використовується для виведення кожного елемента в консоль.

{
  const planets = ["Earth", "Mars", "Venus"];

  for (let i = 0; i < planets.length; i += 1) {
    console.log(planets[i]);
  }
}
//Початкове значення лічильника i встановлюється як 0 і цикл продовжується, поки i менше за довжину масиву planets.length
//На кожній ітерації циклу використовується planets[i] для доступу до елементів масиву за їх індексом i
//Значення лічильника i з кожною ітерацією збільшується на 1 (вираз i += 1)
//Умова i < planets.length буде повертати true для значень лічильника 0, 1 і 2. Коли i досягне значення 3, умова стане false і цикл зупиниться

//Таким чином, на кожній ітерації циклу буде виконуватися блок коду всередині фігурних дужок, де ми виводимо поточний елемент масиву planets[i] в консоль. Результатом роботи циклу буде виведення назв планет одна за одною.

//Приклад-задача
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

{
  function calculateTotalPrice(order) {
    let sum = 0; // змінна для збереження загальної суми
    for (let i = 0; i < order.length; i += 1) {
      sum += order[i];
    }
    return sum;
  }

  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
}

//Приклад-задача
// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

{
  function getEvenNumbers(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i += 1) {
      if (i % 2 === 0) {
        // перевіряємо, чи число парне
        numbers.push(i); // додаємо парне число в масив
      }
    }
    return numbers;
  }

  console.log(getEvenNumbers(2, 5)); //
  console.log(getEvenNumbers(3, 11)); //
  console.log(getEvenNumbers(8, 8)); //
  console.log(getEvenNumbers(6, 12)); //
}

//#endregion

//#region Метод includes
// Метод масиву includes() використовується для перевірки наявності певного елемента в масиві. Він повертає логічне значення true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.

// Синтаксис методу includes() має такий вигляд:
// array.includes(element)
// де:
// array — це вихідний масив, у якому здійснюється пошук елемента;
// element — це елемент, наявність якого потрібно перевірити.

{
  const planets = ["Earth", "Mars", "Venus"];

  console.log(planets.includes("Earth")); // true
  console.log(planets.includes("Mars")); // true
  console.log(planets.includes("Venus")); // true
  console.log(planets.includes("Jupiter")); // false
}

//Метод includes() можна поєднувати з розгалуженнями для перевірки умов. Наприклад, виконати різний код залежно від наявності значення в масиві.
{
  const fruits = ["apple", "banana", "orange"];

  if (fruits.includes("banana")) {
    console.log("The array has an element banana"); // The array has an element banana
  } else {
    console.log("Array does not contain banana element"); // Array does not contain banana element
  }
}

//Приклад-задача
// Функція checkStorage(storage, item) приймає два параметри:
//storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити

// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві

// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

{
  function checkStorage(storage, item) {
    if (storage.includes(item.toLowerCase())) {
      //Без дужок (toLowerCase без ()) просто посиланняна сам метод як на об’єкт (функцію), але не викликаєте його
      return `${item.toLowerCase()} is available to order!`;
    } else {
      return `Sorry! We are out of stock!`;
    }
  }

  console.log(checkStorage(["apple", "plum", "pear"], "plum")); //
  console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); //
  console.log(checkStorage(["apple", "plum", "pear"], "pear")); //
  console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); //
  console.log(checkStorage(["apple", "plum", "pear"], "orange")); //
  console.log(checkStorage(["apple", "plum", "pear"], "carrot")); //
}

//Приклад-задача
//Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах. Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:
// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

{
  function getCommonElements(array1, array2) {
    const array3 = [];
    for (let i = 0; i < array1.length; i += 1) {
      if (array2.includes(array1[i])) {
        array3.push(array1[i]);
      }
    }
    return array3;
  }

  console.log(getCommonElements([1, 2, 3], [2, 4])); //
  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //
  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12,27,3]
  console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10,30,40]
  console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]
}
//#endregion

//#region Цикл for...of

//Цикл for...of — це зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожному елементі масиву. Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.
// Синтаксис циклу for...of виглядає так:
// for (let variable of array) {тіло циклу}

//Приклад використання циклу for...of для масиву:

{
  const planets = ["Earth", "Mars", "Venus"];

  for (const planet of planets) {
    console.log(planet); // "Earth", "Mars", "Venus"
  }
}

//Приклад-задача
// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.
{
  function calculateTotalPrice(order) {
    let sum = 0; // створюємо змінну, куди будемо накопичувати результат
    for (const number of order) {
      sum += number; // додаємо поточне i до суми
    }
    return sum; // повертаємо значення змінної sum
  }
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); //503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
console.log(calculateTotalPrice([])); //0
//#endregion
