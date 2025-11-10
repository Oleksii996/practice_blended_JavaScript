//Класи

//#region Оголошення класу
// Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте часто є потреба створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи.

//Оголошення класу має такий синтаксис:
// ключове слово class
// ім’я класу (у прикладі: User)
// тіло класу у фігурних дужках

//Класи прийнято називати з великої літери, а в назві відображати тип об'єкта (іменника), що створюється.

{
  //А як створити з класу екземпляр?
  // Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new, поставивши його перед викликом класу. Результатом виклику new User() буде екземпляр класу User. Він буде містити дані і мати поведінку, що описані у класі.
  class User {
    // Тіло класу
  }

  const mango = new User();
  console.log(mango); // {}

  const poly = new User();
  console.log(poly); // {}
}

//Task
// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.
{
  class Car {
    // Тіло класу
  }

  const mazda = new Car();
  console.log(mazda); // {}
}
//#endregion

//#region Конструктор класу

// Спосіб створення класу залежить від твоєї задачі. У нашому прикладі клас User представляє користувача, тому ми додамо до нього поля для імені та пошти.

{
  // Для ініціалізації екземпляра класу використовується метод constructor.
  // Якщо його не визначити в явному вигляді, то буде створений конструктор за замовчуванням — порожня функція, яка не змінює екземпляр класу.

  class User {
    // Синтаксис оголошення методу класу
    constructor() {
      // ...
    }
  }
}

{
  //Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor.

  class User {
    constructor() {
      console.log("constructor call");
    }
  }

  const mango = new User(); // "constructor call"
  console.log(mango); // {}
}

{
  //Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.

  class User {
    constructor(name, email) {
      console.log(name, email);
    }
  }

  const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
  console.log(mango); // {}
}

//Зверни увагу, що метод constructor викликається в контексті створюваного екземпляра.
{
  class User {
    constructor(name, email) {
      // Ініціалізація властивостей екземпляра
      this.name = name;
      this.email = email;
    }
  }

  const mango = new User("Mango", "mango@mail.com");
  console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

  const poly = new User("Poly", "poly@mail.com");
  console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
}

//Таким чином, this усередині конструктора посилається на новостворений об'єкт.
// Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
// Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.

{
  //Task
  // Додай класу Car метод constructor, який приймає три параметри:
  // brand - марка автомобіля
  // model - модель автомобіля
  // price - ціна автомобіля

  // Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.

  class Car {
    constructor(brand, model, price) {
      // Ініціалізація властивостей екземпляра - важливо для передачі далі екземплярам

      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  }

  console.log(new Car("Audi", "Q3", 36000)); // { brand: 'Audi', model: 'Q3', price: 36000 }
  console.log(new Car("BMW", "X5", 58900)); // { brand: 'BMW', model: 'X5', price: 58900 }
  console.log(new Car("Nissan", "Murano", 31700)); // { brand: 'Nissan', model: 'Murano', price: 31700 }
}
//#endregion

//#region Об'єкт параметрів
// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
// До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями, замість непов'язаного набору аргументів.
{
  class User {
    constructor(params) {
      this.name = params.name;
      this.email = params.email;
    }
  }

  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });

  console.log(mango);
  // { name: "Mango", email: "mango@mail.com" }
}

//Example
{
  //Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.
  class Car {
    constructor(params) {
      // Ініціалізація властивостей екземпляра - важливо для передачі далі екземплярам

      this.brand = params.brand;
      this.model = params.model;
      this.price = params.price;
    }
  }

  console.log(new Car("Audi", "Q3", 36000)); // { brand: 'Audi', model: 'Q3', price: 36000 }
  console.log(new Car("BMW", "X5", 58900)); // { brand: 'BMW', model: 'X5', price: 58900 }
  console.log(new Car("Nissan", "Murano", 31700)); // { brand: 'Nissan', model: 'Murano', price: 31700 }
}

//#endregion

//Методи класу
// Для роботи з властивостями майбутнього екземпляра використовуються методи класу.
// Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами.

