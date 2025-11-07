//Методи every, some і reduce
//#region Метод every()
// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.
// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо всі елементи масиву задовольняють умову
// Повертає false, якщо хоча б один елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає false

{
  // Усі елементи більші або дорівнюють нулю? - так
  [1, 2, 3, 4, 5].every((value) => value >= 0); // true

  // Усі елементи більші або дорівнюють нулю? - ні
  [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
}

//Під час роботи з масивом об'єктів перевіряється значення якоїсь їхньої властивості. Наприклад, перебираючи масив об'єктів товарів, ми можемо перевірити, чи всі товари є в наявності.
{
  const products = [
    { name: "apple", quantity: 2 },
    { name: "orange", quantity: 5 },
    { name: "plum", quantity: 0 },
  ];

  const hasEveryProduct = products.every((product) => product.quantity > 0);
  console.log(hasEveryProduct); // false
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

  //Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.
  {
    const isEveryUserActive = (users) => {
      return users.every((user) => user.isActive);
    };

    console.log(
      isEveryUserActive([
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
      ])
    ); //
  }
}
//#endregion

//#regionМетод some()
// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.
// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо хоча б один елемент масиву задовольняє умову
// Повертає false, якщо жоден елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає true
{
  // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
  [1, 2, 3, 4, 5].some((value) => value >= 0); // true

  // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
  [-7, -20, 3, -10, -14].some((value) => value >= 0); // true

  // Чи є хоча б один елемент, що менший від нуля? - ні
  [1, 2, 3, 4, 5].some((value) => value < 0); // false

  // Чи є хоча б один елемент, що менший від нуля? - так
  [1, 2, 3, -10, 4, 5].some((value) => value < 0); // true
}

//Зверни увагу на відмінність між методом every та методом some: Метод every() перевіряє, чи задовольняють усі елементи умову колбек-функції. Метод some() перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

{
  //Task
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

  //Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність хоча б одного активного користувача (властивість isActive) і повертала true або false.
  {
    const isAnyUserActive = (users) => {
      return users.some((user) => user.isActive);
    };

    console.log(
      isAnyUserActive([
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
      ])
    ); //
  }
}
//#endregion

//#region Метод reduce()
// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату. Трохи складніший за інші методи для засвоєння, але результат вартий того.

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію

// Метод reduce() очікує 2 параметри:
// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Колбек-функція з параметра редьюса очікує в свою чергу чотири параметри. Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:

// 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.
// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.
{
  const total = [2, 7, 3].reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);

  console.log(total); // 12
}

//Розгляньмо детальніше роботу редьюса у прикладі вище:
// Початкове значення акумулятора 0
// перша ітерація колбек-функції 0 + 2 поверне 2
// друга ітерація колбек-функції 2 + 7 поверне 9
// третя ітерація колбек-функції 9 + 3 поверне 1
// Результатом коду вище буде 12.

// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

//🔹 Інші приклади використання:
{
  // Знайти суму цін у масиві об’єктів
  const items = [{ price: 10 }, { price: 20 }, { price: 5 }];
  const total = items.reduce((sum, item) => sum + item.price, 0);
  console.log(total); // 35
}
{
  //Об’єднати всі елементи в рядок
  const words = ["Hello", "world", "!"];
  const sentence = words.reduce((acc, word) => acc + " " + word);
  console.log(sentence); // "Hello world !"
}
{
  //Порахувати кількість повторів
  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
  const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  console.log(count);
  // { apple: 3, banana: 2, orange: 1 }
}

//Task
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().
{
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]

  const totalPlayTime = playtimes.reduce((total, time) => total + time, 0);
  console.log(totalPlayTime); // 2692

  const averagePlayTime = totalPlayTime / playtimes.length;
}
//#endregion

//#region Метод reduce() і масив об'єктів
// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.
{
  const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];

  // Назва акумулятора може бути довільною, це просто параметр функції
  const totalScore = students.reduce((total, student) => {
    return total + student.score;
  }, 0);
  console.log(totalScore); // 377

  const averageScore = totalScore / students.length;
  console.log(averageScore); //67.4

  //У прикладі вище метод reduce() використовується для обчислення суми значень властивості score для всіх об'єктів масиву students.
  // Починаючи зі значення 0, колбек-функція обчислює суму значень властивості score для кожного об'єкта масиву students. Результат (сума) зберігається у змінній totalScore.
  // const averageScore обчислює середнє значення score для всіх об'єктів масиву students, шляхом ділення суми всіх балів на кількість студентів.
}

{
  //Task
  // У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
  // Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

  const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];

  const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
    const average = player.playtime / player.gamesPlayed;
    return acc + average;
  }, 0);

  console.log(totalAveragePlaytimePerGame); //2692, 337, 67.4, 1023
}

{
  //Task
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

  //Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
  {
    const calculateTotalBalance = (users) => {
      return users.reduce((acc, user) => acc + user.balance, 0);
    };

    console.log(
      calculateTotalBalance([
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
      ])
    ); // 15289
  }
}

//#endregion
