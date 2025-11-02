//#region Методи об'єкта
// Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних (наприклад, дані про книгу). Об'єкти-сховища зазвичай містяться в масиві таких самих об'єктів. Цей масив є колекцією однотипних елементів.
// А що, якщо нам потрібно створити функції для виконання операцій над масивом даних? Наприклад, додавання або видалення книги. І ці функції мають виконуватися багато разів.

{
  // ❌ Слабкопов'язані, незалежні сутності
  const books = ["The Last Kingdom", "Dream Guardian"];
  function getBooks() {}
  function addBook() {}
}

//Один із варіантів — оголосити змінну books і дві функції getBooks() і addBook(bookName).

//Цей спосіб має недоліки. Адже ми маємо три незалежні сутності без явного синтаксичного зв’язку і зі слабким логічним звʼязком. Є краще рішення.
//Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. Якщо значення властивості — це функція, така властивість називається методом об'єкта.

{
  const obj = {
    method(value) {
      console.log(`I'm a method with ${value}!`);
    },
  };

  obj.method(5); // "I'm a method with 5!"
  obj.method(10); // "I'm a method with 10!"
}

//Метод — це звичайна функція, оголошена як властивість об'єкта (див. приклад вище), а не як окрема змінна (див. перший приклад у розділі).
// Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.
// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».

// Створимо об’єкт bookShelf для колекції книг books і методів взаємодії з колекцією getBooks і addBook.
// ✅ Логічно й синтаксично згруповані сутності

{
  // ✅ Логічно й синтаксично згруповані сутності
  const bookShelf = {
    books: ["The Last Kingdom", "Dream Guardian"],
    // Це метод об'єкта
    getBooks() {
      return "Returning all books";
    },
    // Це метод об'єкта
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
  };

  // Виклики методів
  bookShelf.getBooks(); // поверне "Returning all books"
  bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
  bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
}

{
  //Задача
  // До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

  //Оголоси об'єкт atTheOldToad з наступними властивостями:

  const atTheOldToad = {
    potions: [],

    getPotions() {
      return "List of all available potions"; // ЦЕ МЕТОД !!! який повертає ...
    },

    addPotion(potionName) {
      return `Adding ${potionName}`; // ЦЕ МЕТОД !!! який повертає ...
    },
  };

  // Виклики методів
  console.log(atTheOldToad.getPotions()); // "List of all available potions"
  console.log(atTheOldToad.addPotion("Invisibility")); // поверне "Adding Invisibility"
  console.log(atTheOldToad.addPotion("Power potion")); // поверне "Adding Power potion"
}
//#endregion

//#region Доступ до властивостей об'єкта

// Методи використовуються для роботи з властивостями об'єкта та їх змінних.
// Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.

// Ключове слово this — це контекст виконання функції.

{
  const bookShelf = {
    books: ["The Last Kingdom", "The Mist"],
    getBooks() {
      console.log(this);
    },
  };

  bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
}

//Значенням this буде посилання на об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку — це посилання на об'єкт bookShelf.

// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.

{
  const bookShelf = {
    books: ["The Last Kingdom", "The Mist"],
    getBooks() {
      return this.books;
    },
  };

  console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
}

//приклад
// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

{
  const atTheOldToad = {
    potions: ["Speed potion", "Stone skin"],
    getPotions() {
      return this.potions;
    },
  };
  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]
}
//#endregion

//#region Зміна за посиланням
// У властивості books об'єкта bookShelf зберігається масив.
// Отже, ми можемо змінювати масив за посиланням, звертаючись до властивості bookShelf.books, тому що це посилання на масив

{
  const bookShelf = {
    books: ["The Last Kingdom"],
  };

  bookShelf.books.push("The Mist");
  console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]
}

//Під час звернення до this.books усередині методу, ми посилаємось на масив, що зберігається у властивості books. Це означає, що його можна змінювати за посиланням, наприклад, використавши метод масиву push() для додавання нового елемента.

{
  const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      return this.books;
    },
    addBook(bookName) {
      this.books.push(bookName);
    },
  };

  console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
  bookShelf.addBook("The Mist");
  bookShelf.addBook("Dream Guardian");
  console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
}
//При цьому з методу addBook не потрібно нічого повертати, якщо цього не вимагає завдання. Під час його виклику ми просто міняємо значення масиву за посиланням — і елементи масиву у властивості books змінюються.

//ExsampleО
// б'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

{
  const atTheOldToad = {
    potions: ["Speed potion", "Stone skin"], // має залишатись саме так!
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      this.potions.push(potionName);
    },
  };

  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]
  atTheOldToad.addPotion("Invisibility");
  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin", "Invisibility"]
  atTheOldToad.addPotion("Power potion");
  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]
}
//#endregion

//#regionМасив об’єктів

//#endregion
