//#region Масив об’єктів
// Об'єкти дозволяють згрупувати описові характеристики сутності, наприклад, користувача, книги, автомобіля, шоколадного батончика тощо.

// Для опису групи сутностей використовується масив об'єктів.
// Уяви, що треба описати бібліотеку. Кожна книга — це окремий об’єкт, що містить інформацію про назву, автора, кількість сторінок, рейтинг тощо. Якщо книга — це один об’єкт, то біблотека — це колекція книг, тобто масив об’єктів.
{
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Tell-Tale Heart",
      author: "Edgar Allan Poe",
      rating: 7.75,
    },
  ];

  //У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів. Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.
  // Для перебору такого масиву використовується стандартний цикл for...of.
  // Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (див. тему Об’єкти. Доступ до властивостей через крапку), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.
  {
    for (const book of books) {
      console.log(book); // Об'єкт книги
      console.log(book.title); // Назва
      console.log(book.author); // Автор
      console.log(book.rating); // Рейтинг
    }
  }
}

//Приклад
// Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

{
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];

  const hexColors = [];
  const rgbColors = [];

  for (const color of colors) {
    hexColors.push(color.hex); // додаємо значення властивості hex
    rgbColors.push(color.rgb); // додаємо значення властивості rgb
  }

  console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
  console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
}

//#endregion

//#region Пошук об'єкта за значенням властивості
// Стандартне завдання під час роботи з масивом об'єктів — це пошук об'єкта за значенням властивості. Наприклад, потрібно знайти книгу за її автором. Для цього необхідно:
// перебрати масив у циклі;
// додати умову, виконання якої означатиме успішний результат пошуку.

{
  const books = [
    { title: "The Last Kingdom", author: "Bernard Cornwell" },
    { title: "Beside Still Waters", author: "Robert Sheckley" },
    { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" },
  ];

  const authorToSearchFor = "Robert Sheckley";

  for (const book of books) {
    if (book.author === authorToSearchFor) {
      console.log(book);
      console.log(book.title);
      console.log(book.rating);
    }
  }
}

//У прикладі вище цикл for перебирає об'єкти в масиві, доки не знайде той, у якого порівняння значення властивості author і authorToSearchFor поверне true. Щойно об’єкт з необхідним автором знайдено, виконається тіло if, де ми вже можемо працювати зі знайденим об'єктом.

//Приклад

{
  function getProductPrice(productName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
    for (const product of products) {
      if (product.name === productName) {
        return product.price;
      }
    }
  }

  console.log(getProductPrice("Radar"));
  console.log(getProductPrice("Grip"));
  console.log(getProductPrice("Scanner"));
  console.log(getProductPrice("Droid"));
  console.log(getProductPrice("EngineА"));
}

//#endregion

//#region Колекція значень властивості
// Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.
// Для цього необхідно:
// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.
{
  const books = [
    { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
    { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
    { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 },
  ];

  const titles = [];

  for (const book of books) {
    titles.push(book.title);
  }

  console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Tell-Tale Heart"]
}

//У результаті вийде масив значень певної властивості з усіх об'єктів.
// Дізнаємося середній рейтинг усієї нашої колекції. Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.
{
  const books = [
    { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
    { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
    { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 },
  ];

  let totalRating = 0;

  for (const book of books) {
    totalRating += book.rating;
  }

  const averageRating = totalRating / books.length;
  console.log(averageRating); // 8
}

//Приклад
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

{
  function getAllPropValues(propName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
    const newArray = [];

    for (const product of products) {
      if (propName in product) {
        newArray.push(product[propName]);
      }
    }

    return newArray;
  }

  console.log(getAllPropValues("name")); //
  console.log(getAllPropValues("quantity")); //
  console.log(getAllPropValues("price")); //
  console.log(getAllPropValues("category")); //
}

//Задача "Вартість товару"!
// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.
{
  function calculateTotalPrice(productName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];

    for (const product of products) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return `Product ${productName} not found!`;
  }

  console.log(calculateTotalPrice("Radar")); // 5200
  console.log(calculateTotalPrice("Scanner")); // 8100
  console.log(calculateTotalPrice("Droid")); // 2800
  console.log(calculateTotalPrice("Grip")); // 10800
  console.log(calculateTotalPrice("Engine")); // "Product Engine not found!"
}

//#endregion
