//Створення та видалення елементів

//#region Створення елементів

// DOM API (Document Object Model Application Programming Interface) має широкий функціонал. За його допомогою можна:
// вибирати або змінювати вже існуючі елементи
// видаляти елементи
// створювати нові елементи й додавати їх у документ

{
  //Розглянемо, як створити новий елемент:
  //document.createElement(tagName);
  //створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
  // tagName — це рядок, що вказує тип елемента, який створюється.
  // Елемент створюється в пам'яті, у DOM його ще немає.
}
{
  const heading = document.createElement("h1");

  //Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті. З цього моменту можна звертатися до властивостей цього об’єкта і змінювати їх ще до того, як вставимо цей елемент у DOM.

  heading.classList.add("title");
  heading.textContent = "This is a heading";
  console.log(heading); // <h1 class="title">This is a heading</h1>

  const image = document.createElement("img");
  image.src = "https://picsum.photos/id/11/320/240";
  image.alt = "Nature";
  console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
}
//#endregion

//#region Додавання елементів
// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента elem, для цього існують такі методи.

// elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

// У всіх цих методах el — це елементи або рядки, у будь-якому поєднанні та кількості. Рядки додаються, як текстові вузли.

{
  const list = document.querySelector(".usernames");

  // Adds an item to the end of the list
  const lastItem = document.createElement("li");
  lastItem.textContent = "Poly";
  list.append(lastItem);

  // Adds an item to the beginning of the list
  const firstItem = document.createElement("li");
  firstItem.textContent = "Ajax";
  list.prepend(firstItem);
}
//#endregion

//#region Видалення елементів
// Для того щоб видалити елемент, використовується метод element.remove().
{
  const text = document.querySelector(".text-content");
  text.remove();
}
//#endregion

//#region Властивість innerHTML
// Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.
// Для цього треба використати рядки з тегами і дозволити браузеру зробити всю важку роботу. У такого підходу є свої плюси та мінуси.




//#endregion
