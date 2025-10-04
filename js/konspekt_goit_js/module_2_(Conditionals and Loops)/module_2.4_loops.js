//Цикли
//#region Цикл while - використовується для повторення блоку коду, поки умова є істинною.
// Цикл while — це цикл з передумовою, тобто він виконується доки істинна певна умова, зазначена перед його початком. Цю умову перевіряють до виконання тіла циклу, тому тіло може бути не виконано жодного разу, якщо умова від самого початку хибна.
{
  let count = 0;

  while (count < 10) {
    console.log(`Count: ${count}`); // Count: 0, Count: 1, ..., Count: 9
    count += 1;
  }
}

//Задача: Реєстрація у готелі
// Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.
// Змінна maxClients зберігає загальну кількість номерів у готелі.
// Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість клієнтів не дорівнюватиме максимально допустимій.
{
  let clientCounter = 18;
  const maxClients = 25;

  while (clientCounter < maxClients) {
    console.log(clientCounter); // 18, 19, 20, 21, 22, 23, 24
    clientCounter += 1; // Збільшуємо лічильник клієнтів на одиницю на кожній ітерації
  }
}

//Якби нам потрібно було написати функцію:
{
  function countClients(clientCounter, maxClients) {
    let counter = clientCounter; // створюємо локальну змінну

    while (counter < maxClients) {
      console.log(counter); // 18, 19, 20, 21, 22, 23, 24
      counter += 1; // Збільшуємо лічильник клієнтів на одиницю на кожній ітерації
    }
  }
  countClients(18, 25);
}

//Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
{
  function calculateTotal(number) {
    let total = 0;
    let i = 1;

    while (i <= number) {
      total += i;
      i++;
    }
    return total;
  }

  console.log(calculateTotal(3)); // 6
  console.log(calculateTotal(7)); // 28
  console.log(calculateTotal(18)); // 171
  console.log(calculateTotal(24)); // 300
  console.log(calculateTotal(35)); // 630
}
//#endregion

//#region Цикл do…while - використовується для повторення блоку коду, поки умова є істинною.
//Цикли while і do...while працюють схожим чином, але мають одну ключову відмінність. Під час використання циклу do...while код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку.

{
  let count = 0;

  do {
    console.log(`Count: ${count}`); // Count: 0, Count: 1, ..., Count: 9
    count += 1;
  } while (count < 5); // умова перевіряється після виконання тіла циклу
}

//#endregion

//#region Цикл for - використовується для повторення блоку коду, поки умова є істинною.
//Ініціалізація — виконується один раз перед початком циклу. Тут оголошується змінна-лічильник і вказується її початкове значення.
// Умова — це вираз, який оцінюється перед кожною ітерацією (повторенням) циклу. Якщо умова перетворюється на**true**, то виконується тіло циклу. Якщо умова перетворюється на false, то цикл завершується.
//Пост-вираз — це вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови. Використовується для оновлення значення змінної-лічильника.
//Тіло циклу — це блок коду, який буде виконуватися на кожній ітерації циклу, якщо умова перетворюється на true.

//Розглянемо приклад:
{
  for (let i = 0; i <= 32; i += 5) {
    console.log(i); // 0, 5, 10, 15, 20, 25, 30
  }
}
{
  for (let i = 20; i >= 0; i -= 5) {
    console.log(i); // 20, 15, 10, 5, 0
  }
}

//Напишемо фукнцію яка підсумовує всі числа від 0 до заданого числа і повертає результат:
{
  function sumUpTo(number) {
    let sum = 0;

    for (let i = 0; i <= number; i += 1) {
      sum += i; // на кожній ітерації додаємо поточне значення лічильника до змінної sum
    }

    return sum; // повертаємо значення змінної sum
  }

  console.log(sumUpTo(5)); // 15
  console.log(sumUpTo(10)); // 55
  console.log(sumUpTo(0)); // 0
}

//Приклад-задача
//Функція calculateTotal(number) приймає ціле число (параметр number)
// Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
{
  function calculateTotal(number) {
    let sum = 0;

    for (let i = 0; i <= number; i += 1) {
      sum += i; // на кожній ітерації додаємо поточне значення лічильника до змінної sum
    }

    return sum; // повертаємо значення змінної sum
  }

  console.log(calculateTotal(1)); // 1
  console.log(calculateTotal(0)); // 0
  console.log(calculateTotal(7)); // 28
  console.log(calculateTotal(18)); // 171
  console.log(calculateTotal(24)); // 300
}
//#endregion

//#region Інкремент і декремент

//Інкремент (increment) - це операція збільшення значення змінної на одиницю. В JavaScript для цього використовується оператор ++.
//Префіксний інкремент (++value) спочатку збільшує значення змінної, а потім використовує нове значення у виразі.
{
  let x = 5;
  const y = ++x;
  console.log(x); // 6
  console.log(y); // 6
}
//Постфіксний інкремент (value++) спочатку використовує поточне значення змінної у виразі, а потім виконує збільшення значення.
{
  let x = 5;
  const y = x++;
  console.log(x); // 6
  console.log(y); // 5
}

