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

//#endregion
