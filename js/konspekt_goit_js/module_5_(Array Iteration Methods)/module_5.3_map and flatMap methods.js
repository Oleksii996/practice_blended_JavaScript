//Методи map і flatMap

//#region Чисті функції

// Функція з побічними ефектами — це функція, яка в процесі виконання може:
// змінювати або використовувати глобальні змінні
// змінювати значення аргументів посилального типу
// виконувати операції введення-виведення тощо
{
  const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = array[i] * value;
    }
  };

  const numbers = [1, 2, 3, 4, 5];
  dirtyMultiply(numbers, 2);
  // Відбулася мутація вихідних даних - масиву numbers
  console.log(numbers); // [2, 4, 6, 8, 10]
}

//Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.

{
  //Чиста функція (pure function) — це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.
  // Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

  const pureMultiply = (array, value) => {
    const newArray = [];

    array.forEach((element) => {
      newArray.push(element * value);
    });

    return newArray;
  };

  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = pureMultiply(numbers, 2);

  // Мутація вихідних даних не відбулася
  console.log(numbers); // [1, 2, 3, 4, 5]
  // Функція повернула новий масив зі зміненими даними
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
}

//Task
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
{
  function changeEven(numbers, value) {
    const newArray = [];
    numbers.forEach((number) => {
      if (number % 2 === 0) {
        newArray.push(number + value);
      } else {
        newArray.push(number);
      }
    });
    return newArray;
  }

  console.log(changeEven([1, 2, 3, 4, 5], 10)); // [ 12, 8, 3, 7, 4, 6 ]
  console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [ 12, 8, 3, 7, 4, 6 ]
  console.log(changeEven([17, 24, 68, 31, 42], 100)); // [ 17, 24, 68, 31, 42 ]
  console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [ 144, 13, 81, 92, 36, 54 ]
}

//#endregion

//#region Перебираючі методи
// У JavaScript є методи масивів, які прийшли з функціональних мов. Більшість із перебираючих методів масивів — це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.
// Усі перебираючі методи масивів мають схожий синтаксис. На вихідному масиві array викликається перебираючий метод method , у який аргументом передається колбек-функція callback.

// У більшості методів колбек-функції, які є їхнім аргументом, отримують три наступні параметри:
// першим параметром буде значення поточного елемента масиву currentValue
// другим параметром буде індекс поточного елемента масиву index
// третім параметром буде посилання на сам вихідний масив array

// array.method((item, idx, arr) => {  логіка, яка буде виконуватися на кожній ітерації});

// Усі параметри, окрім значення поточного елемента масиву item, необов'язкові. Назви параметрів можуть бути будь-які, головне, щоб вони були зрозумілі тобі та іншим розробникам.

//#endregion

//#region Метод map()

// Більшість перебираючих методів масиву — це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.

// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.

//Поелементно перебирає оригінальний масив
//Не змінює оригінальний масив
//Результат роботи колбек-функції записується в новий масив
//Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований

// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.
{
  const planets = ["Earth", "Mars", "Venus", "Jupiter"];

  const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
  console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

  const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
  console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

  // Оригінальний масив не змінився
  console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
}

//Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.

{
  //Task
  // В масиві planets зберігаються назви планет. Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets. Обов'язково використовуй метод map().

  const planets = ["Earth", "Mars", "Venus", "Jupiter"];
  console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

  const planetsLengths = planets.map((planet) => planet.length);
  console.log(planetsLengths); // [5, 4, 5, 6]
}

//#endregion

//#region Масив об'єктів
// Ми вже знаємо, що типове завдання — це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

{
  const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];

  const names = students.map((student) => student.name);
  console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
}

//Використовуючи метод map(), можна перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.

{
  //Task
  // Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.

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
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];

  const titles = books.map((book) => book.title);
  console.log(titles);
}
//#endregion

//#region Метод flatMap()
// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити».

{
  // У масиві students зберігається колекція студентів зі списком предметів, які відвідує студент у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що навіть повторюваних.

  const students = [
    { name: "Mango", courses: ["mathematics", "physics"] },
    { name: "Poly", courses: ["science", "mathematics"] },
    { name: "Kiwi", courses: ["physics", "biology"] },
  ];

  const mappedCourses = students.map((student) => student.courses);
  console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

  const flattenedCourses = students.flatMap((student) => student.courses);
  console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
}

//Метод flatMap викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив. Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений (плоский) масив і є результатом роботи flatMap().

{
  //Task
  // Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, значенням якої є масив жанрів. Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів усіх книг (властивість genres) з масиву books.

  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];

  const genres = books.flatMap((book) => book.genres);
  console.log(genres); // ["adventure", "history", "fiction", "horror", "mysticism"]
}

{
  //Task 2
  // А тепер давай розглянемо задачу «Пошти користувачів» ?
  //Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
  {
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        skills: ["non", "amet", "ipsum"],
        gender: "male",
        age: 38,
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        skills: ["lorem", "veniam", "culpa"],
        gender: "female",
        age: 39,
      },
    ];
  }

  //Доповни стрілочну функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

  const getUserEmails = (users) => {
    return users.map((user) => user.email);
  };

  console.log(
    getUserEmails([
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        skills: ["non", "amet", "ipsum"],
        gender: "male",
        age: 38,
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        skills: ["lorem", "veniam", "culpa"],
        gender: "female",
        age: 39,
      },
    ])
  );
}
//#endregion
