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
  const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
  console.log(greeting); // "Welcome Mango, your room number is 207!"
}
//#endregion
