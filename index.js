const search = document.querySelector('.search');
const searchInput = document.querySelector('.searchInput');

search.addEventListener('click', () => {
  searchInput.value = '';
});

const sliderBackground = document.querySelector('.slider');

const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 119,
    desc: 'Classic Nike Air Force shoes blend timeless design with superior comfort, featuring durable materials and signature cushioning.',
    colors: [
      {
        code: 'black',
        img: './img/air.png',
      },
      {
        code: 'darkblue',
        img: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 149,
    desc: 'Iconic Jordan shoes deliver unmatched performance and style, crafted for basketball enthusiasts and streetwear lovers alike.',
    colors: [
      {
        code: 'lightgray',
        img: './img/jordan.png',
      },
      {
        code: 'green',
        img: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: 109,
    desc: 'Retro-inspired Nike Blazers combine sleek design with premium materials, perfect for casual and sporty looks.',
    colors: [
      {
        code: 'lightgray',
        img: './img/blazer.png',
      },
      {
        code: 'green',
        img: './img/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 129,
    desc: 'Sustainable Nike Crater shoes feature eco-friendly materials and innovative design, offering style with a commitment to the planet.',
    colors: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'lightgray',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 99,
    desc: 'Unique Nike Hippie shoes stand out with bold designs and sustainable craftsmanship, merging comfort, style, and environmental responsibility.',
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');
const currentProductDesc = document.querySelector('.productDesc');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    choosenProduct = products[index];

    menuItems.forEach((item, index) => {
      item.style.color = 'lightgray';
      if (choosenProduct.id == 1) {
        sliderBackground.style.background =
          'radial-gradient(circle, #369e6133 10%, rgba(0, 0, 0, 0) 60%),url("img/index-background.jpg")';
      }
      if (choosenProduct.id == 2) {
        sliderBackground.style.background =
          'radial-gradient(circle, #66339933 10%, rgba(0, 0, 0, 0) 60%),url("img/index-background.jpg")';
      }
      if (choosenProduct.id == 3) {
        sliderBackground.style.background =
          'radial-gradient(circle, #00808033 10%, rgba(0, 0, 0, 0) 60%),url("img/index-background.jpg")';
      }
      if (choosenProduct.id == 4) {
        sliderBackground.style.background =
          'radial-gradient(circle, #6495ed33 10%, rgba(0, 0, 0, 0) 60%),url("img/index-background.jpg")';
      }
      if (choosenProduct.id == 5) {
        sliderBackground.style.background =
          'radial-gradient(circle, #7c735033 10%, rgba(0, 0, 0, 0) 60%),url("img/index-background.jpg")';
      }
    });
    item.style.color = 'white';

    //changee the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = '$' + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.desc;

    //assigning new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');
const payButton = document.querySelector('.payButton');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});

payButton.addEventListener('click', () => {
  if (payment.checkValidity()) {
    payment.style.display = 'none';
    payment.reset();
  }
});

window.addEventListener('scroll', () => {
  const newSeason = document.querySelector('.newSeason');
  const scrollPosition = window.scrollY;

  // Adjust the vertical background position based on the scroll
  newSeason.style.backgroundPosition = `center ${scrollPosition * 0.7}px`;
});
