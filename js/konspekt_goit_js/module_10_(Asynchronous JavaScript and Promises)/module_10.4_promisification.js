//Промісифікація

//#region Колбеки vs проміси
// Уявімо, що в нас є функція, яка виконує асинхронну операцію, наприклад, запит на сервер за інформацією про користувача за його ім'ям.,
{
  const fetchUserFromServer = (username, onSuccess, onError) => {
    // ...
  };
}
//Зараз функція знає занадто багато про той код, який буде використовувати результат її роботи. Вона очікує колбеки для успішного запиту onSuccess і для помилки onError, та буде відповідати за їх виклик за певних умов.

//Тобто ми передаємо щось усередину функції (колбеки) і сподіваємося, що воно відпрацює правильно. Це може стати проблемою.
// Краще, якщо функція не зважає на той код, який буде використовувати її результат. Вона просто виконує якусь операцію і повертає результат своєї роботи в зовнішній код. Для того щоб повернути результат асинхронної операції, із функції необхідно повернути проміс.

//Промісифікація — це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс. Така функція називається промісифікована.

//Відмінності промісу і callback-функції:
// Колбеки — це функції, проміси — це об'єкти.
// Колбеки передаються як аргументи функції, що виконує асинхронну операцію, а проміси створюються всередині цієї функції і повертаються як її результат.
// Колбеки обробляють успішне або неуспішне завершення операції, проміси нічого не обробляють, тільки зберігають поточний стан асинхронної операції.
// Колбеки можуть обробляти декілька подій, проміси пов'язані тільки з однією подією.

//#endregion

//#region Промісифікація функцій
// Доповнимо код роботи з функцією fetchUserFromServer її викликом і передачею аргументів для імені користувача і колбеків обробки результату.
{
  const fetchUserFromServer = (username, onSuccess, onError) => {
    console.log(`Fetching data for ${username}`);
  };

  fetchUserFromServer(
    "Mango",
    (user) => console.log(user),
    (error) => console.error(error)
  );
}
{
  //Далі використаємо таймер для імітації асинхронної операції та викличемо колбеки за умовою. Ми можемо змінити значення змінної isSuccess на true або false, щоб імітувати статус асинхронної операції.

  const fetchUserFromServer = (username, onSuccess, onError) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        onSuccess("success value");
      } else {
        onError("error");
      }
    }, 2000);
  };

  fetchUserFromServer(
    "Mango",
    (user) => console.log(user),
    (error) => console.error(error)
  );
}

//Як ми вже зазначали, зараз функція знає надто багато про той код, який використовуватиме результат її роботи. Тобто ми передаємо щось усередину функції (колбеки) і сподіваємося, що воно відпрацює правильно, що ненадійно. Давай промісифікуємо її.
// Для початку напишемо код, який поверне з функції проміс. Для цього створюємо в ній проміс через new Promise і повертаємо його.

{
  const fetchUserFromServer = (username) => {
    return new Promise((resolve, reject) => {
      console.log(`Fetching data for ${username}`);

      setTimeout(() => {
        // Change value of isSuccess variable to simulate request status
        const isSuccess = true;

        if (isSuccess) {
          resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
        } else {
          reject("error"); // значенням параметра reject буде колбек-функція методу catch()
        }
      }, 2000);
    });
  };

  fetchUserFromServer("Mango")
    .then((user) => console.log(user))
    .catch((error) => console.error(error));
}

//Більшість сучасних бібліотек ґрунтуються на промісах. У разі виклику методу для асинхронної операції його результат доступний як проміс, якому можна причепити обробники в методах then() і catch().

//#endregion

//#region Promise.resolve() і Promise.reject()
// Promise.resolve() і Promise.reject() — це статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються. Вони працюють аналогічно new Promise(), повертають проміс, але мають коротший синтаксис.

//Так створюється успішно виконаний проміс через new Promise():
{
  //new Promise(resolve => resolve("success value"))
  //.then(value => console.log(value));
  //.catch(error => console.log(error));
}
//Так створюється успішно виконаний проміс через Promise.resolve():
{
  //Promise.resolve("success value");
  //.then(value => console.log(value));
  //	.catch(error => console.log(error));
}

//Так створюється проміс, що виконався з помилкою через new Promise():
{
  // new Promise((resolve, reject) => reject("error"));
  //.then(value => console.log(value));
  //.catch(error => console.log(error));
}
//Так створюється проміс, що виконався з помилкою через Promise.reject():
{
  //Promise.reject("error");
  //.then(value => console.log(value));
  //.catch(error => console.log(error));
}

