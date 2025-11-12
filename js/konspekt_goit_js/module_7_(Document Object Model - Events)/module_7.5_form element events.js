//Події елементів форм

//#region Подія submit

// Відправлення форми відбувається:
// при кліку на кнопку з атрибутом type="submit"
// при натисканні клавіші Enter під час перебування в будь-якому її текстовому полі форми

//Подія submit відбувається безпосередньо на формі (тег form), тому обробник подій слід встановлювати саме на ній.

//Деякі події викликають дію браузера, вбудовану за замовчуванням як реакція на певний тип події. Наприклад, клік на посиланні ініціює перехід на нову адресу, зазначену в href, а відправлення форми перезавантажує сторінку.
// Найчастіше ця поведінка небажана і її необхідно скасувати. Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод preventDefault().

{
  const registerForm = document.querySelector(".form");

  registerForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
      return console.log("Please fill in all the fields!");
    }

    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
  }
}
//#endregion

//#region Подія change
{
  // Подія change відбувається після зміни елемента форми.
  // Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу. Це не завжди зручно. Уяви, що користувач набирає щось у текстовому полі — подія відсутня. Щойно фокус пропав, відбудеться подія change.

  // Для інших елементів, наприклад, select, чекбоксів і радіокнопок, подія change спрацьовує відразу під час вибору значення.

  // Зверни увагу на корисні властивості при роботі з елементом <select> у прикладі.
  // Визнач, що зберігається у властивостях value, selectedIndex і options.

  const select = document.querySelector(".pizza-select");
  const textOutput = document.querySelector(".text-output");
  const valueOutput = document.querySelector(".value-output");

  select.addEventListener("change", setOutput);

  function setOutput(event) {
    const selectedOptionValue = event.currentTarget.value;
    const selectedOptionIndex = event.currentTarget.selectedIndex;
    const selectedOptionText =
      event.currentTarget.options[selectedOptionIndex].text;

    textOutput.textContent = selectedOptionText;
    valueOutput.textContent = selectedOptionValue;
  }
}
//#endregion

//#region Подія input
{
  // Подія input відбувається тільки на текстових полях і textarea.
  // Вона створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. На практиці input — це найголовніша подія для роботи з текстовими полями форми.

  const textInput = document.querySelector(".text-input-45");
  const output = document.querySelector(".output-45");

  textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
  });
}

//Порівняємо події input і change на текстових полях і textarea

// Подія input:
// відбувається при кожній зміні значення (при введенні або видаленні символів), не залежить від втрати фокусу

// Подія change:
// відбувається після втрати фокусу за умови, що відбулася зміна значення в елементі
//#endregion

//#region Подія focus і blur
{
  // Елемент отримує фокус під час кліку миші або переходу клавішею Tab.
  // Момент отримання і втрати фокусу дуже важливий. Отримуючи фокус, ми можемо завантажити дані для автозаповнення, почати відстежувати зміни тощо.

  // Під час втрати фокусу — перевірити введені дані.
  // подія focus відбувається під час фокусування на елементі подія blur відбувається при втраті фокусу, наприклад, користувач клікає в іншому місці екрана

  // Активувати або скасувати фокус можна програмно. Для цього треба викликати в коді для елемента однойменні методи focus() і blur().
  // Розглянь, як реалізуються події focus та blur у живому прикладі.

  const textInput = document.querySelector(".text-input-46");
  const setFocusBtn = document.querySelector('[data-action="set"]');
  const removeFocusBtn = document.querySelector('[data-action="remove"]');

  setFocusBtn.addEventListener("click", () => {
    textInput.focus();
  });

  removeFocusBtn.addEventListener("click", () => {
    textInput.blur();
  });

  textInput.addEventListener("focus", () => {
    textInput.value = "This input has focus";
  });

  textInput.addEventListener("blur", () => {
    textInput.value = "";
  });
}
//#endregion
