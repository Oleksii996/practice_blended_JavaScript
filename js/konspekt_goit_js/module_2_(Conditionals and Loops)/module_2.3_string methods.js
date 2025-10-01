//Методи рядків (String Methods)
//Методи рядків - це вбудовані функції, які можна викликати на рядках (String) для виконання певних операцій з ними.

//Властивості //length - Властивість length повертає кількість символів у рядку.
{
  const message = "JavaScript is awesome";
  console.log(message.length); // 21
}

//Методи рядків
//#region Метод slice() використовується для отримання підрядка з рядка. Перший аргумент - це індекс початку підрядка, а другий аргумент (необов'язковий) - це індекс кінця підрядка (не включно).
{
  const fullName = "Jacob Mercer";
  console.log(fullName.slice(0, 4)); // 'Jaco'
  console.log(fullName.slice(3, 9)); // 'ob Mer'
  console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
}
{
  const fullName = "Jacob Mercer";
  console.log(fullName.slice(1)); // 'acob Mercer'
  console.log(fullName.slice(3)); // 'ob Mercer'
}
{
  const fullName = "Jacob Mercer";
  console.log(fullName.slice()); // 'Jacob Mercer'
}
//Результат виклику методу slice() можна зберігати в змінній для подальшого використання.
{
  const fullName = "Jacob Mercer";
  const firstName = fullName.slice(0, 5);
  const lastName = fullName.slice(6);
  console.log(fullName); // "Jacob Mercer"
  console.log(firstName); // "Jacob"
  console.log(lastName); // "Mercer"
}
//Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію).
{
  function getSubstring(string, length) {
    return string.slice(0, length);
  }
  console.log(getSubstring("Hello world", 3)); // "Hel"
  console.log(getSubstring("Hello world", 6)); // "Hello "
  console.log(getSubstring("Hello world", 8)); // "Hello wo"
  console.log(getSubstring("Hello world", 11)); // "Hello world"
}
//toLowerCase() - Метод toLowerCase() повертає новий рядок, у якому всі символи оригінального рядка перетворені до нижнього регістру.
{
  const message = "JavaScript is AWESOME";
  console.log(message.toLowerCase()); // "javascript is awesome"
}
//#endregion

//#region Методи toLowerCase() і toUpperCase()
//Метод toLowerCase() повертає новий рядок, у якому всі символи вихідного рядка перетворені в нижній регістр.
{
  const message = "Welcome to Bahamas!";
  console.log(message.toLowerCase()); // "welcome to bahamas!"
  console.log(message); // "Welcome to Bahamas!"
}
//Метод toUpperCase() повертає новий рядок, у якому всі символи вихідного рядка перетворені у верхній регістр.
{
  const message = "Welcome to Bahamas!";
  console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
  console.log(message); // "Welcome to Bahamas!"
}
//Приклад
{
  const brandName = "samsung";
  const userInput = "saMsUng";
  const lowercaseInput = userInput.toLowerCase();

  console.log(brandName); // 'samsung'
  console.log(userInput); // 'saMsUng'
  console.log(userInput === brandName); // false
  console.log(lowercaseInput); // 'samsung'
  console.log(lowercaseInput === brandName); // true
}
//Приклад функція
{
  function normalizeInput(input, to) {
    if (to === "upper") {
      return input.toUpperCase();
    }
    if (to === "lower") {
      return input.toLowerCase();
    }
  }
  console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam"
  console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM"
  console.log(normalizeInput("This ISN'T SpaM")); // undefined (бо не було передано другий аргумент)
}
//#endregion

