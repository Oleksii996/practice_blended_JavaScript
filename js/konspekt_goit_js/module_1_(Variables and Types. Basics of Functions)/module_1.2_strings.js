//#region Конкатенація рядків (String Concatenation)
{
  const message = "Mango " + "is" + " happy";
  console.log(message); // "Mango is happy"

  const age = 24;
  const text = "Poly is " + age + " years old!";
  console.log(text); // "Mango is happy"

  console.log("Mango" + 55); // "Mango55"
  console.log("Mango" + true); // "Mangotrue"

  console.log(1 + "2"); // "12"
  console.log(1 + "2" + 4); // "124"
  console.log(1 + 2 + "4"); // "34"
}
//#endregion

//#region Перетворення типів: рядки (Type Conversion: Strings)
{
  console.log(String(5)); // "5"
  console.log(String(true)); // "true"
  console.log(String(false)); // "false"
  console.log(String(null)); // "null"
  console.log(String(undefined)); // "undefined"

  console.log("5" + 3); // "53"
  console.log("5" + true); // "5true"
  console.log("5" + false); // "5false"
  console.log("5" + null); // "5null"
  console.log("5" + undefined); // "5undefined"
}
//#endregion

//#region Шаблонні рядки (Template Literals/Strings)
{
  const guestName = "Mango";
  const roomNumber = 207;
  const greeting =
    "Welcome " + guestName + ", your room number is " + roomNumber + "!";
  console.log(greeting); // "Welcome Mango, your room number is 207!"
}
{
  const guestName = "Mango";
  const roomNumber = 207;
  const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
  console.log(greeting); // "Welcome Mango, your room number is 207!"
}
//#endregion

//#region Властивості рядків (String Properties)

// Довжина рядка (length)
{
  const productName = "Repair droid";
  // Якщо у змінній зберігається рядок
  console.log(productName.length); // 12
  // Якщо рядковий літерал
  console.log("Repair droid".length); // 12
}
{
  const username = "Poly";
  const message = `Username ${username} is ${
    username.length + 2
  } characters long`;
  console.log(message); // Username Poly is 6 characters long
}

//Властивість: Індексація рядків (index)
{
  const product = "Repair droid";
  console.log(product[0]); // 'R'
  console.log(product[5]); // 'r'
  console.log(product[11]); // 'd'
}
{
  const product = "Repair droid";
  const lastElementIndex = product.length - 1;
  console.log(product[lastElementIndex]); // 'd'
}
{
  const product = "Repair droid";
  console.log(product[product.length - 1]); // 'd'
}
{
  const courseTopic = "JavaScript essentials";

  const courseTopicLength = courseTopic.length;
  const firstElement = courseTopic[0];
  const lastElement = courseTopic[courseTopic.length - 1];

  console.log(courseTopic.length); // '21'
  console.log(courseTopic[0]); // 'J'
  console.log(courseTopic[courseTopic.length - 1]); // 's'
}

//Властивість: Незмінність рядків (immutability)
{
  let product = "Droid";
  console.log(product); // "Droid"

  // Це не має жодного ефекту
  product[2] = "G";
  console.log(product); // "Droid"
}
//#endregion
