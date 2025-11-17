// Делегування подій
//#region Поширення подій

// Поширення подій (event propagation) — це термін, що описує життєвий цикл події, який має три етапи:
// Занурення (capture phase).
// Таргетинг (target phase).
// Спливання (bubble phase).

// На практиці найчастіше використовують тільки фазу спливання.

// Давайте розглянемо детальніше ці фази під час настання події.

// Capturing phase (занурення) — подія починається на window і тоне (проходить через усі елементи-предки) до найглибшого цільового елемента, на якому відбулася подія. На схемі подія — це клік, і capturing закінчується на елементі <button>.
// Target phase (таргетинг) — подія дійшла до цільового елемента. Цей етап містить тільки повідомлення елемента про те, що на ньому відбулася дія.
// Bubbling phase (спливання) — кінцева фаза, подія спливає від найглибшого, цільового елемента, через усі елементи-предки до window.

// Поширення подій часто неправильно використовується як синонім стадії спливання, але це лише частина всього процесу. Тому щоразу, коли відбувається подія, відбувається її поширення.
//#endregion

//#region Спливання подій

// Зараз ми зосередимося на фазі спливанні події, адже часто розробник працює саме зі спливанням.
// Під час настання події обробники спочатку спрацьовують на найбільш вкладеному елементі. Потім — на його батьківському елементі, потім — вище і так далі, вгору по ланцюжку вкладеності. Цей процес називається спливання (event bubbling), тому що події «спливають» від внутрішнього елемента вгору через усіх предків до window, подібно до спливання бульбашки повітря у воді.

//Розглянемо приклад: є три вкладені теги <div> з обробниками кліка на кожному з них.

{
  const parent = document.querySelector("#parent");
  const child = document.querySelector("#child");
  const descendant = document.querySelector("#descendant");

  parent.addEventListener("click", () => {
    console.log("Parent click handler");
  });

  child.addEventListener("click", () => {
    console.log("Child click handler");
  });

  descendant.addEventListener("click", () => {
    console.log("Descendant click handler");
  });

  //#endregion

  //#region Цільовий елемент
  // Незалежно від місця, де ми спіймали слухачем подію під час її спливання, завжди можна дізнатися, де саме вона відбулася.

  // Елемент, на якому відбулася подія, називається цільовим, або вихідним. Це завжди найглибший елемент, з якого починається спливання. Він доступний як event.target.
  // event.target — це посилання на вихідний елемент, на якому відбулася подія, у процесі спливання вона — незмінна.
  // event.currentTarget — це посилання на поточний елемент, до якого прив’язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія.

  // Якщо слухач події зареєстрований на найвищому елементі, то цей обробник зможе "перехопити" всі кліки, які відбуваються на його дочірніх елементах, завдяки механізму спливання подій. У прикладі нижче це працює таким чином: обробник зареєстрований на елементі "Parent". Кліки на "Descendant" або "Child" будуть спливати до "Parent", де їх і буде оброблено цим обробником. Тому важливо розуміти різницю між елементом, де подія фактично відбулася (event.target), та елементом, до якого подія спливла, і обробник її перехопив (event.currentTarget).

  parent.addEventListener("click", (event) => {
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
  });
}
//#endregion

//#region Припинення спливання
// Зазвичай подія буде спливати вгору до елемента window, викликаючи всі наявні обробники на своєму шляху.

// А інколи один елемент може мати кілька обробників на одну й ту саму подію.
// Уявімо, що сталася подія на елементі Descendant. Подія спливає до Child і Parent.
// Будь-який проміжний обробник може зупинити спливання цієї події за допомогою методів об’єкта події (event):
// event.stopPropagation(),
// event.stopImmediatePropagation(),
//  чому ж різниця у використанні цих методів?

{
  const parent = document.querySelector("#parent_1");
  const child = document.querySelector("#child_1");
  const descendant = document.querySelector("#descendant_1");

  parent_1.addEventListener("click", () => {
    alert(
      "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
    );
  });

  child_1.addEventListener("click", () => {
    alert(
      "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
    );
  });

  descendant_1.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Descendant click handler");
  });
}

//event.stopPropagation()
// Зупиняє "спливання" події в DOM-дереві. Це означає, що жоден батьківський елемент не зможе відловити цю подію.
// Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.

//event.stopImmediatePropagation()
// Зупиняє "спливання" події так само, як event.stopPropagation().
// Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, навіть якщо вони були зареєстровані перед цим.
//#endregion

//#region Делегування подій

// Спливання дозволяє реалізувати один із найкорисніших прийомів — делегування подій.
// Уявімо, що є група елементів. Їх події потрібно обробляти однаково. Для цього треба додати обробник до кожного елемента. Але це не зручно.
// Делегування подій (event delegation) полягає в додаванні одного обробника на спільного предка цих елементів.

// Розглянемо делегування на прикладі:
// створюємо елемент <div>,
// додаємо до нього будь-яку кількість кнопок, наприклад, 100,
// реєструємо на кожній кнопці слухача події кліку з обробником handleButtonClick.

// Проблема в тому, що в нас є 100 слухачів подій. Усі вони вказують на один і той самий обробник слухача, але слухачів 100.
// Завдяки тому, що події спливають, ми можемо відловити їх на спільному предку — елементі <div>.
// Тепер є тільки один слухач події кліку з обробником handleButtonClick і браузеру не потрібно зберігати в пам'яті 100 різних слухачів.

// Отже, делегування реалізується у три прості кроки.
// 1. Визначити спільного предка групи елементів для відстеження подій.
// 2. Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
// 3. В обробнику використовувати event.target для вибору цільового елемента, на якому безпосередньо відбулась подія.

{
  const box = document.querySelector("div.box");

  box.addEventListener("click", function (event) {
    console.log(event.target);
  });
}
//#endregion

//#region Перевірка цільового елемента події

// Є задача створити палітру кольорів. Палітра дає можливість вибрати колір по кліку і відображає обраний колір.
// Кожен клік на елементі палітри — це подія, яка змінює колір і вміст заголовка. Елементів дуже багато. Замість призначення обробника кожному елементу палітри, повісимо один слухач на загального предка div.color-palette.
{
  const colorPalette = document.querySelector(".color-palette");
  const output = document.querySelector(".output");

  colorPalette.addEventListener("click", selectColor);

  // This is where delegation «magic» happens
  function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
  }

  // Some helper functions to render palette items
  createPaletteItems();

  function createPaletteItems() {
    const items = [];
    for (let i = 0; i < 60; i++) {
      const color = getRandomHexColor();
      const item = document.createElement("button");
      item.type = "button";
      item.dataset.color = color;
      item.style.backgroundColor = color;
      item.classList.add("item");
      items.push(item);
    }
    colorPalette.append(...items);
  }

  function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}

//#endregion
