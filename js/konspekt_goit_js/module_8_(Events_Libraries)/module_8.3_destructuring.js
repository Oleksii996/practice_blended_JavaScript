// #region Деструктуризація

// Навіщо потрібна деструктуризація?
// Деструктуризація (Destructuring) — це особливий синтаксис, що дозволяє витягти значення зі структур даних, такі як об'єкти або масиви, і присвоїти їх змінним. Це зручний спосіб дістати потрібні дані зі складних структур і використовувати їх у коді.

{
  // Без деструктуризації робота з властивостями об'єкта має такий вигляд:
  const user = {
    name: "Jacob",
    age: 32,
  };

  console.log(user.name); // Jacob
  console.log(user.age); // 32
}

{
  // Із деструктуризацією робота з властивостями об'єкта має такий вигляд:
  const user = {
    name: "Jacob",
    age: 32,
  };

  const { name, age } = user;
  console.log(name); // Jacob
  console.log(age); // 32
}

// Деструктуризація об'єктів
{
  // Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  const accessType = book.isPublic ? "pulbic" : "private";
  console.log(accessType);

  const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
  console.log(message);
}

{
  //Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта в локальні змінні. Це робить код у місці їх використання менш «шумним».
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  // Деструктуризуємо
  const { title, author, isPublic, rating } = book;

  // Використовуємо
  const accessType = isPublic ? "pulbic" : "private";
  console.log(accessType);

  const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
  console.log(message);
}

//Після ключового слова const або let ставимо фігурні дужки, як і у випадку з оголошенням об'єкта.
// Усередині дужок, через кому, вказуємо імена змінних, яким будуть задані відповідні значення властивостей деструктуризованого об’єкта.

// Деструктуризація завжди знаходиться в лівій частині операції присвоювання.
// Змінним усередині фігурних дужок присвоюються значення однойменних властивостей об'єкта з відповідними іменами.
// Послідовність оголошення змінних у фігурних дужках не важлива.

//#endregion

// #region Деструктуризація неіснуючих властивостей
// У випадку, якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоєння.
// А що буде в іншому випадку?
// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно undefined.
{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  // Деструктуризуємо
  const { title, bookTitle, coverImage, bookRating } = book;
  console.log(title); // "The Last Kingdom"
  console.log(bookTitle); // undefined
  console.log(coverImage); // undefined
  console.log(bookRating); // undefined
}
{
  //З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, використовуючи знак =. Це значення буде присвоєно тільки у випадку, коли в об'єкті відсутня властивість із таким ім'ям.
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
  };

  // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
  const {
    title,
    author,
    coverImage = "https://via.placeholder.com/640/480",
  } = book;

  console.log(title); // "The Last Kingdom"
  console.log(author); // "Bernard Cornwell"
  console.log(coverImage); // "https://via.placeholder.com/640/480"
}
//#endregion

//#region Перейменування змінної
// Під час деструктуризації можна перейменувати змінну, в яку розпаковується значення властивості, використовуючи :.
{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  // Деструктуризуємо
  const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
  console.log(title); // "The Last Kingdom"
  console.log(bookAuthor); // "Bernard Cornwell"
  console.log(isPublic); // true
  console.log(bookRating); // 8.38
}
//#endregion

//Значення за замовчуванням

// При перейменуванні змінної, в яку ми розпаковуємо значення властивості об'єкта, також можна присвоїти значення за замовчуванням.
// Для цього після нового імені ставимо дорівнює = і вказуємо її значення за замовчуванням.
{
  const book = {
    title: "The Last Kingdom",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
  };

  const {
    title,
    coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
  } = book;

  console.log(title); // "The Last Kingdom"
  console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"
}
// Якщо така властивість існує в об'єкті, у змінну буде присвоєно її значення.
// В іншому випадку змінній буде присвоєно значення за замовчуванням.
{
  const book = {
    title: "The Dream of a Ridiculous Man",
  };

  const {
    title,
    coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
  } = book;

  console.log(title); // "The Dream of a Ridiculous Man"
  console.log(bookCoverImage); // "https://via.placeholder.com/640/480"
}
//#endregion

