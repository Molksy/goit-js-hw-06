const categories = document.getElementById('categories').children;

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}
