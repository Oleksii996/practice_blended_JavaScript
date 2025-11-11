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
// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність CSS-класу в елемента, у властивості classList зберігається об'єкт із методами для роботи з CSS-класами елемента.

{
  // Властивість classList — це спеціальний тип об’єкта, який подібний до масиву. Зверни увагу, що він схожий, але не є нативним JavaScript-масивом, який ми вивчали раніше. Він зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value.
  // властивість value містить точне значення атрибута class
  // властивість length — кількість класів в елемента

  const link = document.querySelector(".is-active");
  console.log(link.classList);
  // ["link", "is-active", length: 2, value: "link is-active"]
}

{
  //Метод classList.contains(className)
  // Метод очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента.
  // Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).

  const link = document.querySelector(".is-active");

  const haswrongActiveClass = link.classList.contains("is-active");
  console.log(haswrongActiveClass); // true
  const hasActiveClass = link.classList.contains("are-active");
  console.log(hasActiveClass); // false
}

{
  //Метод classList.add(className)
  // Метод очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.

  const link = document.querySelector(".is-active");
  link.classList.add("special");
  console.log(link.classList);
  // ["link", "is-active", "special", length: 3, value: "link is-active special"]

  //Можна додавати більше одного класу, вказавши кілька аргументів через кому.
  link.classList.add("special", "active");
  console.log(link.classList);
  // ["link", "is-active", "special", "active", length: 4, value: "link is-active special active"]
}

{
  //Метод classList.remove(className)
  // Метод очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента.

  const link = document.querySelector(".is-active");

  link.classList.remove("special");
  console.log(link.classList);
  // ["link", "is-active", "active" length: 3, value: "link is-active"]

  //Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не видалиться.
}

{
  //Метод classList.toggle(className)
  // Метод працює як перемикач:
  // якщо клас className відсутній, то додає його в кінець списку класів
  // і навпаки, якщо клас className присутній — видаляє його

  const link = document.querySelector(".is-active");

  link.classList.toggle("link");
  console.log(link.classList);
  // ["is-active", "active", length: 2, value: "is-active link"]

  link.classList.toggle("special");
  console.log(link.classList);
  // ["is-active", "active", "special", length: 3, value: "is-active link special"]
}

{
  //Метод classList.replace(oldClassName, newClassName)
  // Метод очікує 2 аргументи рядка (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName.

  const link = document.querySelector(".is-active");

  link.classList.replace("special", "regular");
  console.log(link.classList);
  // ["is-active", "active", "regular", length: 3, value: "is-active link regular"]
}
//#endregion

//#region Властивість style
{
}
//#endregion
