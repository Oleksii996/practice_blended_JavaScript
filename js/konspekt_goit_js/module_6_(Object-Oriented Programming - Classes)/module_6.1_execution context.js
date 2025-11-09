//Контекст виконання функції

//#region Ключове слово this

// Контекст функції у JavaScript подібний до контексту в реченні.
// Розглянемо наступні приклади для кращого розуміння:
// Віктор біжить швидко, тому що Віктор намагається зловити поїзд.
// Віктор біжить швидко, тому що він намагається зловити поїзд.

// Друге речення звучить більш лаконічно та природньо, чи не так?
// Використання займенника "він" дозволяє уникнути повторення підмета "Віктор". Речення задає контекст, у якому Віктор — це об’єкт у центрі уваги, який виконує дії. Немає жодних сумнівів, що займенник "він" у рамках цього речення вказує саме на підмет “Віктор”, отже, немає сенсу повторювати ім’я ще раз.

// Так само об'єкт може бути поточним контекстом під час виконання функції.
// Використання імені самого об'єкта для доступу до його властивостей усередині методів є поганим підходом. Це те ж саме, що й кожен раз повторювати "Віктор" замість "він" у реченні.
{
  const user = {
    username: "Victor",
    showName() {
      // ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
      console.log(user.username);
    },
  };

  user.showName();
  user.showName();
}

//Замість імені об'єкта, ми використовуємо зарезервоване ключове слово this.
// Під час виклику функції у this записується посилання на об'єкт, у контексті якого вона була викликана. Таким чином, у тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.
{
  const user = {
    username: "Victor",
    showName() {
      // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
      console.log(this.username);
    },
  };

  user.showName();
  user.showName();
}

//Метод showName — це функція, яка викликається в контексті об'єкта user. Під час її виклику в this записується посилання на об'єкт user, і ми можемо звертатися до його властивостей і методів.

{
  //Task
  // Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

  const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);

      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }

      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
  };

  console.log(pizzaPalace.checkPizza("Smoked")); //true
  console.log(pizzaPalace.checkPizza("Four meats")); //true
  console.log(pizzaPalace.checkPizza("Big Mike")); //false
  console.log(pizzaPalace.checkPizza("Viennese")); //false

  console.log(pizzaPalace.order("Smoked")); //Order accepted, preparing «Smoked» pizza
  console.log(pizzaPalace.order("Four meats")); //Order accepted, preparing «Four meats» pizza
  console.log(pizzaPalace.order("Big Mike")); //Sorry, there is no pizza named «Big Mike»
  console.log(pizzaPalace.order("Viennese")); //Sorry, there is no pizza named «Viennese»
}
//#endregion

//#region Глобальний контекст
// У визначенні значення this є важливий нюанс. Значення this визначається не на момент оголошення функції (за винятком стрілкових функцій), а на момент її виклику. Іншими словами, this визначається тим, як саме функцію викликали, а не де вона була оголошена.
{
  function foo() {
    console.log(this);
  }

  foo(); // window

  //У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window. Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.
}

{
  //У суворому режимі значення this у глобальному контексті завжди буде undefined.

  ("use strict");

  function foo() {
    console.log(this);
  }

  foo(); // undefined
}
//#endregion

//#region Контекст методу об'єкта
{
  // Якщо функція була викликана як метод об'єкта, то контекст вказуватиме на сам об'єкт, якому належить цей метод.

  const user = {
    username: "Poly",
    showThis() {
      console.log(this);
    },
  };

  user.showThis(); // {username: "Poly", showThis: ƒ}
}

//Розглянемо складніший приклад.
// Спочатку створюємо функцію в глобальному контексті і викликаємо її. Зверни увагу на використання суворого режиму.
{
  ("use strict");

  function showThis() {
    console.log("this in showThis: ", this);
  }

  // Викликаємо у глобальному контексті
  showThis(); // "this in showThis: undefined"
}

{
  //Потім присвоюємо цю функцію властивості об'єкта і викликаємо її як метод цього об'єкта.
  ("use strict");

  function showThis() {
    console.log("this in showThis: ", this);
  }

  const user = {
    username: "Poly",
  };

  user.showContext = showThis;

  // Викликаємо в контексті об'єкта
  user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

  // Викликаємо в глобальному контексті
  showThis(); // "this in showThis: undefined"
}

