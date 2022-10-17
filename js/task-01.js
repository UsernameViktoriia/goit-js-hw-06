// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const ulRef = document.querySelector('ul');
const ulQuantity = ulRef.children.length;
console.log(`Number of categories: ${ulQuantity}`)

const liEl = document.querySelectorAll('.item');

[...liEl].forEach(item => {
    const titleItem = item.firstElementChild.textContent;
    console.log(`Category: ${titleItem}`);
    const listLegth = item.lastElementChild.children.length;
    console.log(`Elements: ${listLegth}`);
});
