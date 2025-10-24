//#region Створення об'єкта (Creating an Object)
// Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад, користувач, книга, продукт магазину — чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    public: true,
    rating: 8.38,
  };

  console.log(book.title); // "The Last Kingdom"
  console.log(book.author); // "Bernard Cornwell"
  console.log(book.genres); // ["historical prose", "adventure"]
  console.log(book.public); // true
  console.log(book.rating); // 8.38
}
//Для оголошення об’єкта використовуються фігурні дужки {} — літерал об'єкта.
// При створенні об'єкта до нього відразу можна додати властивості, але це не обов’язково. Кожна властивість обов’язково складається з пари ключ: значення.
// Ключ також називають ім'ям властивості і це зазвичай рядок.
// Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо.
// Властивості між собою розділяються комою.

//Приклад
// Оголоси змінну apartment і задай ій об'єкт, який описує квартиру з наступними характеристиками:
// imgUrl - рядок, що містить шлях до зображення, значення "https://via.placeholder.com/640x480";
// descr - рядок, що містить опис, значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію, значення ["premium", "promoted", "top"].

{
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };

  console.log(apartment.imgUrl); // "https://via.placeholder.com/640x480"
  console.log(apartment.descr); // "Spacious apartment in the city center"
  console.log(apartment.rating); // 4
  console.log(apartment.price); // 2153
  console.log(apartment.tags); // ["premium", "promoted", "top"]
}

//#endregion

//#region Вкладені властивості (Nested Properties)
// Значенням властивості може бути інший об'єкт.
// Це використовується для зберігання вкладених і згрупованих даних.

{
  const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
      country: "Jamaica",
      city: "Ocho Rios",
    },
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
}
//Наприклад, статистика користувача соціальної мережі stats складається з кількості підписників, переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування location, окремо країна і місто.
// У майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною або максимальною кількістю підписників тощо.

// Завдання - приклад

//Об'єкт apartment описує квартиру з наступними характеристиками

//imgUrl - шлях до зображення
//descr - опис
//rating - рейтинг
//price - ціна
//tags - метаінформація

{
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],

    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
}
//#endregion

//#region Доступ до властивостей через крапку (Dot Notation)
// Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.
// На місце звернення буде повернуте значення властивості з таким ключем.
// Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.
// Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  const bookTitle = book.title;
  console.log(bookTitle); // "The Last Kingdom"

  const bookGenres = book.genres;
  console.log(bookGenres); // ["historical prose", "adventure"]

  const bookPrice = book.price;
  console.log(bookPrice); // undefined
}

//Приклад
{
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };

  const aptRating = apartment.rating;
  console.log(apartment.rating); //

  const aptDescr = apartment.descr;
  console.log(apartment.descr); //

  const aptPrice = apartment.price;
  console.log(apartment.price); //

  const aptTags = apartment.tags;
  console.log(apartment.tags); //
}
//#endregion

//#region Доступ до вкладених властивостей (Nested Properties)
// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».
{
  // Значення властивості — це вкладений об’єкт.
  // Якщо необхідно отримати значення країни користувача, записуємо user.location.country, де:

  // user.location — це звернення (шлях) до об'єкта у властивості location,
  // user.location.country — звернення до властивості country в цьому об'єкті.

  // Тобто «крапка» вказує наступну вкладеність.

  const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
      country: "Jamaica",
      city: "Ocho Rios",
    },
    hobbies: ["swimming", "music", "sci-fi"],
  };

  const location = user.location;
  console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

  const country = user.location.country;
  console.log(country); // "Jamaica"

  //Значення властивості — це масив.
  // Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: ****user.hobbies

  const hobbies = user.hobbies;
  console.log(hobbies); // ["swimming", "music", "sci-fi"]

  const firstHobby = user.hobbies[0];
  console.log(firstHobby); // "swimming"

  const numberOfHobbies = user.hobbies.length;
  console.log(numberOfHobbies); // 3
}

//Приклад
// Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник. Властивість owner (власник) також є об'єктом. Оголошено шість змінніх, значення яких це значення відповідних властивостей об'єкту apartment.

{
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };

  const ownerName = apartment.owner.name;
  console.log(apartment.owner.name);
  const ownerPhone = apartment.owner.phone;
  console.log(apartment.owner.phone);
  const ownerEmail = apartment.owner.email;
  console.log(apartment.owner.email);
  const numberOfTags = apartment.tags.length;
  console.log(apartment.tags.length);
  const firstTag = apartment.tags[0];
  console.log(apartment.tags[0]);
  const lastTag = apartment.tags[apartment.tags.length - 1];
  console.log(apartment.tags[apartment.tags.length - 1]);
}
//#endregion

