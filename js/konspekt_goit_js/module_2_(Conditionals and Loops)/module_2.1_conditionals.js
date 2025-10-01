//#region Розгалуження - Інструкція if (якщо) - це найпростіший спосіб реалізувати розгалуження коду.
{
  let price = 0;
  const subscription = "pro";

  if (subscription === "pro") {
    price = 100;
  }
  console.log(price); // 100
}
//Якщо умова перетворюється до false, код у фігурних дужках не буде виконуватися і price залишиться рівним 0.
{
  let price = 0;
  const subscription = "free";

  if (subscription === "pro") {
    price = 100;
  }
  console.log(price); // 0
}
//Напишемо функцію яка отримує обраний тарифний план у параметрі subscription та повертає його вартість.
{
  function getPrice(subscription) {
    let price = 0;

    if (subscription === "pro") {
      price = 100;
    }

    return price;
  }
  console.log(getPrice("free")); // 0
  console.log(getPrice("pro")); // 100
}
//#endregion

//#region Інструкція if...else (якщо...інакше) - це розширення інструкції if, яке дозволяє виконувати один блок коду, якщо умова істинна, і інший блок коду, якщо умова хибна.
{
  function checkGrade(grade) {
    if (grade >= 70) {
      return "Satisfactory";
    } else {
      return "Unsatisfactory";
    }
  }
  console.log(checkGrade(40)); // Unsatisfactory
  console.log(checkGrade(75)); // Satisfactory
}

{
  function checkStorage(available, ordered) {
    if (available < ordered) {
      return "Not enough goods in stock!";
    } else {
      return "Order is processed, our manager will contact you";
    }
  }
  console.log(checkStorage(100, 50)); // Order is processed, our manager will contact you
  console.log(checkStorage(100, 130)); // Not enough goods in stock!
  console.log(checkStorage(200, 150)); // Order is processed, our manager will contact you
  console.log(checkStorage(100, 130)); // Not enough goods in stock!
}
//#endregion

//#region Блок else...iF (інакше...якщо) - це розширення інструкції if...else, яке дозволяє перевірити кілька умов послідовно.
{
  function checkStorage(available, ordered) {
    if (ordered === 0) {
      return "There are no products in the order!";
    } else if (ordered > available) {
      return "Your order is too large, there are not enough items in stock!";
    } else {
      return "The order is accepted, our manager will contact you";
    }
  }
  console.log(checkStorage(100, 50)); //  The order is accepted, our manager will contact you
  console.log(checkStorage(100, 130)); // Your order is too large, there are not enough items in stock!
  console.log(checkStorage(70, 0)); // There are no products in the order!
  console.log(checkStorage(200, 20)); // The order is accepted, our manager will contact you
  console.log(checkStorage(200, 250)); // Your order is too large, there are not enough items in stock!
  console.log(checkStorage(150, 0)); // There are no products in the order!
  console.log(checkStorage(80, 80)); // The order is accepted, our manager will contact you
}
//#endregion

//#region Тернарний оператор - це єдиний оператор у JavaScript, який приймає три операнди.
//обчислюється умова condition;
//якщо умова істинна (перетворюється до true), обчислюється вираз після ?;
//якщо умова хибна (перетворюється до false), обчислюється вираз після :;
//значення обчисленого виразу повертається як результат роботи тернарного оператора.

{
  let type;
  const age = 20;

  if (age >= 18) {
    type = "adult";
  } else {
    type = "child";
  }
  console.log(type); // 'adult'
}
// Те саме з використанням тернарного оператора
{
  const age = 20;
  const type = age >= 18 ? "adult" : "child";
  console.log(type); // 'adult'
}

//Другий приклад: знаходження більшого числа із двох з використанням інструкції if...else:
{
  const a = 5;
  const b = 10;
  let biggerNumber;

  if (a > b) {
    biggerNumber = a;
  } else {
    biggerNumber = b;
  }
  console.log(biggerNumber); // 10
}
//Використовуючи тернарний оператор, код вище можна спростити:
{
  const a = 5;
  const b = 10;
  const biggerNumber = a > b ? a : b;
  console.log(biggerNumber); // 10
}

//Ось приклад з фукнцією яка порівнює два числа.
{
  function getBiggerNumber(a, b) {
    return a > b ? a : b;
  }

  console.log(getBiggerNumber(5, 10)); // 10
  console.log(getBiggerNumber(20, 15)); // 20
  console.log(getBiggerNumber(7, 7)); // 7
}
//#endregion

//#region Оператор switch (перемикач) - це інструкція розгалуження, яка перевіряє збіг із кількома варіантами значення змінної.
{
  const fruit = "apple";

  switch (fruit) {
    case "apple":
      console.log("Apple selected"); // якщо fruit дорівнює "apple", буде виконано цей блок
      break;
    case "banana":
      console.log("Banana selected");
      break;
    case "orange":
      console.log("Orange selected");
      break;
    default:
      console.log("The fruit is unknown");
  }
}
//#endregion

//#region Оператор break - використовується для негайного виходу з циклу або інструкції switch.
{
  const day = 3;
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("This is a working day"); // якщо day дорівнює 1, 2, 3, 4 або 5, буде виконано цей блок
      break;
    case 6:
    case 7:
      console.log("It is a day off");
      break;
    default:
      console.log("Invalid");
  }
}

{
  function getSubscriptionPrice(type) {
    switch (type) {
      case "starter":
        return 0;
        break;
      case "professional":
        return 20;
        break;
      case "organization":
        return 50;
        break;
      default:
        return "Invalid subscription type!";
    }
  }
  console.log(getSubscriptionPrice("professional")); // 20
  console.log(getSubscriptionPrice("organization")); // 50
  console.log(getSubscriptionPrice("starter")); // 0
  console.log(getSubscriptionPrice("random")); // Invalid subscription type!
  console.log(getSubscriptionPrice("premium")); // Invalid subscription type!
}
//#endregion

//#region Блокова область видимості
{
  const globalVar = "Global";
  console.log(globalVar); //Global  Доступ до globalVar із глобальної області видимості
  // Немає доступу до aVar, bVar і cVar
}

{
  if (true) {
    const aVar = "A";
    console.log(globalVar); // Доступ до globalVariable з блоку A
    console.log(aVar); // Доступ до aVar з блоку A
    // Немає доступу до bVar і cVar

    if (true) {
      const bVar = "B";
      console.log(globalVar); // Доступ до globalVariable з блоку B
      console.log(aVar); // Доступ до aVar з блоку B
      console.log(bVar); // Доступ до bVar з блоку B
      // Немає доступу до cVar
    }
  }
  console.log(globalVar); // Доступ до globalVar із глобальної області видимості
  // Немає доступу до aVar, bVar і cVar
}

{
  if (true) {
    const cVar = "C";
    console.log(globalVariable); // Доступ до globalVar з блоку C
    console.log(cVar); // Доступ до cVar з блоку C
    // Немає доступу до aVar і bVar
  }
  console.log(globalVar); // Доступ до globalVar із глобальної області видимості
  // Немає доступу до aVar, bVar і cVar
}
//#endregion
