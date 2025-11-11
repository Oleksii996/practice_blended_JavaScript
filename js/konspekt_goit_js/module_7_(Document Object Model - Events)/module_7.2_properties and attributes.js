//Властивості та атрибути

//#region Доступ до властивостей
// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів, тобто властивостями DOM-об’єктів.

// Розберемо приклад:
// Якщо в HTML є тег посилання,
// то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на елемент, тобто об'єкт, використовуючи querySelector, і звернутися до його властивості href
{
  const link = document.querySelector(".link");
  console.log(link.href); // "https://goit.global"
}

//Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта значення в HTML, тобто в DOM-дереві, зміниться.
{
  const link = document.querySelector(".link");
  console.log(link.href); // "https://goit.global"
  link.href = "https://neo.goit.global";
  console.log(link.href); // "https://neo.goit.global"
}
//#endregion

//#region Властивість textContent
// Властивість textContent повертає весь текстовий контент усередині елементів (власних і вкладених елементів).
// Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і звертаємося до властивості через крапку.
{
  const el = document.querySelector(".text");
  const nested = document.querySelector(".sub-text");

  console.log(el.textContent); // "Username: Mango"
  console.log(nested.textContent); // "Mango"
}

//Властивість textContent можна як читати, так і змінювати. Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.
{
  const el = document.querySelector(".text");
  console.log(el.textContent); // "Username: Mango"
  el.textContent = "Username: Poly";
  console.log(el.textContent); // "Username: Poly"
}
//#endregion

//#region Властивість classList

//#endregion
