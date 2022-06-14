// Items
const menu = [
  {
    id: 1,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image1.jpg",
  },
  {
    id: 2,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image2.jpg",
  },
  {
    id: 3,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image3.jpg",
  },
  {
    id: 4,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image4.jpg",
  },
  {
    id: 5,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image5.jpg",
  },
  {
    id: 6,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image6.jpg",
  },
  {
    id: 7,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image7.jpg",
  },
  {
    id: 8,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image8.jpg",
  },
  {
    id: 9,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image9.jpg",
  },
  {
    id: 10,
    name: "Product Name",
    // slug = "Slug",
    // material = "Material",
    color: "1 Color",
    desc: `Item Description`,
    price: "150",
    currency: "BGN",
    img: "/images/image10.jpg",
  },
];

// Display the items
const sectionCenter = document.querySelector(".section-center");
const cartItemsEl = document.querySelector(".cart-menu");
const subTotalEl = document.querySelector(".cart-description");
const favouritesTotalEl = document.querySelector(".favourites-description");
const favouritesItemsEl = document.querySelector(".favourites-menu");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map(function (item) {
      // console.log(item);
      return `<article class="menu-item">
      <div class = "img-container">
          <img src="${item.img}" class="photo" alt="" />
          <div class="image-overlay image-overlay-blur">
          <button class="btn overlay-btn" onclick="addToCart(${item.id})" title="Add to shopping cart">
              <span
                ><i
                  class="fa-solid fa-cart-shopping shoppingBag-icon overlay-icon"
                ></i></span
              >Add to cart
            </button>
          </div>
          </div>
          <div class="item-info-right" onclick="addToFavourites(${item.id})" title="Add to favourites">
            <i class="fa-solid fa-heart heart-icon"></i>
          </div>
          <div class="item-info">
            <h3>${item.name}</h3>
            <h3 class="item-description">${item.desc}</h3>
            <h3 class="colors">${item.color}</h3>
            <h3 class="price">${item.price}<span class="currency"> ${item.currency}</span></h3>
          </div>
        </article>`;
    })
    .join("");
  sectionCenter.innerHTML = displayMenu;
}

// Nav styles on scroll
const scrollHeader = () => {
  const navbarElement = document.getElementById("header");
  if (this.scrollY >= 15) {
    navbarElement.classList.add("activated");
  } else {
    navbarElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Scroll to the top btn
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.onscroll = () => {
  scrollFunction();
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}
