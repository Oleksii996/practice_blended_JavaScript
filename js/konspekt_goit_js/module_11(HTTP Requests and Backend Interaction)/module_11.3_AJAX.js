//#region AJAX
/* 
AJAX (Asynchronous JavaScript and XML) — це метод обміну даними між клієнтом і сервером без перезавантаження сторінки. Завдяки цьому вебсторінки стають інтерактивнішими і швидше реагують на дії користувача.

- Дозволяє динамічно оновлювати контент, не перезавантажуючи всю сторінку.
- Зменшує навантаження на сервер, оскільки оновлюються тільки необхідні частини інтерфейсу.
- Використовується в усіх сучасних вебзастосунках, від соцмереж до онлайн-магазинів. 

Таким чином, AJAX — це основа динамічних вебсайтів.


Як працює AJAX? Процес можна розділити на кілька етапів:

- Користувач виконує дію (наприклад, натискає кнопку "Показати більше" або відправляє форму).
- JavaScript відправляє HTTP-запит до сервера (зазвичай через fetch або axios).
- Сервер отримує запит, обробляє його і повертає відповідь у форматі JSON.
- JavaScript отримує відповідь, обробляє дані і оновлює інтерфейс без перезавантаження сторінки.


Користувач виконує дію (наприклад, натискає кнопку "Показати більше" або відправляє форму).
JavaScript відправляє HTTP-запит до сервера (зазвичай через fetch або axios).
Сервер отримує запит, обробляє його і повертає відповідь у форматі JSON.
JavaScript отримує відповідь, обробляє дані і оновлює інтерфейс без перезавантаження сторінки.

*/
//#endregion

//#region Оновлення інтерфейсу
/* 
Продовжимо працювати з JSONPlaceholder API і візьмемо за приклад простий інтерфейс, у якому будемо відображати список користувачів після натискання кнопки.
*/
{
  const fetchUsersBtn = document.querySelector(".btn");
  const userList = document.querySelector(".user-list");

  fetchUsersBtn.addEventListener("click", () => {
    fetchUsers()
      .then((users) => renderUsers(users))
      .catch((error) => console.log(error));
  });

  function fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }

  function renderUsers(users) {
    const markup = users
      .map((user) => {
        return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
      })
      .join("");
    userList.insertAdjacentHTML("beforeend", markup);
  }
}

/* Розбери живий приклад написаного коду. Зверни увагу, як ми покращили код, щоб зробити його більш читабельним.

- Винесли код запиту у функцію fetchUsers(), яка виконує HTTP-запит і повертає результат - проміс, який в свою чергу повернув метод then.
- В обробнику події кліка ми її викликаємо і до результату її виклику (промісу) додаємо ланцюжок методів then() і catch().
- Винесли код створення й додавання HTML-розмітки у функцію renderUsers(users), яка очікує масив користувачів. */

//#endregion

//#region Помилка новачка
/* 
Однією з найбільш типових помилок під час роботи з fetch є спроба використати отримані дані поза колбеком then() у синхронному коді.

Новачки часто намагаються зберегти результат запиту у змінну і відразу використовувати її: 
*/
{
  let globalVar; // undefined

  // 1. Виконуємо HTTP-запит
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      console.log("users inside then callback: ", users); // Асинхронно записуємо результат запиту в зовнішню змінну

      globalVar = users; // Усередині колбека методу then усе добре

      console.log("globalVar inside fetch callback: ", globalVar);
    });

  // Зовні колбека методу then у синхронному
  // коді немає доступу до даних асинхронної відповіді бекенда
  // тому що цей код виконаєтся перед кодом в методі then
  console.log("globalVar outside fetch: ", globalVar); // undefined
}

//На момент виконання останнього console.log(), змінна globalVar ще не отримала значення, оскільки fetch() працює асинхронно. Код поза then() виконується раніше, ніж запит отримає відповідь.

//Як правильно працювати з даними?
// Замість використання зовнішньої змінної, всі операції з отриманими даними потрібно виконувати всередині then():

//Висновок: дані з асинхронного запиту доступні тільки в then(). Використовувати їх у синхронному коді поза then() – помилка. Це один з найважливіших принципів роботи з асинхронністю в JavaScript!

//#endregion

//#region Параметри рядка запиту

//Параметри запиту дозволяють передавати на бекенд додаткові критерії для отримання потрібних даних. Вони можуть використовуватися для:
// Обмеження кількості результатів (наприклад, отримати лише 7 записів).
// Сортування за певною властивістю (наприклад, за іменем або датою).
// Фільтрації результатів за певними умовами.

// Список доступних параметрів запиту залежить від бекенду і зазвичай описаний у його документації.

/* 
Синтаксис параметрів у URL

- Параметри додаються після ?.
- Кожен параметр — це пара ключ=значення.
- Кілька параметрів розділяються символом &.

У документації JSONPlaceholder API вказано такі параметри:

_limit — обмежує кількість записів у відповіді.
_sort — сортує отримані дані за вказаним полем.

Підкреслення в іменах параметрів специфічні для цього бекенда, це не якийсь стандарт.

fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name")

Що робить цей запит?

Повертає 7 користувачів (замість 10, які є за замовчуванням).
Відсортовує їх за полем name в алфавітному порядку.

 */

//Нижче ми додали використання параметрів рядка запиту до живого прикладу.
{
  const fetchUsersBtn = document.querySelector(".btn-2");
  const userList = document.querySelector(".user-list-2");

  fetchUsersBtn.addEventListener("click", () => {
    fetchUsers()
      .then((users) => renderUsers(users))
      .catch((error) => console.log(error));
  });

  function fetchUsers() {
    return fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  function renderUsers(users) {
    const markup = users
      .map((user) => {
        return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
      })
      .join("");
    userList.insertAdjacentHTML("beforeend", markup);
  }
}
//#endregion