//#region Деструктуризація в циклах
// Під час ітерації по масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.

{
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
  ];

  for (const book of books) {
    console.log(book.title); //
    console.log(book.author); //
    console.log(book.rating); //
  }

  // Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта в локальні змінні в тілі циклу.

  for (const book of books) {
    const { title, author, rating } = book;

    console.log(title);
    console.log(author);
    console.log(rating);
  }

  //Якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book.
  for (const { title, author, rating } of books) {
    console.log(title);
    console.log(author);
    console.log(rating);
  }
}
//#endregion

//# Деструктуризація параметрів
// Під час передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дає змогу явно вказати, які поля об'єкта використовуються у функції.

// Без деструктуризації об'єкта:
{
  function printUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
  }

  printUserInfo({
    name: "Alice",
    age: 25,
    hobby: "dancing",
  }); // Name: Alice, Age: 25, Hobby: dancing
}

//З деструктуризацією об'єкта в тілі функції:
{
  function printUserInfo(user) {
    const { name, age, hobby } = user;
    console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
  }

  printUserInfo({
    name: "Alice",
    age: 25,
    hobby: "dancing",
  }); // Name: Alice, Age: 25, Hobby: dancing
}

//Із деструктуризацією об'єкта в місці оголошення параметрів:
{
  function printUserInfo({ name, age, hobby }) {
    console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
  }

  printUserInfo({
    name: "Alice",
    age: 25,
    hobby: "dancing",
  }); // Name: Alice, Age: 25, Hobby: dancing
}
//#endregion

//#region Патерн «Об'єкт параметрів»
// Якщо функція приймає більше 2-3 параметрів, дуже просто заплутатися, в якій послідовності і що передавати.
// В результаті виходить дуже неочевидний код у місці її виклику.

//Патерн «Об'єкт параметрів» допомагає вирішити цю проблему.
// Він заміняє набір параметрів всього одним — об'єктом з іменованими властивостями.
{
  function doStuffWithBook(book) {
    // Робимо щось з властивостями об'єкта
    console.log(book.title);
    console.log(book.pages);
    // І так далі
  }

  //  Таким чином, під час її виклику передаємо один об'єкт з необхідними властивостями.
  // ✅ Все зрозуміло
  doStuffWithBook({
    title: "The Last Kingdom",
    pages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
  });

  // Ще одна перевага в тому, що можна деструктуризувати об'єкт у параметрі book.
  // Це можна зробити в тілі функції.

  function doStuffWithBook(book) {
    const { title, pages, downloads, rating, isPublic } = book;
    console.log(title);
    console.log(pages);
  }

  // Або в сигнатурі (підписі) функції — різниці немає.
  function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
    console.log(title);
    console.log(pages);
  }
}
//#endregion

//#regionГлибока деструктуризація
// Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності
{
  // Так, наприклад, може виглядати об'єкт, що описує користувача соцмережі.
  const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
}

//Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи. Для початку напишемо код деструктуризації властивостей об'єкта користувача.

{
  const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const { name, tag, stats } = user;

  console.log(name); // Jacques Gluke
  console.log(tag); // jgluke
  console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }
}

//Тепер додамо глибоку деструктуризацію властивостей об'єкта stats.
// Для цього в деструктуризації після імені властивості ставимо двокрапку : та починаємо деструктуризацію об'єкта для цієї властивості.
{
  const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const {
    name,
    tag,
    stats: { followers, views, likes },
  } = user;

  console.log(name); // Jacques Gluke
  console.log(tag); // jgluke
  console.log(followers); // 5603
  console.log(views); // 4827
  console.log(likes); // 1308
}

//Під час глибокої деструктуризації також можна змінювати імена змінних і присвоювати значення за замовчуванням, використовуючи вже знайомий тобі синтаксис.
{
  const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const {
    name,
    tag,
    stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
  } = user;

  console.log(name); // Jacques Gluke
  console.log(tag); // jgluke
  console.log(followers); // 5603
  console.log(userViews); // 4827
  console.log(userLikes); // 1308
}
//#endregion
