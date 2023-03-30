const menu = [
    {
        id: 1,
        title: 'eggs',
        category: 'breakfast',
        price: 12.59,
        img: './images/my-1.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.'
    },
    {
        id: 2,
        title: 'big salad ',
        category: 'lunch',
        price: 12.59,
        img: './images/my-2.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.'
    },
    {
        id: 3,
        title: 'fried dish',
        category: 'dinner',
        price: 12.59,
        img: './images/my-3.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.'
    },
    {
        id: 4,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.59,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.'
    },
    {
        id: 5,
        title: 'dinner double',
        category: 'dessert',
        price: 13.99,
        img: './images/item-2.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.'
    },
    {
        id: 6,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 13.99,
        img: './images/item-3.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.'
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
     </article>
       `
    });
    // console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}


const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];

const displayMenuButtons = () => {
    let menuButtons = categories.map((category) => {
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
      })
    console.log('displayButtons before join', menuButtons);
    menuButtons = menuButtons.join('');
    console.log('displayButtons after join\n', menuButtons);
    btnContainer.innerHTML = menuButtons;
}


window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});



