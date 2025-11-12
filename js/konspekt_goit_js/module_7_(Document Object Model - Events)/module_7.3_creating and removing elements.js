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

{
  //Читання

  //Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, — це завжди валідний HTML-код.

  const article = document.querySelector(".article-innerhtml");
  console.log(article.innerHTML);

  const title = document.querySelector(".article-innerhtml .title");
  console.log(title.innerHTML);

  const text = document.querySelector(".article-innerhtml .text");
  console.log(text.innerHTML);

  const link = document.querySelector(".article-innerhtml .link");
  console.log(link.innerHTML);
}
{
  //Зміна

  // Властивість innerHTML доступна і для читання, і для запису. Якщо записати в неї рядок з HTML-тегами, то браузер під час парсингу рядка перетворить його у валідні елементи і додасть у DOM-дерево.

  const title = document.querySelector(".article .title");
  title.innerHTML = 'New and <span class="accent">improved</span> title';

  //Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту.
}

{
  //Однотипна (шаблонна) розмітка створюється із масиву даних.
  // Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента. Якщо ти будеш це робити за допомогою методу map(), не забудь, що він повертає масив. Отже, перед тим як додавати розмітку в DOM, цей масив треба привести до рядка за допомогою методу join()

  const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
  const list = document.querySelector(".list");

  const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");

  // Check the console, you'll see a single string with HTML tags
  console.log(markup);

  // Adding all the markup in one operation
  list.innerHTML = markup;
}
{
  //Нове значення для element.innerHTML повністю видалить і повторно створить усіх нащадків елемента element. Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на повторне створення вже існуючої розмітки, а це погано.

  const article = document.querySelector(".article-last");
  const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

  // Replace += with = operator. See the difference?
  // Article title is lost because we overwrite element content.
  article.innerHTML += htmlString;
}
//#endregion

//#region Метод insertAdjacentHTML()
{
  // Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Він вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.

  //Аргумент position — це рядок, який визначає позицію щодо елемента element. Він приймає одне з чотирьох значень.

  //"beforebegin" — перед element
  // "afterbegin" — всередині element, перед усіма дітьми
  // "beforeend" — всередині element, після усіх дітей
  // "afterend" — після element

  // Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM-дереві. Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку, доти, доки елемент не буде перебувати в DOM-дереві.

  const list = document.querySelector(".list-insertAdjacentHTML");

  const newTechnologies = ["React", "TypeScript", "Node.js"];
  const markup = newTechnologies
    .map((technology) => `<li class="list-item new">${technology}</li>`)
    .join("");

  list.insertAdjacentHTML("beforeend", markup);
  list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
}

//#endregion