{
  // Розгляньмо приклад використання методів у класі User.
  class User {
    constructor(params) {
      this.name = params.name;
      this.email = params.email;
    }

    // Метод getEmail
    getEmail() {
      // ...
    }

    // Метод changeEmail
    changeEmail(newEmail) {
      // ...
    }
  }
}

//Для доступу до властивостей у методах використовується ключове слово this, оскільки методи будуть викликані в контексті об'єкта-екземпляра.
{
  class User {
    constructor(params) {
      this.name = params.name;
      this.email = params.email;
    }

    getEmail() {
      return this.email;
    }

    changeEmail(newEmail) {
      this.email = newEmail;
    }
  }

  //Після створення екземпляра можна використовувати оголошені методи класу, які будуть звертатися до властивостей об'єкта, що їх викликав.

  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });

  console.log(mango.getEmail()); // "mango@mail.com"

  mango.changeEmail("new@mail.com");

  console.log(mango.getEmail()); // "new@mail.com"
}

//Task
{
  // Додай класу Car два методи.
  // getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
  // changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.

  class Car {
    constructor(params) {
      this.brand = params.brand;
      this.model = params.model;
      this.price = params.price;
    }

    getPrice() {
      return this.price;
    }

    changePrice(newPrice) {
      this.price = newPrice;
    }
  }
}

//#region Прототип екземпляру
// Розглянемо для прикладу код класу User, який наразі має такий вигляд:
{
  class User {
    constructor(params) {
      this.name = params.name;
      this.email = params.email;
    }

    getEmail() {
      return this.email;
    }

    changeEmail(newEmail) {
      this.email = newEmail;
    }
  }

  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });

  console.log(mango.getEmail()); // “mango@mail.com”
}

//Об'єктно-орієнтоване програмування в JavaScript побудоване на прототипному наслідуванні. Методи класу не стають власними властивостями екземпляра. І це правильно, оскільки, на відміну від значень властивостей, вони не є унікальними. Це одна й та сама функція, яка викликається в контексті різних об'єктів. Немає сенсу копіювати методи для кожного екземпляра, враховуючи, що може існувати багато тисяч екземплярів.

{
  //Методи класу додаються до спеціального об'єкта, який зберігається у властивості prototype самого класу.
  class User {
    constructor(params) {
      this.name = params.name;
      this.email = params.email;
    }

    getEmail() {
      return this.email;
    }

    changeEmail(newEmail) {
      this.email = newEmail;
    }
  }

  console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}
}

//При створенні екземпляра через new, об'єкт, збережений у властивості prototype класу, автоматично стає його прототипом. Це означає, що властивість [[Prototype]] екземпляра отримує посилання на властивість prototype класу.

//Завдяки цьому об'єкт-екземпляр може використовувати методи класу, тобто властивості свого прототипу. Також у цьому об'єкті зберігається посилання на метод constructor класу, але це потрібно лише для внутрішніх механізмів класу і не має значення для нас.
//#endregion

//#region Приватні властивості
// Водій автомобіля натискає на педаль газу — і машина набирає швидкість. Він може зручно та просто керувати системою клімату, бачить поточну швидкість на спідометрі тощо. Водночас для такого зручного використання можливостей інтерфейсу всередині автомобіля виконується дуже багато дій і процесів.
// Інкапсуляція — це парадигма ООП, яка передбачає приховування деталей внутрішньої реалізації класу від зовнішнього коду. Інкапсуляція реалізується приватними властивостями та методами, доступ до яких можна отримати тільки всередині класу.

// Інший розробник, який користується цим класом, має отримувати доступ тільки до публічного інтерфейсу — набору публічних властивостей і методів класу.
// Припустимо, що пошта користувача повинна бути недоступною для прямої зміни ззовні, тобто приватною. Додаючи до імені властивості на початку символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі є обов'язковим.
{
  class User {
    // Необов'язкове оголошення публічних властивостей
    name;
    // Обов'язкове оголошення приватних властивостей
    #email;

    constructor(params) {
      this.name = params.name;
      this.#email = params.email;
    }
  }

  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });
  console.log(mango.name); // "Mango"
  //console.log(mango.#email); // Виникне помилка, це приватна властивість
}

//Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи.
{
  class User {
    name;
    #email;

    constructor(params) {
      this.name = params.name;
      this.#email = params.email;
    }

    getEmail() {
      return this.#email;
    }

    changeEmail(newEmail) {
      this.#email = newEmail;
    }
  }

  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });

  console.log(mango.getEmail()); // "mango@mail.com"
  mango.changeEmail("mango@supermail.com");
  console.log(mango.getEmail()); // "mango@supermail.com"
}

//Task
{
  // Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.
  // getBrand() - повертає значення приватної властивості brand.
  // changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

  class Car {
    #brand;
    constructor(params) {
      this.#brand = params.brand;
      this.model = params.model;
      this.price = params.price;
    }

    getBrand() {
      return this.#brand;
    }

    changeBrand(newBrand) {
      this.#brand = newBrand;
    }

    getPrice() {
      return this.price;
    }

    changePrice(newPrice) {
      this.price = newPrice;
    }
  }

  console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); //
  console.log(new Car({ brand: "bmw", model: "X5", price: 58900 })); //
  console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); //
}
//#endregion

//#region Приватні методи
// Ти вже знаєш, як працюють публічні методи. Подивимось на це на прикладі класу User з приватною властивістю #email та публічною властивістю name.
{
  class User {
    name;
    #email;

    constructor(params) {
      this.name = params.name;
      this.#email = params.email;
    }

    // Публічний метод для отримання електронної пошти
    getEmail() {
      return this.#email;
    }

    // Публічний метод для зміни електронної пошти
    changeEmail(newEmail) {
      this.#email = newEmail;
    }
  }

  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });

  console.log(mango.getEmail()); // "mango@mail.com"
  mango.changeEmail("mango@supermail.com");
  console.log(mango.getEmail()); // "mango@supermail.com"
}

//Іноді потрібно не просто отримувати або змінювати адресу електронної пошти, але й проводити певні дії, які мають бути приховані від "зовнішнього світу".
// Скажімо, кожен раз, коли електронна пошта змінюється, потрібно валідувати її формат.
{
  // Це можна зробити за допомогою приватних методів. Додаючи до назви методу на початку символ #, ми робимо його приватним.
  class User {
    name;
    #email;

    constructor(params) {
      this.name = params.name;
      this.#email = params.email;
    }

    // Публічний метод для отримання електронної пошти
    getEmail() {
      return this.#email;
    }

    // Публічний метод для зміни електронної пошти
    changeEmail(newEmail) {
      if (this.#validateEmail(newEmail)) {
        this.#email = newEmail;
      } else {
        console.log("Invalid email format");
      }
    }

    // Приватний метод для валідації електронної пошти
    #validateEmail(email) {
      return email.includes("@");
    }
  }

  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });

  // Спробуємо змінити електронну пошту
  mango.changeEmail("newmail.com"); // "Invalid email format"
  mango.changeEmail("new@mail.com");
  console.log(mango.getEmail()); // "new@mail.com"

  // Прямий виклик приватного методу ззовні призведе до помилки
  //mango.#validateEmail("test"); // Помилка
}

//У цьому прикладі приватний метод #validateEmail забезпечує додаткову логіку для валідації електронної пошти.
// Цей метод не доступний ззовні класу, тому користувачі (або інші розробники) не можуть його викликати напряму. Вони можуть лише використовувати публічний метод changeEmail, який у свою чергу використовує приватний метод для валідації.
// Таким чином, ми інкапсулюємо внутрішню логіку й забезпечуємо безпеку та стабільність роботи класу.
//#endregion

