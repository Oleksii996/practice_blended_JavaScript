//#region Основи функцій (Basics of Functions)

// Оголошення функції
{
  function doStuff() {
    // Тіло функції
    console.log("Log inside multiply function");
  }
  // Виклики функції multiply
  doStuff(); // 'Log inside multiply function'
  doStuff(); // 'Log inside multiply function'
  doStuff(); // 'Log inside multiply function'
}

// Оголошення параметрів x, y, z
{
  function multiply(x, y, z) {
    console.log(`Result: ${x * y * z}`);
  }
  multiply(2, 3, 5); // "Result: 30"
  multiply(4, 8, 12); // "Result: 384"
  multiply(17, 6, 25); // "Result: 2550"
}
{
  function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
  }
  add(15, 27, 10); // "Addition result equals 52"
  add(10, 20, 30); // "Addition result equals 60"
  add(5, 10, 15); // "Addition result equals 30"
}

//returning a value (повернення значення)
{
  function multiply(x, y, z) {
    const product = x * y * z;
    // Повертаємо результат виразу множення
    return product;
  }
  // Результат роботи функції можна зберегти у змінну
  const result = multiply(2, 3, 5);
  console.log(result); // 30
}
{
  // Або вивести напряму
  function multiply(x, y, z) {
    return x * y * z;
  }
  const result = multiply(2, 3, 5);
  console.log(result); // 30
}
{
  //При використанні оператора return всі інструкції, які йдуть на рядках після нього, в тілі функції не виконуються, оскільки виконання функції припиняється відразу після зустрічі оператора return.
  function multiply(x, y, z) {
    console.log("The code before return is executed as usual");
    return x * y * z;
    console.log("This code is never executed because it is after return");
  }
  console.log(multiply(2, 3, 5)); // 30
}

//Порядок виконання коду (Execution Order)
{
  function multiply(x, y, z) {
    console.log(`Result: ${x * y * z}`);
  }

  console.log("Log before multiply execution");
  multiply(2, 3, 5); // "Result: 30"
  console.log("Log after multiply execution");
}
//Послідовність логів у консолі буде такою:
// "Log before multiply execution";
// "Result: 30";
// "Log after multiply execution";

//Область видимості функції (Function Scope)
// Глобальна змінна
const value = "I'm a global variable";
{
  function foo() {
    // Можна звернутися до глобальної змінної
    console.log(value); // "I'm a global variable"
  }
}
foo();
// Можна звернутися до глобальної змінної
console.log(value); // "I'm a global variable"

function foo() {
  // Локальна змінна
  const value = "I'm a local variable"; // Можна звернутися до локальної змінної
  console.log(value); // "I'm a local variable"
}
foo();
console.log(value); // ReferenceError: value is not defined // Помилка: локальну змінну не видно за межами функції;

//#endregion
