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
// Властивість style використовується для читання та зміни вбудованих стилів з DOM-елементів. Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.
// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай використовуються в CSS, тобто background-color перетворюється на backgroundColor.
{
  const button = document.querySelector(".btn");

  button.style.backgroundColor = "teal";
  button.style.fontSize = "36px";
  button.style.textAlign = "center";

  console.log(button.style); // inline styles object
}
//#endregion

//#region Доступ до атрибутів
// DOM-елементам відповідають HTML-теги, які містять текстові атрибути.
// Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.
{
  //Метод element.hasAttribute(nameAttribute)
  // Метод приймає один аргумент — рядок nameAttribute, який містить ім’я атрибута для перевірки та повертає результат перевірки його наявності на елементі element — true чи false.

  const image = document.querySelector(".image");
  console.log(image.hasAttribute("src")); // true
  console.log(image.hasAttribute("href")); // false
}
{
  //Метод element.getAttribute(nameAttribute)
  // Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення цього атрибута для вказаного HTML-елемента element. Якщо атрибут не знайдено, метод повертає null.

  const image = document.querySelector(".image");
  console.log(image.getAttribute("alt")); // "Rocks and waterfall"
}
{
  //Метод element.setAttribute(nameAttribute, value)
  // Метод приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value зі значенням, яке цьому атрибуту треба присвоїти. Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.
  const image = document.querySelector(".image");

  image.setAttribute("alt", "Amazing nature");
  console.log(image.getAttribute("alt")); // Amazing nature
}
{
  //Метод element.removeAttribute(nameAttribute)
  // Метод приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити зі вказаного HTML-елемента element — та видаляє його. Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.

  const image = document.querySelector(".image");

  image.removeAttribute("alt");
  console.log(image.hasAttribute("alt")); // false
}
//#endregion

//#region Власні атрибути
// Специфікацією HTML визначено вичерпний перелік атрибутів, які ми можемо додавати на ті чи інші теги (DOM-елементи) для того, щоб розмітка лишалась валідною, але інколи цього переліку недостатньо. Бувають випадки, коли нам потрібно зберегти певну інформацію на тезі, наприклад, вказати тип дії кнопки, щоб потім у певний момент часу мати можливість отримати до неї доступ. І тут на допомогу приходять власні data-атрибути.

// Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.
{
  //Отримання значень
  // Для отримання значення data-атрибута використовується властивість dataset, після якої через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.

  const saveBtn = document.querySelector('button[data-action="save"]');
  console.log(saveBtn.dataset.action); // "save"

  const closeBtn = document.querySelector('button[data-action="close"]');
  console.log(closeBtn.dataset.action); // "close"

  //Зміна значень
  // Змінити значення існуючого data-атрибута або додати новий можна так само, як і будь-якої іншої властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до DOM-елемента, а потім змінити/задати значення властивості в об'єкті dataset.

  // Змінюємо значення data-action для кнопки saveBtn
  saveBtn.dataset.action = "update";

  // Додаємо новий data-атрибут data-role
  saveBtn.dataset.role = "admin";

  // Перевіримо нові значення
  console.log(saveBtn.dataset.action); // "update"
  console.log(saveBtn.dataset.role); // "admin"

  //Тепер data-action атрибут для saveBtn має значення "update" замість "save".
}
//#endregion
