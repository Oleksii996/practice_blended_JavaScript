//Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

{
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];

  const hexColors = [];
  const rgbColors = [];

  for (const color of colors) {
    hexColors.push(color.hex); // додаємо значення властивості hex
    rgbColors.push(color.rgb); // додаємо значення властивості rgb
  }

  console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
  console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
}
