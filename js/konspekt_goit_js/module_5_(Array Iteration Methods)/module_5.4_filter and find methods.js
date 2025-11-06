//Методи filter і find

//#region Метод filter()
// Метод filter(callback) використовується для єдиної операції — фільтрації масиву. Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції за певним критерієм

//Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає новий масив.
// Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
// Якщо колбек повернув true, елемент додається в масив, що повертається.
// Якщо колбек повернув false, елемент не додається в масив, що повертається.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.

{
  const values = [51, -3, 27, 21, -68, 42, -37];

  const positiveValues = values.filter((value) => value >= 0);
  console.log(positiveValues); // [51, 27, 21, 42]
  // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

  const negativeValues = values.filter((value) => value < 0);
  console.log(negativeValues); // [-3, -68, -37]
  // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

  const bigValues = values.filter((value) => value > 1000);
  console.log(bigValues); // []
  // до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

  console.log(values); // [51, -3, 27, 21, -68, 42, -37]
  // Оригінальний масив values не змінився
}

//Отже, метод filter викликає колбек-функцію для кожного елемента вихідного масиву. Якщо результат її виконання true, поточний елемент додається в новий масив.

//Task
// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

{
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);

  console.log(evenNumbers); // [24, 82, 36, 18, 52]
  console.log(oddNumbers); // [17, 61, 47, 73]
}

//#endregion

//#region Метод filter() на масиві об'єктів
// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку утворюється новий масив відфільтрованих об'єктів.

// Розгляньмо приклад, де є масив студентів з балами за тест. Необхідно відфільтрувати студентів, які мають:
//високі бали (від 80 (включно)),
//низькі бали (нижче 50),
//середні бали (від 50 (включно) до 80).

{
  const LOW_SCORE = 50;
  const HIGH_SCORE = 80;
  const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];

  const best = students.filter((student) => student.score >= HIGH_SCORE);
  console.log(best); // Масив об'єктів з іменами Mango і Kiwi

  const worst = students.filter((student) => student.score < LOW_SCORE);
  console.log(worst); // Масив з одним об'єктом Ajax

  const average = students.filter(
    (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
  );
  console.log(average); // Масив об'єктів з іменами Poly і Houston
}

{
  //Task
  // Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод filter(), доповни код таким чином, щоб:
  // У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
  // У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

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

  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";

  const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
  console.log(topRatedBooks); //
  const booksByAuthor = books.filter((book) => book.author === AUTHOR);
  console.log(booksByAuthor); //  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 }
}

{
  //Task
  // А тепер давай розглянемо задачу «Пошук за кольором очей» ?
  // Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
  {
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
      },
    ];
  }

  //Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням другого параметра color.

  const getUsersWithEyeColor = (users, color) => {
    return users.filter((user) => user.eyeColor === color);
  };

  console.log(
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
      },
    ],
    " blue"
  ); //
}

{
  //Task
  //А тепер давай розглянемо задачу ?
  // Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
  {
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
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
        gender: "female",
        age: 39,
      },
    ];
  }

  //Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб повернути масив користувачів, вік (збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.
  //Поради
  // Використай метод filter() для створення нового масиву, в якому зберігаються тільки елементи, які задовольняють певну умову.
  //Використай оператори >= (більше або дорівнює) та <= (менше або дорівнює), щоб відфільтрувати користувачів, вік яких точно потрапляє у діапазон між мінімальним minAge та максимальним maxAge значеннями.

  const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter((user) => user.age >= minAge && user.age <= maxAge); // && логічне "і" ВАЖЛИВО!!!!
  };

  console.log(
    getUsersWithAge(
      [
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
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
          gender: "female",
          age: 39,
        },
      ],
      20,
      30
    )
  );

  console.log(
    getUsersWithAge(
      [
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
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
          gender: "female",
          age: 39,
        },
      ],
      30,
      40
    )
  );

  console.log(
    getUsersWithAge(
      [
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
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
          gender: "female",
          age: 39,
        },
      ],
      80,
      100
    )
  );
}
//#endregion

//#region Метод find()

// Ти вже знаєш, що метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову.
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу.!!!

//Не змінює оригінальний масив
//Поелементно перебирає оригінальний масив
//Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true
//Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined

// Метод find() використовується для одного завдання — пошуку першого елемента, який задовольняє умову. Наприклад, пошук користувача за поштою, автомобіля — за серійним номером, книги — за назвою тощо.

{
  const colorPickerOptions = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
  ];

  const color = colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
  const color2 = colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
  const color3 = colorPickerOptions.find((option) => option.label === "white"); // undefined

  console.log(color); // { label: 'blue', color: '#2196F3' }
  console.log(color2); // { label: "pink", color: "#E91E63" }
  console.log(color3); // undefined
}

{
  //Task
  // Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод find(), доповни код таким чином, щоб:
  // У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
  // У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
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
      { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    ];
    const BOOK_TITLE = "The Tell-Tale Heart";
    const AUTHOR = "Robert Sheckley";

    const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
    const bookByAuthor = books.find((book) => book.author === AUTHOR);

    console.log(bookWithTitle); // { title: 'The Tell-Tale Heart', author: 'Robert Sheckley', rating: 8.51 }
    console.log(bookByAuthor); // { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51 }
  }
}

{
  //Task
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
        gender: "male",
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
      },
    ];
  }

  //Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням другого параметра email.
  {
    const getUserWithEmail = (users, email) => {
      return users.find((user) => user.email === email);
    };

    console.log(
      getUserWithEmail(
        [
          {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
          },
          {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
          },
          {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
          },
          {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
          },
          {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
          },
          {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
          },
          {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
          },
        ],
        "shereeanthony@kog.com"
      )
    ); // {об'єкт користувача Sheree Anthony}
    console.log(
      getUserWithEmail(
        [
          {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
          },
          {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
          },
          {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
          },
          {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
          },
          {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
          },
          {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
          },
          {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
          },
        ],
        "moorehensley@indexia.com"
      )
    ); // {об'єкт користувача Moore Hensley}
    console.log(
      getUserWithEmail(
        [
          {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
          },
          {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
          },
          {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
          },
          {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
          },
          {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
          },
          {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
          },
          {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
          },
        ],
        "blackburndotson@furnigeer.com"
      )
    ); // {об'єкт користувача Blackburn Dotson}
  }
}

//#endregion
