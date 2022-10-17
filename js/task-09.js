// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', changeColor);

function changeColor(event) {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}