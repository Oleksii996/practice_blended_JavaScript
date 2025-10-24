//Перебір об'єкта

//#region Цикл for...in
// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// Змінна key доступна тільки в тілі циклу.На кожній ітерації в неї буде записано значення ключа (ім'я) властивості.Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };

  for (const key in book) {
    console.log(key); // Ключ
    console.log(book[key]); // Значення властивості з таким ключем
  }
}

//Приклад
// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
{
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };

  const keys = [];
  const values = [];

  for (const key in apartment) {
    keys.push(key); // додаємо ключ
    values.push(apartment[key]); // додаємо значення
  }

  console.log(keys); // Ключ
  console.log(values); // Значення
}

//#endregion

//#region Метод Object.keys()
// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.
// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.
{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  const keys = Object.keys(book);
  console.log(keys); // ['title', 'author', 'genres', 'rating']
}

//Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.
{
  const book = {
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  const keys = Object.keys(book);

  for (const key of keys) {
    console.log(key); // Ключ
    console.log(book[key]); // Значення
  }
}

//Приклад
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

{
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  const keys = Object.keys(apartment);

  for (const key of keys) {
    values.push(apartment[key]); // додаємо значення
  }

  console.log(values); //
  console.log(keys); //
}

//Приклад Підрахунок властивостей".
// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

//For-in
{
  function countProps(object) {
    let propCount = 0;

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        propCount += 1;
      }
    }

    return propCount;
  }

  console.log(countProps({})); //
  console.log(countProps({ name: "Mango", age: 2 })); //
  console.log(
    countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
  ); //
}

//Object.keys
{
  function countProps(object) {
    return Object.keys(object).length;
  }

  console.log(countProps({})); //
  console.log(countProps({ name: "Mango", age: 2 })); //
  console.log(
    countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
  ); //
}
//#endregion

//#region Метод Object.values()
// Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі), то метод Object.values(object) повертає масив значень його властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив.

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  };
  const keys = Object.keys(book);
  console.log(keys); // ["title", "author", "rating"]

  const values = Object.values(book);
  console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
}

//Приклад
// Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().

{
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };

  const keys = Object.keys(apartment);
  console.log(keys); //[ 'descr', 'rating', 'price' ]

  const values = Object.values(apartment);
  console.log(values); //[ 'Spacious apartment in the city center', 4, 2153 ]
}

//Приклад "Витрати на зарплату"!
// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

function countTotalSalary(salaries) {
  let totalSalary = 0;
}

console.log(countTotalSalary({})); //
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //

//#endregion
