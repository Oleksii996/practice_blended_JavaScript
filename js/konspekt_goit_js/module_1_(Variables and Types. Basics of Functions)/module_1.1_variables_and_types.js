//#region Оголошення змінної (Declaration a Value)
{
  let price = 20;
  console.log(price); // 20

  let age = 20;
  console.log(age); // 20

  const username = "Mango";
  console.log(username); // "Mango"
}
//#endregion

//#region Перевизначення змінної (Reassigning a Value)
{
  let username = "Mango";
  username = "Poly";
  console.log(username); // "Poly"
}
{
  let productPrice = "1500EUR";
  productPrice = "1800USD";
  console.log(productPrice); // "Poly"
}
//#endregion

//#region Типи даних (Data Types)
// Number
{
  const age = 20;
  const salary = 3710.84;
}
// String
{
  const username = "Mango995";
  const description = "JavaScript is awesome!";
}
// Boolean
{
  const isModalOpen = true;
  const isLoggedIn = false;
}

// Null and Undefined
{
  let value = null;
  console.log(value); // null
}
{
  let value;
  console.log(value); // undefined
}
//#endregion

//#region Math operations
{
  const x = 8;
  const y = 5;
  console.log(x - y); // 3
}
{
  const x = 8;
  const y = 5;
  console.log(x + y); // 13
}
{
  const x = 8;
  const y = 5;
  console.log(x * y); // 40
}
{
  const x = 8;
  const y = 5;
  console.log(x / y); // 1.6
}
{
  const x = 8;
  const y = 5;
  console.log(x ** y); // 32768
}
//#endregion
