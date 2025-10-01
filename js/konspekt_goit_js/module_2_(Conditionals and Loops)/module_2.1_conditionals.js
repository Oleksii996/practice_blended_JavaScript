//#region Розгалуження - Інструкція if (якщо) - це найпростіший спосіб реалізувати розгалуження коду.
{
  let price = 0;
  const subscription = "pro";

  if (subscription === "pro") {
    price = 100;
  }
  console.log(price); // 100
}
//Якщо умова перетворюється до false, код у фігурних дужках не буде виконуватися і price залишиться рівним 0.
{
  let price = 0;
  const subscription = "free";

  if (subscription === "pro") {
    price = 100;
  }
  console.log(price); // 0
}
//Напишемо функцію яка отримує обраний тарифний план у параметрі subscription та повертає його вартість.
{
  function getPrice(subscription) {
    let price = 0;

    if (subscription === "pro") {
      price = 100;
    }

    return price;
  }
  console.log(getPrice("free")); // 0
  console.log(getPrice("pro")); // 100
}
//#endregion
