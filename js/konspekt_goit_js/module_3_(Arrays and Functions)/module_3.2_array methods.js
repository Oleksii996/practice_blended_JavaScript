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
}
//#endregion
