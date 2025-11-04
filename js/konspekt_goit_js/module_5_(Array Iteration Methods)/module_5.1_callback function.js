//Колбек-функції

//#region Функція як значення

{
  // Значення функції (посилання на неї) можна зберігати у змінній або передавати в якості аргументу в іншу функцію. У цьому сенсі функції не відрізняються від чисел, рядків або масивів.
  function greet(name) {
    return `Welcome ${name}!`;
  }

  // Викликаємо функцію greet і виводимо результат у консоль
  console.log(greet("Mango")); // "Welcome Mango!"

  // Виводимо функцію greet у консоль, не викликаючи її
  console.log(greet); // ƒ greet() {return `Welcome ${name}!`}
}

//Task
// Функція makePizza повертає рядок з повідомленням клієнту.
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

{
  function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }

  const result = makePizza();
  const pointer = makePizza;

  console.log(result); // "Your pizza is being prepared, please wait."
  console.log(pointer); // ƒ makePizza() {return "Your pizza is being prepared, please wait."}
}

//#endregion

//#region Колбек-функції

{
  // //Оголосимо дві функції greet і notify, які приймають ім'я користувача і виводять різні повідомлення.
  function greet(name) {
    console.log(`Welcome ${name}!`);
  }

  function notify(name) {
    console.log(`Dear ${name}, your room will be ready in 30 minutes`);
  }
}

{
  //Далі оголосимо ще одну функцію registerGuest, яка прийматиме два параметри.

  function registerGuest(name, callback) {
    console.log(`Registering ${name}!`);
    callback(name);
  }

  //name — ім’я користувача
  // callback — посилання на функцію, яку треба викликати в тілі registerGuest і передати їй ім'я користувача
}

{
  //Тепер використовуємо оголошені функції під час виклику registerGuest.

  function greet(name) {
    console.log(`Welcome ${name}!`);
  }

  function notify(name) {
    console.log(`Dear ${name}, your room will be ready in 30 minutes`);
  }

  function registerGuest(name, callback) {
    console.log(`Registering ${name}!`);
    callback(name);
  }

  registerGuest("Mango", greet); // "Registering Mango!"
  // "Welcome Mango!"

  registerGuest("Mango", notify); // "Registering Mango!"
  // "Dear Mango, your room will be ready in 30 minutes"
}

//Ми передаємо посилання на функцію greet або notify як аргумент, тому вони будуть присвоєні в параметр callback і викликані всередині функції registerGuest за допомогою круглих дужок.

// Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції як аргумент, а та у свою чергу використовує передану функцію.
// У прикладі функції greet і notify — це колбек-функції, тому що ми передаємо їх як аргумент у функцію registerGuest. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// Функція вищого порядку (higher order function) — функція, яка приймає в якості параметрів інші функції або повертає функцію в якості результату.
// У прикладі це функція registerGuest, тому що вона очікує іншу функцію як параметр і викликає її.

{
  //Task
  // Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.
  // Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }

  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }

  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  }

  makeMessage("Royal Grand", makePizza); //"Pizza Royal Grand is being prepared, please wait..."
  makeMessage("Ultracheese", deliverPizza); //"Delivering Ultracheese pizza."
}
//#endregion

//#region Інлайн-колбеки
{
  // Якщо колбек-функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Такі функції називаються інлайн-колбеки. Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.

  function registerGuest(name, callback) {
    console.log(`Registering ${name}!`);
    callback(name);
  }

  // Передаємо інлайн-функцію greet у якості колбека
  registerGuest("Mango", function greet(name) {
    console.log(`Welcome ${name}!`); // "Welcome Mango!"
  });

  // Передаємо інлайн-функцію notify у якості колбека
  registerGuest("Poly", function notify(name) {
    console.log(`Dear ${name}, your room will be ready in 30 minutes`); // "Dear Poly, your room will be ready in 30 minutes"
  });
}

{
  //Task
  // Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.
  // Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.

  function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }

  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}`);
  });

  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}`);
  });
}
//#endregion

//#region Метод forEach(callback)
// Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

// array.forEach(function callback(element, index, array) {Тіло колбек-функції});

//Поелементно перебирає масив array
// Викликає колбек-функцію для кожного елемента масиву
// Повертає undefined, навіть якщо явно задати вираз після return

//Колбек-функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element, його індекс index і власне посилання на вихідний масив array. Зверни увагу, що імена параметрів довільні, але дуже важлива їх послідовність(!). Також не всі параметри обов’язково оголошувати. Якщо тобі потрібен тільки перший параметр element (це найчастіший випадок), то наступні параметри index та array можна не оголошувати.

{
  const numbers = [5, 10, 15, 20, 25];

  // Класичний for
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Index ${i}, value ${numbers[i]}`);
  }

  // Перебираючий метод forEach
  numbers.forEach(function (number, index) {
    console.log(`Index ${index}, value ${number}`);
  });
}

//Єдиний випадок, коли варто використовувати цикли for або for...of для перебирання масиву, — це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.

{
  //Task
  // Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
  // Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;

    orderedItems.forEach(function (orderedItem) {
      totalPrice += orderedItem;
    });

    return totalPrice;
  }

  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
}

{
  //Task
  // Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.
  // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

  {
    function filterArray(numbers, value) {
      const filteredNumbers = [];

      numbers.forEach(function (number) {
        if (number > value) filteredNumbers.push(number);
      });
      return filteredNumbers;
    }
  }

  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
}

//#endregion
