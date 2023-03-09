const menu = [
    {
        id: 1,
        title: 'egg. salad',
        category: 'breakfast',
        price: 12.59,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo, aperiam similique odit corporis dolores neque eveniet quam beatae sunt obcaecati, odio provident nam nesciunt recusandae, et ea placeat totam?'
    },
    {
        id: 2,
        title: 'muffin',
        category: 'lunch',
        price: 16.59,
        img: './images/item-2.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo, aperiam similique odit corporis dolores neque eveniet quam beatae sunt obcaecati, odio provident nam nesciunt recusandae, et ea placeat totam?'
    },
    {
        id: 3,
        title: 'hamburger',
        category: 'dinner',
        price: 14.59,
        img: './images/item-3.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo, aperiam similique odit corporis dolores neque eveniet quam beatae sunt obcaecati, odio provident nam nesciunt recusandae, et ea placeat totam?'
    },
    {
        id: 4,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.59,
        img: './images/item-4.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur magni necessitatibus quasi alias repellat distinctio odio praesentium doloribus nihil eum optio, eius sapiente delectus obcaecati? Porro officia consequuntur laborum placeat?'
    },
    {   
        id: 5,
        title: 'dinner double',
        category: 'dinner',
        price: 13.95,
        img: './images/item-5.jpeg',
        remote_img: '',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem temporibus accusamus molestiae obcaecati nobis dolore nisi, id minima distinctio reprehenderit incidunt porro consequatur quidem libero nulla adipisci dolorum soluta.'
    },
    {
        id: 6,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 13.99,
        img: './images/item-6.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad voluptas repellendus, sapiente cupiditate amet illum. Recusandae quidem enim impedit vitae illum obcaecati adipisci dolorum officia, commodi, fuga odio quisquam.'
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`
    });
   // console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
   // console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

//const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
const categories = ['all', ...new Set(menu.map((item) => item.category))];


const displayMenuButtons = (data) => {
    let displayMenu = data.map( (category) =>{
        return `
        <button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    });

    console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    btnContainer.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons(categories);
});