//#region Геттери і сеттери
// Геттери і сеттери — це спеціальний синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють взаємодіяти з іншими властивостями зручнішим способом.
{
  class User {
    #email;

    constructor(params) {
      this.name = params.name;
      this.#email = params.email;
    }

    // Геттер email
    get email() {
      return this.#email;
    }

    // Сеттер email
    set email(newEmail) {
      this.#email = newEmail;
    }
  }

  //У прикладі вище оголошені геттер і сеттер email. Щоб оголосити геттер і сеттер, потрібно поставити перед ім'ям властивості відповідні ключові слова — get і set. Всередині цих методів:
  // повертаємо значення приватної властивості #email за допомогою геттера змінюємо її значення за допомогою сеттера
  // Також вважається гарною практикою називати геттери і сеттери так само, як і властивість, з якою вони працюють. Це спрощує читання коду та його розуміння. Коли інші розробники бачать геттер чи сеттер, який називається так само, як і властивість, вони можуть легко здогадатися, що цей метод служить для доступу до конкретної властивості. Наприклад, геттер і сеттер для приватної властивості #email найлогічніше називати просто email, як у прикладі вище.

  //Геттер і сеттер повинні називатися однаково.
  // Краще називати геттери і сеттери так само, як і властивість, з якою вони працюють. Геттер може існувати без сеттера, так само як і сеттер без геттера.

  //Розгляньмо приклад: геттер виконується при спробі отримати значення властивості, а сеттер — при спробі її змінити.
  const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
  });

  console.log(mango.email); // mango@mail.com

  mango.email = "mango@supermail.com";

  console.log(mango.email); // mango@supermail.com
}

//Звертаючись до mango.email, викликається геттер get email() {...} і виконується його код.
// При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {...}, і рядок "mango@supermail.com" буде значенням параметра newEmail.

{
  //Task
  // Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

  class Car {
    #model;
    #price;
    #brand;

    constructor(params) {
      this.#brand = params.brand;
      this.#model = params.model;
      this.#price = params.price;
    }

    // Геттер Сеттер Brand
    get brand() {
      return this.#brand;
    }
    set brand(newBrand) {
      this.#brand = newBrand;
    }

    // Геттер Сеттер Model
    get model() {
      return this.#model;
    }
    set model(newModel) {
      this.model = newModel;
    }

    // Геттер Сеттер Price
    get price() {
      return this.#price;
    }
    set price(newPrice) {
      this.price = newPrice;
    }
  }
}
//#endregion

//#region Статичні властивості
// Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити його власні властивості. Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. Вони корисні для зберігання інформації, що стосується класу.
// Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static. Статичні властивості можна використовувати як у методах класу, так і поза класом.
{
  class MyClass {
    static myProp = "value";
  }

  console.log(MyClass.myProp); // "value"
}

//У екземпляра немає доступу до статичних властивостей класу.
{
  class MyClass {
    static myProp = "value";
  }

  const inst = new MyClass();
  console.log(inst.myProp); // undefined
}

//Додамо класу користувача приватну властивість role — його роль, що визначає набір прав, наприклад: адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість roles — об'єкт із властивостями.
{
  class User {
    static roles = {
      admin: "admin",
      editor: "editor",
      basic: "basic",
    };

    #email;
    #role;

    constructor(params) {
      this.#email = params.email;
      this.#role = params.role || User.roles.basic;
    }

    get role() {
      return this.#role;
    }

    set role(newRole) {
      this.#role = newRole;
    }
  }

  const mango = new User({
    email: "mango@mail.com",
    role: User.roles.admin,
  });

  console.log(mango.role); // "admin"
  mango.role = User.roles.editor;
  console.log(mango.role); // "editor"
}

//Task
// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.
// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.
// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.
{
  class Car {
    static maxPrice = 50000;
    #price;

    constructor(params) {
      this.#price = params.price;
    }

    get price() {
      return this.#price;
    }

    set price(newPrice) {
      if (newPrice <= Car.maxPrice) {
        this.#price = newPrice;
      }
    }
  }

  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000

  audi.price = 49000;
  console.log(audi.price); // 49000

  audi.price = 51000;
  console.log(audi.price); // 51000
}
//#endregion

