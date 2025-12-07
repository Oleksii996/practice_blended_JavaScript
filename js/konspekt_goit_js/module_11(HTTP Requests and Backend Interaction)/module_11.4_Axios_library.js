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

// #endregion
