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

//#regionМетод filter() на масиві об'єктів
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

//#endregion
