//Логічні оператори (Logical operators)

//#region Явне перетворення - функція Boolean()
//Логічні значення
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

//Числа
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

{
  if (null) {
    console.log("Block if");
  } else {
    console.log("Block else"); // спрацює цей блок (Значення в умові інструкцій if приводиться до false)
  }

  if (0) {
    console.log("Block if");
  } else {
    console.log("Block else"); // спрацює цей блок (Значення в умові інструкцій if приводиться до false)
  }
}

{
  if (5) {
    console.log("Block if"); // спрацює цей блок (Значення в умові інструкцій if приводиться до true)
  } else {
    console.log("Block else");
  }
}

//Рядки
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

{
  if ("") {
    console.log("Block if");
  } else {
    console.log("Block else"); // спрацює цей блок (Значення в умові інструкцій if приводиться до false)
  }
}

{
  if ("batman") {
    console.log("Block if"); // спрацює цей блок (Значення в умові інструкцій if приводиться до true)
  } else {
    console.log("Block else");
  }
}

//#endregion

//#region Логічне «І» (AND) - оператор &&
//Обчислення відбуваються зліва направо, тому результатом буде значення правого операнда.
{
  console.log("hello" && 5); // 5
  console.log(5 && "hello"); // "hello"

  console.log("mango" && "poly"); // "poly"
  console.log("poly" && "mango"); // "mango"

  console.log(3 && true); // true
  console.log(true && 3); // 3
}

//А ось у цьому прикладі один із операндів буде приведений до false, отже, результатом буде хибний операнд.
{
  console.log("hello" && 0); // 0
  console.log(0 && "hello"); // 0

  console.log(3 && false); // false
  console.log(false && 3); // false

  console.log(0 && ""); // 0
  console.log("" && 0); // ""
}

//Варто зазначити, що якщо операндами є вирази, то спочатку вони обчислюються, а потім їх результати будуть порівнюватися оператором &&.
{
  const a = 20;
  console.log(a > 10 && a < 30); // true && true -> true

  const b = 50;
  console.log(b > 10 && b < 30); // true && false -> false
  console.log(b > 80 && b < 120); // false && true -> false
}

//Якщо б ми створювали функцію для перевірки типу екрану, то вона виглядала би наступним чином:
{
  function getScreenType(screenWidth) {
    const sm = 320;
    const md = 768;
    const lg = 1200;

    if (screenWidth <= sm) {
      return "Mobile screen";
    } else if (screenWidth > sm && screenWidth <= md) {
      return "Tablet screen";
    } else if (screenWidth > md && screenWidth <= lg) {
      return "Desktop screen";
    } else {
      return "Godzilla screen";
    }
  }

  console.log(getScreenType(700)); // "Tablet screen"
  console.log(getScreenType(1200)); // "Desktop screen"
  console.log(getScreenType(1500)); // "Godzilla screen"
  console.log(getScreenType(320)); // "Mobile screen"
}
//#endregion

//#region Логічне «АБО» (OR) - оператор ||
//Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО» буде цей операнд.
{
  console.log(true || false); // true
  console.log(false || true); // true

  console.log(5 || false); // 5
  console.log(false || 5); // 5

  console.log("hello" || 0); // "hello"
  console.log(0 || "hello"); // "hello"
}

//Як тільки логічний оператор “АБО” знайшов операнд, який перетворюється на true, він зупиняється та повертає його значення.
{
  console.log(5 || 3); // 5
  console.log(3 || 5); // 3

  console.log("mango" || "poly"); // "mango"
  console.log("poly" || "mango"); // "poly"
}

//Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.
{
  console.log(0 || false); // false
  console.log(false || 0); // 0

  console.log(null || ""); // ""
  console.log("" || null); // null
}

//На практиці оператор «АБО» також використовується для перевірки множинних умов.
{
  const a = 5;
  console.log(a < 10 || a > 30); // true || false -> true

  const b = 50;
  console.log(b < 10 || b > 30); // false || true -> true

  const c = 20;
  console.log(c - 20 || c * 2); // 0 || 40 -> 40
}

//Приклад функції перевірки типу підписки користувача:
{
  function checkAccess(subType) {
    return subType === "pro" || subType === "vip";
  }
  console.log(checkAccess("pro")); // true
  console.log(checkAccess("starter")); // false
  console.log(checkAccess("vip")); // true
  console.log(checkAccess("free")); // false
}
//#endregion

//#region Логічне «НІ» (NOT) - оператор !
//Логічне «НІ» (!) — це унарний оператор — він виконує операцію над одним операндом праворуч.
{
  console.log(!true); // false
  console.log(!false); // true
  console.log(!3); // !3 -> !true -> false
  console.log(!"Mango"); // !"Mango" -> !true -> false
  console.log(!0); // !0 -> !false -> true
  console.log(!""); // !"" -> !false -> true
  console.log(!null); // !null -> !false -> true
}

//Наприклад, можна дозволити написати повідомлення в чаті, лише якщо користувач не заблокований.
{
  const isBlocked = false;
  const canChat = !isBlocked; // !false -> true

  if (canChat) {
    console.log("Can type in chat!"); // спрацює цей блок (Значення в умові інструкцій if приводиться до true)
  } else {
    console.log("Blocked from typing in chat!");
  }
}
//Якщо значення змінної isBlocked — true, користувач заблокований. У такому разі результат обчислення canChat буде false.
{
  const isBlocked = true;
  const canChat = !isBlocked; // !true -> false

  if (canChat) {
    console.log("Can type in chat!");
  } else {
    console.log("Blocked from typing in chat!"); // спрацює цей блок (Значення в умові інструкцій if приводиться до false)
  }
}

//Функція яка перевіряє чи може користувач писати в чаті.
{
  function canUserChat(isOnline, isBlocked) {
    const canChat = isOnline && !isBlocked;

    if (canChat) {
      return "Can type in chat!";
    } else {
      return "Blocked from typing in chat!";
    }
  }
  console.log(canUserChat(true, false)); // "Can type in chat!"
  console.log(canUserChat(true, true)); // "Blocked from typing in chat!"
  console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
  console.log(canUserChat(false, true)); // "Blocked from typing in chat!"
}
//#endregion