//#region Статичні методи
// У класі можна оголосити не тільки методи майбутнього екземпляра, а й статичні методи. Статичні методи — це методи, доступні тільки класу. Вони можуть бути публічні та приватні.
{
  // Синтаксис оголошення статичних методів майже аналогічний статичним властивостям. Єдина відмінність — значенням буде метод.
  class MyClass {
    static myMethod() {
      console.log("A static method");
    }
  }

  MyClass.myMethod(); // "A static method"
}

//Додамо у клас User:
// статичну властивість takenEmails для зберігання зайнятих пошт користувачів
// статичний метод isEmailTaken, який перевіряє, чи доступна пошта
// Під час ініціалізації екземпляра в конструкторі класу будемо додавати пошту в список зайнятих.
{
  class User {
    static #takenEmails = [];

    static isEmailTaken(email) {
      return User.#takenEmails.includes(email);
    }

    #email;

    constructor(params) {
      this.#email = params.email;
      User.#takenEmails.push(params.email);
    }
  }

  const mango = new User({ email: "mango@mail.com" });

  console.log(User.isEmailTaken("poly@mail.com")); // false
  console.log(User.isEmailTaken("mango@mail.com")); // true
}

//Особливість статичних методів
// Під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Це логічно, адже статичні методи викликає сам клас, а не його екземпляри.

//Task
// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.
// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum.
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).
{
  class Car {
    static #maxPrice = 50000;

    static checkPrice(price) {
      if (price > this.#maxPrice) {
        return "Error! Price exceeds the maximum";
      }
      return "Success! Price is within acceptable limits";
    }

    constructor(params) {
      this.price = params.price;
    }
  }

  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });

  console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
  console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

  console.log(Car.checkPrice(36000)); // "Success! Price is within acceptable limits"
  console.log(Car.checkPrice(18000)); // "Success! Price is within acceptable limits"
  console.log(Car.checkPrice(64000)); // "Error! Price exceeds the maximum"
  console.log(Car.checkPrice(57000)); // "Error! Price exceeds the maximum"
}
//#endregion

//#region Наслідування класів
// Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).
{
  //Розгляньмо приклад:
  class Parent {}

  class Child extends Parent {
    // ...
  }
}
//У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від батьківського класу Parent.
// Це означає, що ми можемо оголосити базовий клас, який зберігає загальні характеристики й методи для групи похідних класів, які наслідують властивості й методи батьківського, але також додають свої унікальні.

//Уявімо, у застосунку є користувачі з різними ролями: адміністратор, копірайтер, контент-менеджер тощо. У кожного типу користувача є набір загальних характеристик, наприклад, пошта і пароль, але також є й унікальні.
// Створивши незалежні класи для кожного типу користувача, ми отримаємо дублювання загальних властивостей і методів. Якщо необхідно змінити, наприклад, назву властивості, доведеться проходити по всіх класах, а це незручно й вимагає багато часу.

//Замість цього можна:
// створити загальний клас User, який буде зберігати набір загальних властивостей і методів
// після чого створити класи для кожного типу користувача, які наслідують цей набір від класу User

// За потреби змінити щось спільне, достатньо буде змінити тільки код класу User.
{
  //Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також приватну властивість #email.
  class User {
    #email;

    constructor(email) {
      this.#email = email;
    }

    get email() {
      return this.#email;
    }

    set email(newEmail) {
      this.#email = newEmail;
    }
  }

  class ContentEditor extends User {
    // Тіло класу ContentEditor
  }

  const editor = new ContentEditor("mango@mail.com");
  console.log(editor); // { #email: "mango@mail.com" }
  console.log(editor.email); // "mango@mail.com"
}

//Task
{
  // У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.
  // Оголоси клас Admin, який наслідує від класу User
  // Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

  class User {
    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }

  class Admin extends User {
    static role = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  }

  console.log(Admin.role.BASIC); // "basic"
  console.log(Admin.role.SUPERUSER); // "superuser"
}
//#endregion

//#region Конструктор дочірнього класу

//#endregion
