//Події

//#region Метод addEventListener()
// Подія — це сигнал від браузера про те, що на вебсторінці щось відбулося. Існує багато видів подій: події миші, події клавіатури, події елементів форм, зміни розмірів вікна, завантаження зображень, буфера обміну, зміни стадії CSS анімації або переходу тощо. Події використовуються для реакції на дії користувача й виконання коду, пов'язаного з певною подією.

// Для того щоб елемент реагував на дії користувача, до нього необхідно додати слухача події та визначити йому обробника.

// Слухач події — це механізм, який "слухає" або "очікує" на виникнення певної події. Метод addEventListener() додає слухача події на елемент.

// Аргументи методу:
// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

{
  // Давай розглянемо приклад. У тебе на сайті є кнопка для перегортання галереї зображень.

  // 1.В HTML є кнопка з класом my-button.

  //2.Щоб галерея горталась, тобі потрібно в JavaScript коді отримати посилання на елемент кнопки й додати на нього слухача події кліку.

  const button = document.querySelector(".my-button-1");

  button.addEventListener("click", () => {
    console.log("The button was pressed and now the next image will appear");
  });

  // У виклик addEventListener() першим аргументом ми передали ім’я події "click" , другим — функцію-обробник подій (event handler) — () => {console.log("...")}. Кожного разу, коли на елементі button відбуватиметься подія "click", ця колбек-функція буде виконуватися й виводити в консоль повідомлення "The button was pressed and now the next image will appear".
}

{
  //Для колбека можна використовувати не анонімну, а окрему функцію, передаючи на неї посилання, як це реалізовано у прикладі нижче. Іменована функція підвищує читабельність коду.

  const button = document.querySelector(".my-button-2");

  const handleClick = () => {
    console.log("The button was pressed and now the next image will appear");
  };

  button.addEventListener("click", handleClick);
}

//На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу. Колбек-функції будуть викликатися в порядку їхньої реєстрації в коді.
//Example
{
  const singleBtn = document.querySelector("#single");

  const handleClick = () => {
    console.log("click event listener callback");
  };

  singleBtn.addEventListener("click", handleClick);

  // ===============================================
  const multiBtn = document.querySelector("#multiple");

  const firstCallback = () => {
    console.log("First callback!");
  };
  const secondCallback = () => {
    console.log("Second callback!");
  };
  const thirdCallback = () => {
    console.log("Third callback!");
  };

  multiBtn.addEventListener("click", firstCallback);
  multiBtn.addEventListener("click", secondCallback);
  multiBtn.addEventListener("click", thirdCallback);
}

//#endregion

//#region  Метод removeEventListener()
{
  // Метод removeEventListener() видаляє слухача події з елемента.
  // Аргументи аналогічні методу addEventListener():

  // Для того щоб мати можливість видаляти слухача події з елемента через removeEventListener, важливо використовувати ту саму функцію-обробник, яка була призначена в addEventListener. З цієї причини рекомендовано для обробників подій використовувати іменовані функції, які можна легко передавати як аргументи.

  //Розбери живий приклад, у якому на кнопку з текстом Click me додається й видаляється слухач події іншими двома кнопками. При кліках по кнопках у консоль розробника виводяться повідомлення.
  const addListenerBtn = document.querySelector(".js-add");
  const removeListenerBtn = document.querySelector(".js-remove");
  const btn = document.querySelector(".target-btn");

  const handleClick = () => {
    console.log("click event listener callback");
  };

  addListenerBtn.addEventListener("click", () => {
    btn.addEventListener("click", handleClick);
    console.log("click event listener was added to btn");
  });

  removeListenerBtn.addEventListener("click", () => {
    btn.removeEventListener("click", handleClick);
    console.log("click event listener was removed from btn");
  });
}
//#endregion

//#region Об'єкт події
{
  // Для обробки події недостатньо знати, що подія — це клік або натискання клавіші. Розробнику можуть знадобитися інші деталі, а саме: елемент, на якому відбулася подія, його поточне значення текстового поля, вбудовані методи тощо.

  // Кожна подія — це об'єкт, який містить інформацію про деталі події та автоматично передається першим аргументом в обробник події. Усі події відбуваються з базового класу Event.
  //Параметр event — це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції. Ми можемо називати його як завгодно, але, як правило, його оголошують як e, evt або event.

  //Деякі властивості об'єкта події:
  // event.type — тип події.
  // event.currentTarget — елемент, на якому виконується обробник події.

  const button = document.querySelector(".btn-object-event");

  const handleClick = (event) => {
    console.log("event: ", event);
    console.log("event type: ", event.type);
    console.log("currentTarget: ", event.currentTarget);
  };

  button.addEventListener("click", handleClick);
}
//#endregion

//#region Події клавіатури

// Існує дві основні події клавіатури:
// keydown — подія, що відбувається при натисканні клавіші
// keyup — подія, що відбувається, коли клавішу відпустили

// На відміну від інших подій, події клавіатури обробляються на документі, а не на конкретному елементі. Об'єкти подій клавіатури походять від базового класу KeyboardEvent.

//#endregion

//#region Властивості key і code
{
  // Властивість об’єкта події key повертає символ, згенерований натисканням клавіші на клавіатурі. Ця властивість враховує:
  // стан клавіш-модифікаторів, наприклад Shift
  // поточну мову

  // Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів.

  const clearLogBtn = document.querySelector(".js-clear");
  const logList = document.querySelector(".log-list");
  let keypressCounter = 1;

  console.log(clearLogBtn);

  document.addEventListener("keydown", logMessage);
  document.addEventListener("keyup", logMessage);
  clearLogBtn.addEventListener("click", reset);

  function logMessage({ type, key, code }) {
    const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

    logList.insertAdjacentHTML("afterbegin", markup);

    if (type === "keyup") {
      incrementKeypressCounter();
    }
  }

  function reset() {
    keypressCounter = 1;
    logList.innerHTML = "";
  }

  function incrementKeypressCounter() {
    keypressCounter += 1;
  }
}
//#endregion
