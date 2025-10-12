//#region Cкорочені оператори присвоєння (Shorthand Assignment Operators)
//Ось приклад, який наочно показує, як працюють усі скорочені оператори присвоєння (+=, -=, *=, /=):
{
  let number = 10; //змінна

  console.log("Початкове значення:", number);

  // Додаємо
  number += 5; // те саме, що number = number + 5
  console.log("Після += 5:", number); // 15

  // Віднімаємо
  number -= 3; // те саме, що number = number - 3
  console.log("Після -= 3:", number); // 12

  // Множимо
  number *= 2; // те саме, що number = number * 2
  console.log("Після *= 2:", number); // 24

  // Ділимо
  number /= 4; // те саме, що number = number / 4
  console.log("Після /= 4:", number); // 6
}

{
  let sum = 0; // створюємо змінну, куди будемо накопичувати результат

  for (let i = 1; i <= 5; i += 1) {
    console.log(`Перед додаванням: sum = ${sum}, i = ${i}`);
    sum += i; // додаємо поточне i до суми
    console.log(`Після додавання: sum = ${sum}`);
  }

  console.log(`Загальний результат: ${sum}`); // 15 (1 + 2 + 3 + 4 + 5)
}

//#endregion

//Задача 1. Сума елементів масиву
{
  function calculateSum(numbers) {
    let sum = 0; // створюємо змінну, куди будемо накопичувати результат
    for (let i = 0; i < numbers.length; i += 1) {
      sum += numbers[i]; // додаємо поточне i до суми
    }
    return sum;
  }

  console.log(calculateSum([1, 2, 3, 4, 5])); // 15
  console.log(calculateSum([1, 500, 5155])); // 5160
}

//Задача 2. Сума парних чисел
{
  function sumEvenNumbers(numbers) {
    let sum = 0; // створюємо змінну, куди будемо накопичувати результат
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        // перевіряємо, чи число парне
        sum += numbers[i]; // додаємо тільки парні числа
      }
    }
    return sum;
  }

  console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
  console.log(sumEvenNumbers([1, 500, 400, 5155]));
}
