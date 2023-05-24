const url = 'https://course-api.com/javascript-store-products';

window.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('response', response);
    console.log('data', data);
    displayItems(data);
  } catch (error) {
    console.error(error);
  }
});

const displayItems = (items) => {
  const element = document.querySelector('.products-container');
  const displayData = items
    .map((item) => {
      console.log(item.fields);
      const { price, name } = item.fields;
      const { url } = item.fields.image[0];
      return `
      <div class="single-product">
        <img 
          src="${url}"
          class="single-product-img img"
          alt="high-back bench"
        />
        <footer>
          <h5 class="name">${name}</h5>
          <span class="price">${price}</span>
        </footer>
      </div>`;
    })
    .join('');
  console.log('displayData', displayData);
  element.innerHTML = displayData;
};
