import axios from "axios";

//#regionБібліотека Axios
/* 
Axios — це потужний HTTP-клієнт, який базується на Promise та спрощує роботу з HTTP-запитами. Він дозволяє:

- Зберігати глобальні налаштування — вони автоматично застосовуватимуться до всіх запитів.
- Автоматично конвертувати дані — Axios сам перетворює запити у JSON.
- Парсити відповіді — не потрібно викликати response.json(), як у fetch.
- Обробляти всі помилки — включаючи HTTP-статуси, такі як 404. 
*/

//Axios — це зручна альтернатива стандартному Fetch API.!!!
//#endregion

//#region Синтаксис запиту

// Щоб зробити HTTP-запит, достатньо викликати axios і передати об'єкт конфігурації. Наприклад, ось як можна виконати GET-запит:

/* import axios from "axios";

axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users'
}); */

//Функція axios повертає проміс, який можна обробити стандартними методами then і catch:

/* import axios from "axios";
axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users'
})
	.then(response => console.log(response))
	.catch(error => console.log(error));
 */

//На відміну від fetch:
// Не потрібно вручну парсити JSON – Axios автоматично перетворює відповідь у формат JSON, не потрібно парсити дані відповіді методом response.json().
// Автоматична обробка помилок – проміс відхиляється при будь-якому невдалому HTTP-коді відповіді (наприклад, 404), тому перевіряти response.ok не потрібно.

// Це значно спрощує код взаємодії з бекендом!
//#endregion

//#region Псевдоніми методів запиту
// Axios пропонує зручні псевдоніми (скорочені методи) для всіх підтримуваних HTTP-запитів. Вони спрощують синтаксис і додають стандартні налаштування.

//Візьмемо вже відомий нам код GET-запиту.

/* 
import axios from "axios";

axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users'
})
	.then(response => console.log(response))
	.catch(error => console.log(error)) 
*/

//Однак Axios дозволяє використовувати зручніший метод axios.get(url[, config]). Квадратні дужки позначають необов'язковий аргумент у документації і не є частиною коду.

/* import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/users')
	.then(response => console.log(response))
	.catch(error => console.log(error)) 
*/

//Використання axios.get позбавляє необхідності явно вказувати метод запиту — GET підставляється автоматично.
// Axios додає стандартні HTTP-заголовки, наприклад, Accept: application/json, оскільки зазвичай сервер повертає дані у форматі JSON.
// Таким чином, код стає більш лаконічним і зручним для використання!
// #endregion

//#region Об'єкт відповіді
//  Коли Axios виконує HTTP-запит, він повертає об'єкт відповіді, який містить наступну інформацію:

/* {
  data: {},       // Відповідь від сервера
  status: 200,    // Код стану HTTP
  statusText: "OK", // Текстовий опис статусу
  headers: {},    // Заголовки відповіді
  config: {},     // Конфігурація запиту
  request: {}     // Об'єкт самого запиту
} */

//При використанні then ми отримуємо об'єкт відповіді та можемо звертатися до його властивостей:

/* 
import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
  	})
  	.catch(error => {
  		console.log(error);
  	})
 */

//Чому Axios зручніший за fetch?
// Автоматичний парсинг JSON – немає потреби викликати response.json(), як у fetch. Дані вже знаходяться у response.data.
// Автоматична перевірка статусу відповіді – Axios автоматично відхиляє проміс у разі помилки (404, 500 тощо). У fetch довелося б вручну перевіряти response.ok.

// #endregion

//#region Конфігурація за замовчуванням
// Якщо у тебе є кілька запитів до одного сервера, доводиться щоразу повторювати базову адресу (https://jsonplaceholder.typicode.com), що робить код менш зручним:

/* axios.get("https://jsonplaceholder.typicode.com/users").then().catch();
axios.get("https://jsonplaceholder.typicode.com/posts").then().catch();
axios.get("https://jsonplaceholder.typicode.com/images").then().catch();
 */

//Можна вказати стандартні налаштування конфігурації у властивості axios.defaults, які будуть застосовані до всіх запитів. Властивість axios.defaults.baseURL відповідає за збереження базової адреси для всіх HTTP-запитів.

/* 
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"; 
*/

//Після цього у запитах можна вказувати лише відносний шлях. Axios автоматично додає baseURL до кожного запиту.

/* 
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.get("/users").then().catch();
axios.get("/posts").then().catch();
axios.get("/images").then().catch(); 
*/

//Таким чином, якщо тобі потрібно змінити API-адресу, достатньо оновити axios.defaults.baseURL в одному місці.
// Це робить код гнучкішим та зручнішим!
// #endregion

//#region Заголовки за замовчуванням
// Окрім базової адреси, можна також встановити стандартні заголовки для всіх HTTP-запитів. Це корисно, якщо, наприклад, потрібно передавати API-ключ або інші авторизаційні дані в кожному запиті.

// Використовуємо axios.defaults.headers.common для встановлення заголовків, які будуть застосовуватися до всіх запитів:
/* 
import axios from "axios";

const myApiKey = "secret-api-key-for-every-request";

axios.defaults.headers.common["header-name"] = myApiKey; 
*/

//Як це працює?
// Замість "header-name" вказується потрібний заголовок, наприклад, "Authorization", "X-API-Key" тощо.
// Axios додає цей заголовок та його значення до кожного запиту, що позбавляє необхідності передавати його вручну щоразу.
// Таким чином, заголовки додаються автоматично без дублювання коду, що робить його чистішим та зручнішим для підтримки!

// #endregion

//#region Параметри рядка запиту
/* Коли потрібно передати параметри в URL, їх можна додати різними способами. Якщо параметрів багато, це може зробити код менш читабельним і незручним для редагування.

Передача параметрів безпосередньо в URL. Цей підхід працює, але з великою кількістю параметрів URL стає громіздким і складним для читання.
axios.get("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"); */

//Можна створити параметри у вигляді об'єкта за допомогою класу URLSearchParams, а потім передати їх у запит:
{
  const searchParams = new URLSearchParams({
    _limit: 5,
    _sort: "name",
  });

  axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);
}

//Але Axios дозволяє передавати параметри в окремому об'єкті через властивість params:
{
  axios.get("https://jsonplaceholder.typicode.com/users", {
    params: {
      _limit: 7,
      _sort: "name",
    },
  });
}

// Код стає чистішим та легшим для читання.
// Axios автоматично перетворює об'єкт params у рядок запиту.
// Легко редагувати та додавати нові параметри, без ручного форматування URL.
// Це найкращий спосіб працювати з параметрами в запитах Axios!

// #endregion
