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
