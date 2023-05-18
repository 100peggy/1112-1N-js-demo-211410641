const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
//const options = {
	//method: 'GET',
	//headers: {
		//'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		//'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	//}
//};
try {
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data.categories);
  displayItems(data.categories);
} catch (error) {
	console.error(error);
}
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strCategory } = item;
      return `<p>${strCategory}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
