//#region Метод join()
// У масивів є вбудовані методи, які дозволяють виконувати зручні операції для роботи з елементами масиву. Методи масиву дозволяють додавати, видаляти, змінювати та виконувати інші операції над елементами масиву.

//Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
{
  const words = ["JavaScript", "is", "amazing"];
  console.log(words.join("")); // 'JavaScriptisamazing'
  console.log(words.join(" ")); // 'JavaScript is amazing'
  console.log(words.join("-")); // 'JavaScript-is-amazing'
}

//Приклад-функція
{
  function transformString(string) {
    const words = string.split("_");
    return words.join("-");
  }

  console.log(transformString("user_age")); // "user-age"
  console.log(transformString("price_per_droid")); // "price-per-droid"
  console.log(transformString("user_is_not_admin")); // "user-is-not-admin"
}

//Приклад задача
//Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.
{
  function getLength(array) {
    const string = array.join("");
    return string.length - 1;
  }

  console.log(getLength(["Mango", "hurries", "to", "the", "train"])); //21
  console.log(getLength(["M", "a", "n", "g", "o"])); //4
  console.log(getLength(["top", "picks", "for", "you"])); //13
}
{
  function getLength(array) {
    //array-параметр функції
    const string = array.join(""); //string-назва змінної
    return string;
  }

  console.log(getLength(["Mango", "hurries", "to", "the", "train"])); //Mangohurriestothetrain
  console.log(getLength(["M", "a", "n", "g", "o"])); //Mango
  console.log(getLength(["top", "picks", "for", "you"])); //toppicksforyou
}

//#endregion

//#region Метод split()
// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter). Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.
{
  const name = "Mango";
  const letters = name.split("");
  console.log(letters); // ["M", "a", "n", "g", "o"]

  const message = "JavaScript essentials";
  const words = message.split(" ");
  console.log(words); // ["JavaScript", "essentials"]

  const slug = "amazing-french-recipes";
  const slugParts = slug.split("-");
  console.log(slugParts); // ["amazing", "french", "recipes"]
}

//Приклад-функція
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).
// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

{
  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    return words.length * pricePerWord;
  }

  console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
  console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
  console.log(calculateEngravingPrice("JavaScript is in my blood", 40)); // 200
}
//#endregion

//#region
