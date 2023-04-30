const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});
ul.append(...liElements);

// Тест 1: перевірка кількості елементів у списку
console.log(document.querySelectorAll('#ingredients li').length === ingredients.length);

// Тест 2: перевірка текстового вмісту та класу елементів у списку
document.querySelectorAll('#ingredients li').forEach((li, index) => {
  console.log(
    li.textContent === ingredients[index] &&
    li.classList.contains('item')
  );
});

