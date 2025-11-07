// Метод toSorted

//#region Метод toSorted()

// Метод toSorted() сортує елементи масиву.
// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням

//#region Масив чисел
// Розгляньмо приклад, де потрібно відсортувати масив scores.
// Вихідний масив scores залишається незмінним. Новий масив ascendingScores містить масив чисел, що відсортований за зростанням.

{
  const scores = [61, 19, 74, 35, 92, 56];
  const ascendingScores = scores.toSorted();

  console.log(scores); // [61, 19, 74, 35, 92, 56]
  console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
}

//Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode. Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло, якщо знати, що числа були перетворені на рядки.
{
  const scores = [27, 2, 41, 4, 7, 3, 75];

  console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]
}
//При такому сортуванні рядки порівнюються за символами зліва направо, тобто спочатку порівнюються рядки 2 і 27. Перший символ 2 у них однаковий, але рядок 2 містить лише 1 символ, тому він менший, ніж рядок 27, і йде першим.
// Потім порівнюються рядки 27 і 3. Перший символ у рядку 3 більший за перший символ 2 у рядку 27, тому 3 йде після 27.

//#endregion

//#region Масив рядків
// Масив рядків сортується за алфавітом.
{
  const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

  console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
}

//Водночас порядковий номер великих літер менший, ніж у малих.
{
  const letters = ["b", "B", "a", "A", "c", "C"];

  console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]
}

//Task

// Змінна releaseDates - це масив чисел, років видання книг. Змінна authors - це масив рядків, авторів книг.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом. Використовуй метод toSorted()
{
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Edgar Allan Poe",
  ];

  const ascendingReleaseDates = releaseDates.toSorted();
  console.log(ascendingReleaseDates);

  const alphabeticalAuthors = authors.toSorted();
  console.log(alphabeticalAuthors);
}
//#endregion

//#region Свій порядок сортування чисел
// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати колбек-функцію з двома параметрами.
// Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод toSorted() буде викликати її для двох довільних елементів.

{
  // Сортування за зростанням
  // Якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b.
  const scores = [61, 19, 74, 35, 92, 56];
  const ascendingScores = scores.toSorted((a, b) => a - b);
  console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
}

{
  //Сортування за спаданням
  // Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.
  const scores = [61, 19, 74, 35, 92, 56];
  const descendingScores = scores.toSorted((a, b) => b - a);
  console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
}

//Task
// Змінна releaseDates - це масив чисел, років видання книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані за датою видання, за їх зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
{
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

  const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
  console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]

  const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
  console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]
}
//#endregion

//#region Свій порядок сортування рядків
//  Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
{
  "a".localeCompare("b"); // -1
  "b".localeCompare("a"); // 1
  "a".localeCompare("a"); // 0
  "b".localeCompare("b"); // 0
}

//Повертає негативне значення, якщо firstString повинен бути перед secondString
// Повертає позитивне значення, якщо firstString повинен бути після secondString
// Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється

//Метод localeCompare() зручно використовувати для сортування рядків, оскільки метод toSorted() очікує такі самі значення від колбек-функції.

{
  const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

  const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
  console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

  const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
  console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
}

//Task
// Змінна authors - це масив рядків, авторів книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані за автором в алфавітному і в зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

{
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Edgar Allan Poe",
    "Howard Lovecraft",
  ];

  const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
  console.log(authorsInAlphabetOrder); //

  const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
  console.log(authorsInReversedOrder); //
}
//#endregion

//#region Сортування об'єктів
// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за трьома різними сценаріями:
// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку
{
  const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
  ];

  const inAscendingScoreOrder = students.toSorted(
    (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
  );
  console.log(inAscendingScoreOrder); //  [ { name: 'Ajax', score: 37 }, { name: 'Poly', score: 59 }, { name: 'Mango', score: 83 }, { name: 'Kiwi', score: 94 } ]

  const inDescendingScoreOrder = students.toSorted(
    (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
  );
  console.log(inDescendingScoreOrder); // [ { name: 'Kiwi', score: 94 }, { name: 'Mango', score: 83 }, { name: 'Poly', score: 59 }, { name: 'Ajax', score: 37 } ]

  const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
    firstStudent.name.localeCompare(secondStudent.name)
  );
  console.log(inAlphabeticalOrder); // [ { name: 'Ajax', score: 37 }, { name: 'Kiwi', score: 94 }, { name: 'Mango', score: 83 }, { name: 'Poly', score: 59 } ]
}

//Task
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
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
    {
      title: "The Tell-Tale Heart",
      author: "Edgar Allan Poe",
      rating: 7.75,
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      rating: 7.94,
    },
    {
      title: "Enemy of God",
      author: "Bernard Cornwell",
      rating: 8.67,
    },
  ];

  const sortedByAuthorName = books.toSorted((a, b) =>
    a.author.localeCompare(b.author)
  );
  console.log(sortedByAuthorName); //

  const sortedByReversedAuthorName = books.toSorted((a, b) =>
    b.author.localeCompare(a.author)
  );
  console.log(sortedByReversedAuthorName); //

  const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
  console.log(sortedByAscendingRating); //

  const sortedByDescentingRating = books.toSorted(
    (a, b) => b.rating - a.rating
  );
  console.log(sortedByDescentingRating); //
}
//#endregion

//#region Ланцюжки методів
{
  // У нас є масив об'єктів з іменами, балами й відвідуваними предметами кожного студента.
  const students = [
    { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
    { name: "Poly", score: 59, courses: ["science", "mathematics"] },
    { name: "Ajax", score: 37, courses: ["physics", "biology"] },
    { name: "Kiwi", score: 94, courses: ["literature", "science"] },
  ];

  //Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
  // Для цього:
  // Відсортуємо масив методом toSorted(),
  // Після чого методом map() створимо масив значень властивості name з відсортованого масиву.
  const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
  const names = sortedByAscendingScore.map((student) => student.name);

  console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
}
{
  //Проблема в тому, що в нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore — зайва. Вона необхідна тільки для зберігання проміжного результату.
  // Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.
  const students = [
    { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
    { name: "Poly", score: 59, courses: ["science", "mathematics"] },
    { name: "Ajax", score: 37, courses: ["physics", "biology"] },
    { name: "Kiwi", score: 94, courses: ["literature", "science"] },
  ];

  const names = students
    .toSorted((a, b) => a.score - b.score)
    .map((student) => student.name);

  console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

  //На масиві викликаємо метод toSorted()
  // До результату роботи методу toSorted() застосовуємо метод map()
  // Змінній names присвоюється результат роботи методу map()
}

{
  // Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
  const students = [
    { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
    { name: "Poly", score: 59, courses: ["science", "mathematics"] },
    { name: "Ajax", score: 37, courses: ["physics", "biology"] },
    { name: "Kiwi", score: 94, courses: ["literature", "science"] },
  ];

  const uniqueSortedCourses = students
    .flatMap((student) => student.courses) //['mathematics','physics','science','mathematics','physics','biology','literature','science']
    .filter((course, index, array) => array.indexOf(course) === index) //[ 'mathematics', 'physics', 'science', 'biology', 'literature' ]
    .toSorted((a, b) => a.localeCompare(b));

  console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
}

//Task
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
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
    {
      title: "The Tell-Tale Heart",
      author: "Edgar Allan Poe",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;

  const names = books
    .filter((books) => books.rating > MIN_BOOK_RATING)
    .map((book) => book.author)
    .toSorted((a, b) => a.localeCompare(b));

  console.log(names);
}
//#endregion