//#region Метод includes() - використовується для перевірки, чи містить рядок певну підрядок. Повертає true або false.
// Метод рядків includes() використовується для перевірки наявності підрядка у рядку.
{
  const username = "Jacob Mercer";

  console.log(username.includes("Jacob")); // true
  console.log(username.includes("John")); // false
  console.log(username.includes("Mercer")); // true
  console.log(username.includes("Doe")); // false
}
//Регістр символів у рядку й підрядку має значення. Літера a, наприклад, не дорівнює літері A.
{
  const username = "Jacob Mercer";

  console.log(username.includes("Jacob")); // true
  console.log(username.includes("jacob")); // false
  console.log(username.includes("Mercer")); // true
  console.log(username.includes("mercer")); // false
}
//Метод includes() корисний, коли нам необхідно виконати зазначені дії за умови, коли рядок містить певний підрядок.
{
  const message = "Please buy our stuff!";
  const hasSpam = message.includes("buy");

  if (hasSpam) {
    console.log("Warning: This message contains forbidden words."); //спрацює цей блок
  } else {
    console.log("You can safely open this message."); //не спрацює
  }
}
//Приклад функція
{
  function checkForName(fullName, firstName) {
    return fullName.toLowerCase().includes(firstName.toLowerCase());
  }
  console.log(checkForName("Jason Neis", "Jason")); // true
  console.log(checkForName("Jason Neis", "jAsOn")); // true
  console.log(checkForName("Jason Neis", "Jacob")); // false
  console.log(checkForName("Jason Neis", "Caty")); // true
}
//#endregion

//#region Метод startsWith() - використовується для перевірки, чи починається рядок з певного підрядка. Повертає true або false.
{
  const str = "Hello, world!";

  console.log(str.startsWith("Hello")); // true
  console.log(str.startsWith("hello")); // false (метод чутливий до регістру)
}
//#endregion

//#region Метод endsWith() - використовується для перевірки, чи закінчується рядок певним підрядком. Повертає true або false.
{
  const str = "Hello, world!";

  console.log(str.endsWith("world!")); // true
  console.log(str.endsWith("World!")); // false (метод чутливий до регістру)
}
//Приклад функція
{
  function checkFileExtension(fileName, ext) {
    if (fileName.endsWith(ext)) {
      return "File extension matches";
    } else {
      return "File extension does not match";
    }
  }
  console.log(checkFileExtension("styles.css", ".css")); // "File extension matches"
  console.log(checkFileExtension("index.html", ".css")); // "File extension does not match"
  console.log(checkFileExtension("script.js", ".js")); // "File extension matches"
  console.log(checkFileExtension("image.png", ".jpg")); // "File extension does not match"
  console.log(checkFileExtension("image.png", "png")); // "File extension matches"
}
//#endregion

//#region Метод indexOf() - використовується для пошуку підрядка в рядку. Повертає індекс першого входження підрядка або -1, якщо підрядок не знайдено.
{
  const message = "Welcome to Bahamas!";
  const index = message.indexOf("to");
  console.log(index); // 8
}
//Якщо підрядок не знайдено, метод indexOf() поверне -1:
{
  const message = "Welcome to Bahamas!";
  const index = message.indexOf("hello");
  console.log(index); // -1
}

//Приклад функція
{
  function getFileName(file) {
    const dotIndex = file.indexOf(".");

    if (dotIndex === -1) {
      return file; // розширення відсутнє
    } else {
      return file.slice(0, dotIndex); // обрізаємо розширення
    }
  }
  // Приклад викликів функції
  console.log(getFileName("styles.css")); // "styles"
  console.log(getFileName("app.js")); // "app"
  console.log(getFileName("styles")); // "styles"
  console.log(getFileName("app")); // "app"
  console.log(getFileName("archive.tar.gz")); // "archive"
  console.log(getFileName("photo")); // "photo"
}
//#endregion

//#region Метод trim() - використовується для видалення пробілів з початку і кінця рядка.
{
  const input = " JavaScript is awesome!    ";
  const trimmedInput = input.trim();
  console.log(trimmedInput); // "JavaScript is awesome!"
  console.log(input); // " JavaScript is awesome!    "
}
//Приклад функція
{
  function createFileName(name, ext) {
    return `${name.trim()}.${ext}`;
  }
  console.log(createFileName("  my file  ", "txt")); // "my file.txt"
  console.log(createFileName("  data  ", "csv")); // "data.csv"
  console.log(createFileName("  image  ", "png")); // "image.png"
}
//#endregion
