// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');
input.addEventListener('input', (event) => {
    if (event.target.value !== '') {
    text.textContent = event.target.value;}
    else {text.textContent = 'Anonymous';}
});     