//#region Доступ до властивостей через квадратні дужки (Square Brackets)
// Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName[”key”]
// Схоже на звернення до елемента масиву з відмінністю. Відмінність полягає в тому, що в квадратних дужках зазначається не індекс елемента, а рядок з ключем (ім’ям властивості).
// Синтаксис «квадратних дужок» використовується значно рідше. Як правило, у випадках, коли ім'я властивості заздалегідь не відоме або воно зберігається у змінній, наприклад, як значення параметра функції.

// На місце звернення буде повернуто значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  console.log(book.title); // "The Last Kingdom"
  console.log(book["title"]); // "The Last Kingdom"

  console.log(book.genres); // ["historical prose", "adventure"]
  console.log(book["genres"]); // ["historical prose", "adventure"]

  const propKey = "author";
  console.log(book.propKey); // undefined
  console.log(book[propKey]); // "Bernard Cornwell"
}

//Приклад
// Об'єкт apartment описує квартиру з 5 властивостями: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значення яких це значення відповідних властивостей об'єкту apartment.
// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис квадратних дужок.
{
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };

  const aptRating = apartment["rating"];
  console.log(aptRating); //4
  const aptDescr = apartment["descr"];
  console.log(aptDescr); //
  const aptPrice = apartment["price"];
  console.log(aptPrice); //
  const aptTags = apartment["tags"];
  console.log(aptTags); //
}
//#endregion

//#region Зміна значення властивостей
// Після того як об'єкт створений, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  book.rating = 9;
  book.isPublic = false;
  book.genres.push("drama");

  console.log(book.rating); // 9
  console.log(book.isPublic); // false
  console.log(book.genres); // ["historical prose", "adventure", "drama"]
}

//Приклад
// Доповни код, оновивши значення властивостей об'єкта apartment:

{
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };

  apartment.price = 5000;
  console.log(apartment.price); // 5000
  apartment.rating = 4.7;
  console.log(apartment.rating); // 4.7
  apartment.owner.name = "Henry Sibola";
  console.log(apartment.owner.name); // Henry Sibola
  apartment.tags.push("trusted");
  console.log(apartment.tags); //[ 'premium', 'promoted', 'top', 'trusted' ]
}

//#endregion

//#region Додавання властивостей
// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
// Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  book.pageCount = 836;
  book.originalLanguage = "en";
  book.translations = ["ua", "ru"];
  book.price = {
    hardcover: 39,
    softcover: 29,
  };

  console.log(book.pageCount); // 836
  console.log(book.originalLanguage); // "en"
  console.log(book.translations); // ["ua", "ru"]
}

//Приклад
// Додай об'єкту apartment кілька нових властивостей:

{
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  apartment.area = 60;
  console.log(apartment.area);
  apartment.rooms = 3;
  console.log(apartment.rooms);
  apartment.location = {
    country: "Jamaica",
    city: "Kingston",
  };
  console.log(apartment.location.city);
  console.log(apartment.location);
}

//#endregion

//#region Короткі властивості
// Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

// Синтаксис у наступному прикладі занадто громіздкий, адже доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається необхідне значення: name: name, і age: age,.
{
  const name = "Henry Sibola";
  const age = 25;

  const user = {
    name: name,
    age: age,
  };

  console.log(user.name); // "Henry Sibola"
  console.log(user.age); // 25
}

//Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.
{
  const name = "Henry Sibola";
  const age = 25;

  const user = {
    name,
    age,
  };

  console.log(user.name); // "Henry Sibola"
  console.log(user.age); // 25
}

//Приклад
// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.
{
  const name = "Repair Droid";
  const price = 2500;
  const image = "https://via.placeholder.com/640x480";
  const tags = ["on sale", "trending", "best buy"];

  const product = {
    name,
    price,
    image,
    tags,
  };

  console.log(product.name); // "Repair Droid"
  console.log(product.price); // 2500
  console.log(product.image); // "https://via.placeholder.com/640x480"
  console.log(product.tags); // ["on sale", "trending", "best buy"]
}
//#endregion

//#region Обчислювальні властивості
// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.
// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.
{
  const propName = "name";
  const user = {
    age: 25,
  };

  user[propName] = "Henry Sibola";
  console.log(user.name); // "Henry Sibola"
}

//Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.
// Значенням обчислювальної властивості може бути будь-який валідний вираз.
{
  const propName = "name";
  const user = {
    age: 25,
    // ключ цієї властивості буде взято зі значення змінної propName
    [propName]: "Henry Sibola",
  };

  console.log(user.name); // "Henry Sibola"
}

//Приклад
// Використовуючи синтаксис обчислювальних властивостей, доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, ключі яких зберігаються у змінних emailInputName і passwordInputName.
// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

{
  const emailInputName = "email";
  const passwordInputName = "password";

  const credentials = {
    [emailInputName]: "henry.carter@aptmail.com",
    [passwordInputName]: "jqueryismyjam",
  };

  console.log(credentials.email); //
  console.log(credentials.password); //
}
//#endregion