//#endregion

//#region Метод call()
// Бувають ситуації, коли функцію потрібно викликати в контексті об'єкта, навіть якщо функція не є методом цього об'єкта. Для цього у JavaScript існують спеціальні методи: call, apply і bind, які дозволяють вказати контекст виклику функції.
// Вивчимо сигнатуру цього методу. Сигнатура — це ім'я методу і його параметри.
// Сигнатура методу call**()** виглядає так:

//foo.call(thisArg, arg1, arg2, ...);
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції

//Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg, і також передає їй аргументи arg1, arg2 тощо.
// Розглянемо приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один параметр, str — рядок привітання.

{
  //Розглянемо приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один параметр, str — рядок привітання.

  function greet(str) {
    console.log(`${str}, ${this.username}, your room is ${this.room}!`);
  }

  const mango = {
    username: "Mango",
    room: 27,
  };

  const poly = {
    username: "Poly",
    room: 191,
  };

  //За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.

  greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
  greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"
}
//#endregion

//#region Метод apply()
// Метод apply є аналогом методу call. Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення.

// Сигнатура методу apply**()** виглядає так:
// foo.apply(thisArg, [arg1, arg2, ...])
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.

// Метод apply викликає функцію foo таким чином, що значення this у функції буде посилатися на об'єкт obj і передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

{
  // Розгляньмо приклад, де використаємо раніше оголошену нами функцію greet. Цього разу викликаємо її, використовуючи метод apply замість call.

  function greet(str) {
    console.log(`${str}, ${this.username}, your room is ${this.room}!`);
  }

  const mango = {
    username: "Mango",
    room: 27,
  };

  const poly = {
    username: "Poly",
    room: 191,
  };

  greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
  greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

  //Тобто різниця між call і apply полягає лише у формі передачі аргументів. Вибір між call і apply залежить від того, як саме ти хочеш передавати аргументи до функції в конкретній ситуації. У всіх інших аспектах вони працюють ідентично: викликають функцію в контексті зазначеного об'єкта і передають їй аргументи.
}
//#endregion

//#regionМетод bind() і втрата контексту
// Методи call і apply викликають функцію «на місці», тобто одразу.
// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.
// Сигнатура методу bind() виглядає так:
// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)
//thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
//arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику
{
  //Давай спробуємо зберегти посилання на метод об'єкта у змінну і викликати його в глобальному контексті.
  {
    ("use strict");

    const customer = {
      username: "Jacob",
      sayHello() {
        console.log(`Hello, ${this.username}!`);
      },
    };

    customer.sayHello(); // "Hello, Jacob!"

    const greet = customer.sayHello;

    greet(); // TypeError: Cannot read properties of undefined (reading 'username')

    //Зберегли посилання на метод sayHello у змінну greet
    // При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined
    //При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, оскільки undefined — це навіть не об'єкт
  }

  {
    // Це можна виправити, прив'язавши контекст за допомогою методу bind.

    ("use strict");

    const customer = {
      username: "Jacob",
      sayHello() {
        console.log(`Hello, ${this.username}!`);
      },
    };

    customer.sayHello(); // "Hello, Jacob!"

    const greet = customer.sayHello.bind(customer);

    greet(); // "Hello, Jacob!"
  }

  //Коли ми використовуємо bind(), ми створюємо нову функцію greet. Ця нова функція завжди матиме правильний контекст і може використовувати властивість username об'єкта customer.
}
//#endregion

