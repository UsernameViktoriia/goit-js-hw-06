// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes)
let boxSize = 30;

function createBoxes() { 
  let boxes = [];
  let amount = inputEl.value;
  for (let i = 0; i < amount; i += 1)
{
  const divEl = `<div style = "width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
  boxSize += 10;
  boxes.push(divEl)
} 
  divBoxes.insertAdjacentHTML("beforeend", boxes.join(""));
 };

 btnDestroy.addEventListener('click', destroyBoxes)
 function destroyBoxes() {
  boxSize = 30;
  inputEl.value = "";
  divBoxes.innerHTML = "";
 }