//#endregion

//#region Промісифікація синхронних функцій
// Методи Promise.resolve і Promise.reject використовуються для промісифікації функцій, коли не треба чекати результату асинхронної операції, а просто необхідно побудувати ланцюжок промісів, і вже є початкове значення.
// Виконаємо рефакторинг коду функції, яка приймає два колбеки та викликає їх за умовою.
{
  const makeGreeting = (guestName, onSuccess, onError) => {
    if (!guestName) {
      onError("Guest name must not be empty");
    } else {
      onSuccess(`Welcome ${guestName}`);
    }
  };

  makeGreeting(
    "Mango",
    (greeting) => console.log(greeting),
    (error) => console.error(error)
  );
}

//Зробимо промісифікацію функції makeGreeting для того, щоб повністю усунути її залежність від зовнішнього коду. Вона повинна просто повертати проміс.
{
  const makeGreeting = (guestName) => {
    return new Promise((resolve, reject) => {
      if (!guestName) {
        reject("Guest name must not be empty");
      } else {
        resolve(`Welcome ${guestName}`);
      }
    });
  };

  makeGreeting("Mango")
    .then((greeting) => console.log(greeting))
    .catch((error) => console.error(error));
}

//А тепер використаємо методи класу Promise, щоб скоротити кількість коду.
{
  const makeGreeting = (guestName) => {
    if (!guestName) {
      return Promise.reject("Guest name must not be empty");
    } else {
      return Promise.resolve(`Welcome ${guestName}`);
    }
  };

  makeGreeting("Mango")
    .then((greeting) => console.log(greeting))
    .catch((error) => console.error(error));
}
//Замість того щоб приймати колбеки та викликати їх, функція повертає (return) у зовнішній код проміс. Подальша доля цього промісу вже не стосується функції.
//#endregion

//#region Створення промісів із затримкою

//Створимо функцію makePromise(options), яка буде створювати і повертати проміси з різною затримкою виконання.
{
  const makePromise = (options) => {
    // ...
  };

  makePromise({
    value: "Some value",
    delay: 2000,
    shouldResolve: true,
  });
}
//Функція приймає один параметр options . Це об'єкт із властивостями, в яких будемо передавати наступні значення:
// value — значення, яке буде значенням проміса.
// delay — затримка в мілісекундах, після якої буде виконуватися проміс.
// shouldResolve — булеве значення, що вказує, чи повинен проміс виконатися (true), або бути відхиленим (false).

//Доповнимо код функції так, щоб вона повертала проміс.
{
  const makePromise = (options) => {
    return new Promise((resolve, reject) => {
      // ...
    });
  };
}

//Далі зробимо так, щоб проміс виконувався або був відхиленим зі значенням, вказаним у властивості value після затримки в delay мілісекунд. За замовчуванням проміс виконуватиметься успішно, для цього вказуємо значення за замовчуванням true для властивості shouldResolve при деструктуризації.
{
  const makePromise = ({ value, delay, shouldResolve = true }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(value);
        } else {
          reject(value);
        }
      }, delay);
    });
  };
}

//Отже, це просто перевикористана функція, яка містить у собі код створення промісу із затримкою, щоб не писати цей код щоразу, коли потрібно створити проміс.
// Перевіримо роботу функції, створивши кілька промісів з різним часом затримки та значеннями.
{
  const makePromise = ({ value, delay, shouldResolve = true }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(value);
        } else {
          reject(value);
        }
      }, delay);
    });
  };

  makePromise({ value: "A", delay: 1000 })
    .then((value) => console.log(value)) // "A"
    .catch((error) => console.log(error));

  makePromise({ value: "B", delay: 3000 })
    .then((value) => console.log(value)) // "B"
    .catch((error) => console.log(error));

  makePromise({ value: "C", delay: 2000, shouldResolve: false })
    .then((value) => console.log(value))
    .catch((error) => console.log(error)); // "C"
}

//Без функції цей же код виглядав би ось так:
{
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fulfilled A");
    }, 1000);
  })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fulfilled B");
    }, 3000);
  })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected C");
    }, 2000);
  })
    .then((value) => console.log(value))
    .catch((error) => console.log(error)); // "Rejected C"
}
//#endregion
