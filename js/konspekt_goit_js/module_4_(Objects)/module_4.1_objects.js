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

//#endregion