//#regionМетод bind() і колбеки
// Метод bind() є дуже корисним. Особливо важливо його використовувати в колбек-функціях і ситуаціях, де можлива втрата контексту під час виклику функції.
// Розглянемо приклад втрати контексту, коли ми передаємо метод об'єкта як колбек-функцію:
{
  ("use strict");

  const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  function makeMessage(callback) {
    // callback() — це виклик методу getFullName в глобальному контексті
    const username = callback();
    console.log(`Processing an application from ${username}`);
  }

  makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

  //У цьому випадку метод getFullName передається як колбек-функція callback і втрачає контекст об'єкта customer. Це призводить до помилки, оскільки значення this у методі getFullName, коли він викликається як колбек у глобальному контексті, є undefined. Звертаючись до властивостей firstName і lastName, ми отримаємо помилку, оскільки undefined — це не об'єкт.
}
{
  // Щоб уникнути цієї втрати контексту, можна використати метод bind(). Замість передачі оригінального методу getFullName, ми передаємо його копію, до якої прив'язаний контекст об'єкта customer.

  const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  function makeMessage(callback) {
    const username = callback();
    console.log(`Processing an application from ${username}`);
  }

  makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
}

//Example
{
  //without bind
  {
    ("use strict");

    const library = {
      books: 1923,
      logBookCount() {
        console.log(this.books);
      },
    };

    function showBooks(callback) {
      callback();
    }

    showBooks(library.logBookCount);
  }
  {
    //with bind
    ("use strict");

    const library = {
      books: 1923,
      logBookCount() {
        console.log(this.books);
      },
    };

    function showBooks(callback) {
      callback();
    }

    showBooks(library.logBookCount.bind(library));
  }
}

//#endregion

//#region Стрілочні функції
// Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.
{
  const showThis = () => {
    console.log("this in showThis: ", this);
  };

  showThis(); // this in showThis: window
}

//Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в контексті цього об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала в момент її оголошення.
{
  const showThis = () => {
    console.log("this in showThis: ", this);
  };

  const user = {
    username: "Mango",
  };

  user.showContext = showThis;

  user.showContext(); // this in showThis: window
}

//Стрілочні функції також ігнорують наявність суворого режиму.
//Якщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, незалежно від того, чи виконується скрипт у суворому режимі.´
{
  ("use strict");

  const showThis = () => {
    console.log("this in showThis: ", this);
  };

  showThis(); // this in showThis: window
}

//Розгляньмо приклад, який добре ілюструє, як працює контекст для стрілочних функцій.
{
  const hotel = {
    username: "Resort hotel",
    showThis() {
      const foo = () => {
        console.log("this in foo: ", this);
      };

      foo();
      console.log("this in showThis: ", this);
    },
  };

  hotel.showThis();
  // this in foo: {username: 'Resort hotel', showThis: ƒ}
  // this in showThis: {username: 'Resort hotel',showThis: ƒ}
}
//Можливо, це не часто використовується на практиці. Але такі кейси досить типові для співбесіди.

{
  //На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. Це означає, що методи call, apply і bind не впливають на значення this у стрілках.

  const showThis = () => {
    console.log("this in showThis: ", this);
  };

  showThis.call({ username: "Mango" }); // this in showThis: window
  showThis.apply({ username: "Mango" }); // this in showThis: window

  const boundShowThis = showThis.bind({ username: "Mango" });
  boundShowThis(); // this in showThis: window
}
//Обмежуючи стрілочні функції постійним контекстом, JavaScript-рушії можуть краще їх оптимізувати, на відміну від звичайних функцій, значення this яких може бути змінено.

//#endregion

//#region !!!

//Що треба запам’ятати про this у стрілочних функціях?
//1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
//2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
//3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.

//Алгоритм визначення this
// Ключове слово this — це одна з найзаплутаніших концепцій для новачка.
// Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.

//Але все стає значно простішим, коли є простий алгоритм визначення значення this.
{
  // Крок 1
  //Це стрілочна функція?
  //Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
  //Якщо відповідь Ні, переходь на Крок 2
}
{
  // Крок 2
  // Чи використовуються методи call, apply або bind?
  //Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
  //Якщо відповідь Ні, переходь на Крок 3
}
{
  //Крок 3
  //Функція викликається як метод об’єкта object.method?
  //Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
  //Якщо відповідь Ні, переходь на Крок 4
}
{
  //Крок 4
  //Скрипт виконується в суворому режимі?
  //Якщо відповідь Так, значення this — undefined
  //Якщо відповідь Ні, значення this — window
}
//#endregion