//Декремент (decrement) - це операція зменшення значення змінної на одиницю. В JavaScript для цього використовується оператор --.
//Префіксний декремент (--value) спочатку зменшує значення змінної, а потім використовує нове значення у виразі.
{
  let x = 5;
  const y = --x;
  console.log(x); // 4
  console.log(y); // 4
}
//Постфіксний декремент (value--) спочатку використовує поточне значення змінної у виразі, а потім виконує зменшення значення.
{
  let x = 5;
  const y = x--;
  console.log(x); // 4
  console.log(y); // 5
}

//Приклад-задача
// Функція calculateEvenTotal(number) приймає ціле число (параметр number).
// Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

//Рішення 1
{
  function calculateEvenTotal(number) {
    let sum = 0;

    for (let i = 2; i <= number; i += 2) {
      // проходимо від 0 до number
      sum += i; // на кожній ітерації додаємо поточне значення лічильника до змінної sum
    }

    return sum; // повертаємо значення змінної sum}
  }
  console.log(calculateEvenTotal(1)); // 0
  console.log(calculateEvenTotal(3)); // 2
  console.log(calculateEvenTotal(7)); // 12
  console.log(calculateEvenTotal(18)); // 90
  console.log(calculateEvenTotal(27)); // 182
}

// Рішення 2
{
  function calculateEvenTotal(number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        // якщо число парне
        sum += i;
      }
    }

    return sum;
  }
  console.log(calculateEvenTotal(1)); // 0
  console.log(calculateEvenTotal(3)); // 2
  console.log(calculateEvenTotal(7)); // 12
  console.log(calculateEvenTotal(18)); // 90
  console.log(calculateEvenTotal(27)); // 182
}
//#endregion

//#region Оператор break
// У цьому прикладі цикл for мав би виконуватися, доки значення змінної i менше 10. Але в тілі циклу є умова if (i === 5), яка перевіряє, чи дорівнює значення i числу 5. Коли ця умова стає істинною, тіло if виконується і застосовується оператор break, і виконання циклу припиняється. Таким чином, у консоль будуть виведені числа від 0 до 5 (включно), а цикл завершиться.

{
  for (let i = 0; i < 10; i += 1) {
    console.log(i); // Лог виконається, поки i менше 10

    if (i === 5) {
      // коли i дорівнює 5
      console.log("Met the number 5, interrupt the execution of the cycle");
      break;
    }
  }

  console.log("Log after cycle"); // Цей лог виконається після завершення циклу
}

//Приклад-функція
{
  const start = 6;
  const end = 17;
  let number;

  for (let i = start; i <= end; i += 1) {
    if (i % 5 === 0) {
      // перевірка ділення без остачі
      number = i;

      break; // перериваємо цикл після знаходження
    }
  }

  console.log("Result:", number); // 10
  console.log("Log after cycle"); // Цей лог виконається після завершення циклу
}
//#endregion

//#region Оператор break і функції
//Коли оператор break зустрічається всередині циклу, виконання циклу негайно припиняється, і керування передається на наступну інструкцію за циклом, навіть якщо цикл знаходиться всередині функції. Тобто оператор break не припиняє виконання функції, а тільки перериває цикл.
{
  function findNumber(max, target) {
    console.log("Log in the body of the function before the cycle");

    for (let i = 5; i <= max; i += 1) {
      console.log("Current counter value i:", i);

      if (i === target) {
        console.log(`Found the number $ {target}, interrupt the cycle`);
        break;
      }
    }

    console.log("Log in body function after cycle");
  }

  findNumber(10, 6);
  console.log("Log after exiting function");
}

//Для того щоб переривати виконання одразу циклу і функції і повернути результат у зовнішній код, є оператор return.
// У прикладі шукаємо число 6. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.
{
  function findNumber(max, target) {
    console.log("Log in the body of the function before the cycle");

    for (let i = 5; i <= max; i += 1) {
      console.log("Current counter value i:", i);

      if (i === target) {
        console.log(
          `Found the number $ {target}, we make a return, interrupting the loop and function`
        );
        return i;
      }
    }

    // Цей console.log не виконується
    console.log("Log in body function after cycle");
  }

  const result = findNumber(10, 6);
  console.log("Log after exiting function");
  console.log(`Result of function execution ${result}`);
}

//Приклад-функція

{
  function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i += 1) {
      if (i % divisor === 0) {
        // перевірка ділення без остачі
        return i;
      }
    }
  }

  console.log(findNumber(2, 6, 5)); // 5
  console.log(findNumber(8, 17, 3)); // 9
  console.log(findNumber(6, 9, 4)); // 8
  console.log(findNumber(16, 35, 7)); // 21
  console.log(findNumber(42, 76, 10)); // 21
}

//#endregion
