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
}
//У прикладі вище оголошені геттер і сеттер email. Щоб оголосити геттер і сеттер, потрібно поставити перед ім'ям властивості відповідні ключові слова — get і set. Всередині цих методів:
// повертаємо значення приватної властивості #email за допомогою геттера змінюємо її значення за допомогою сеттера
// Також вважається гарною практикою називати геттери і сеттери так само, як і властивість, з якою вони працюють. Це спрощує читання коду та його розуміння. Коли інші розробники бачать геттер чи сеттер, який називається так само, як і властивість, вони можуть легко здогадатися, що цей метод служить для доступу до конкретної властивості. Наприклад, геттер і сеттер для приватної властивості #email найлогічніше називати просто email, як у прикладі вище.

//Геттер і сеттер повинні називатися однаково.
// Краще називати геттери і сеттери так само, як і властивість, з якою вони працюють. Геттер може існувати без сеттера, так само як і сеттер без геттера.

//#endregion
