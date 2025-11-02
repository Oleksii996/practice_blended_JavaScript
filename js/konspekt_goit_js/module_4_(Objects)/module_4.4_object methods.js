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
// Ти вже знаєш, що об'єкт дає змогу згрупувати характеристики сутності, наприклад, книги.
// Тому найчастіше будемо працювати з масивом об'єктів. Для цього зберігатимемо у властивості books не рядки, а об'єкти з назвою книги та рейтингом, а в майбутньому, можливо, й іншими характеристиками.
{
  const bookShelf = {
    books: [
      { title: "The Last Kingdom", rating: 8 },
      { title: "The Mist", rating: 6 },
    ],
    getBooks() {
      return this.books;
    },
  };
}

//Тепер метод getBooks повертатиме масив об'єктів. А метод addBook очікує в параметрі не рядок, а об'єкт книги і додає його в масив у властивості books.

{
  const bookShelf = {
    books: [
      { title: "The Last Kingdom", rating: 8 },
      { title: "The Mist", rating: 6 },
    ],
    getBooks() {
      return this.books;
    },
    addBook(newBook) {
      this.books.push(newBook);
    },
  };

  bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
  console.log(bookShelf.getBooks()); // [{ title: "The Last Kingdom", rating: 8 }, { title: "The Mist", rating: 6 }, { title: "Dream Guardian", rating: 9 }]
}

//При переборі масиву у властивості books треба пам'ятати, що це масив об'єктів. Наприклад, додамо метод getAverageRating(), який повертатиме середній рейтинг книг. Для цього:
// Оголосимо новий метод getAvarageRating в об'єкті.
// Оголосимо змінну totalRating для зберігання загального рейтингу.
// Переберемо масив книг за посиланням this.books у циклі for...of.
// На кожній ітерації додамо до загального рейтингу - рейтинг книги.
// Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг.

{
  const bookShelf = {
    books: [
      { title: "The Last Kingdom", rating: 8 },
      { title: "The Mist", rating: 6 },
    ],
    getAvarageRating() {
      let totalRating = 0;

      for (const book of this.books) {
        totalRating += book.rating;
      }

      return totalRating / this.books.length;
    },
  };

  bookShelf.getAvarageRating();
  console.log(bookShelf.getAvarageRating()); // 7
}

//Приклад задача
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

{
  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      this.potions.push(newPotion);
    },
    getTotalPrice() {
      let TotalPrice = 0;
      for (const potion of this.potions) {
        TotalPrice += potion.price;
      }
      return TotalPrice;
    },
  };

  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]
  atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin","Invisibility"]
  atTheOldToad.addPotion({ name: "Power potion", price: 270 });
  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin","Invisibility","Power potion"]
  atTheOldToad.getTotalPrice();
  console.log(atTheOldToad.getTotalPrice()); // 1870
}

//#endregion

//#regionМасив Зміна об'єкта в масиві
// Ціла група завдань зводиться до зміни значення властивості певного об'єкта в масиві. Наприклад, зміна рейтингу книги. Пошук необхідного об'єкта в масиві виконується за унікальним значенням властивості, наприклад, за ім'ям книги.

{
  const bookShelf = {
    books: [
      { title: "The Last Kingdom", rating: 8 },
      { title: "The Mist", rating: 6 },
    ],
    changeRating(bookName, newRating) {},
  };
}

// Метод changeRating очікує на назву книги, якій необхідно змінити рейтинг, і нове значення рейтингу, яке потрібно підмінити в об'єкті. Процес зміни властивостей об’єкта в масиві починається з таких кроків:
// Перебір масиву об'єктів у циклі, наприклад for...of.
// Додавання перевірки збігу значення властивості об'єкта на поточній ітерації і заданого значення.
{
  const bookShelf = {
    books: [
      { title: "The Last Kingdom", rating: 8 },
      { title: "The Mist", rating: 6 },
    ],
    changeRating(bookName, newRating) {
      for (const book of this.books) {
        if (book.title === bookName) {
          // Знайшли необхідний об’єкт за назвою книги
        }
      }
    },
  };
}

//При виконанні if ми можемо бути впевнені, що на даній ітерації в змінній book знаходиться посилання на необхідний нам об'єкт, оскільки об'єкти передаються за посиланнями. Тепер достатньо звернутися до властивості цього об'єкта і прирівняти йому нове значення.
{
  const bookShelf = {
    books: [
      { title: "The Last Kingdom", rating: 8 },
      { title: "The Mist", rating: 6 },
    ],
    changeRating(bookName, newRating) {
      for (const book of this.books) {
        if (book.title === bookName) {
          book.rating = newRating;
        }
      }
    },
  };

  // ✅ Викликаємо метод через об’єкт
  bookShelf.changeRating("The Mist", 9);
  bookShelf.changeRating("The Last Kingdom", 4);

  console.log(bookShelf.books); // [{ title: "The Last Kingdom", rating: 4 }, { title: "The Mist", rating: 9 }]
}

//Приклад-задача
// Об'єкт atTheOldToad має наступні властивості:
// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

{
  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    updatePotionName(oldName, newName) {
      for (const potion of this.potions) {
        if (potion.name === oldName) {
          potion.name = newName;
        }
      }
    },
  };

  console.log(atTheOldToad.potions); // [{ name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 }]

  atTheOldToad.updatePotionName("Stone skin", "Invisibility");
  console.log(atTheOldToad.potions); // [{ name: 'Invisibility', price: 460 }, { name: 'Stone skin', price: 520 }]

  atTheOldToad.updatePotionName("Speed potion", "Polymorth");
  console.log(atTheOldToad.potions); // [{ name: 'Polymorth', price: 460 }, { name: 'Invisibility', price: 520 }]
}
//#endregion
