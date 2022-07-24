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
    img: "/E-Commerce-Shop-REST-API-Project/images/image1.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image2.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image3.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image4.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image5.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image6.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image7.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image8.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image9.jpg",
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
    img: "/E-Commerce-Shop-REST-API-Project/images/image10.jpg",
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

// Cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart
function addToCart(id) {
  // Check if product already exists in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = menu.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}

// Update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // Save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// Render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // Clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
    <div class="img-container cart-container">
        <img src="${item.img}" class="photo" alt="" />
        <div class="item-info cart-item-info">
          <h3>${item.name}</h3>
          <h3 class="item-description">${item.desc}</h3>
          <h3 class="colors">${item.color}</h3>
          <h3 class="price cart-item-price">
            ${item.price}<span class="currency"> ${item.currency}</span>
          </h3>
          <div class="cart-quantity-container">
            <i class="fa-solid fa-minus minus-icon" onclick = "changeNumberOfUnits('minus',${item.id})"></i>
            <h3 class="cart-quantity">${item.numberOfUnits}</h3>
            <i class="fa-solid fa-plus plus-icon" onclick = "changeNumberOfUnits('plus',${item.id})"></i>
          </div>
          <div class="cart-icon-container">
            <i class="fa-solid fa-heart heart-icon cart-heart-icon" onclick="addToFavourites(${item.id})></i>
            <i class="fa-regular fa-trash-can cart-trash-icon" onclick = "removeItemFromCart(${item.id})"></i>
          </div>
        </div>
      </div>
    `;
  });
}

// Remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id != id);

  updateCart();
}

// Change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      // numberOfUnits: numberOfUnits,
      numberOfUnits,
    };
  });
  updateCart();
}

// Calculate and render the subtotal
function renderSubtotal() {
  let totalPrice = 0;
  let totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subTotalEl.innerHTML = `
  <h3 class="cart-count">${totalItems} items &nbsp;|</h3>
  <h3 class="cart-price">BGN ${totalPrice.toFixed(2)}</h3>
  `;
}

// Toggle the cart and the menu
function toggleCart() {
  var x = document.getElementById("shopping-cart");
  var y = document.getElementById("menu");
  var z = document.getElementById("favourites");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "none";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
  }
}

function toggleFavourites() {
  var x = document.getElementById("favourites");
  var y = document.getElementById("menu");
  var z = document.getElementById("shopping-cart");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "none";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
  }
}

// Favourites array
let favourites = JSON.parse(localStorage.getItem("FAVOURITES")) || [];
updateFavourites();

// Add to favourites
function addToFavourites(id) {
  if (favourites.some((item) => item.id === id)) {
    alert("This item is already in your favourites");
  } else {
    const item = menu.find((product) => product.id === id);
    favourites.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateFavourites();
}

// Update favourites
function updateFavourites() {
  renderFavouritesItems();
  renderFavouritesItemsCount();

  // Save cart to local storage
  localStorage.setItem("FAVOURITES", JSON.stringify(favourites));
}

// Render favourites items
function renderFavouritesItems() {
  favouritesItemsEl.innerHTML = ""; // Clear favourites element
  favourites.forEach((item) => {
    favouritesItemsEl.innerHTML += `
    <div class="img-container favourites-container">
        <img src="${item.img}" class="photo" alt="" />
        <div class="item-info cart-item-info">
          <h3>${item.name}</h3>
          <h3 class="item-description">${item.desc}</h3>
          <h3 class="colors">${item.color}</h3>
          <div class="favourites-icon-container">
            <i
              class="
                fa-solid fa-cart-shopping
                shoppingBag-icon
                favourites-cart-icon
              "
              onclick="addToCart(${item.id})"
            ></i>
            <i class="fa-regular fa-trash-can favourites-trash-icon" onclick = "removeItemFromFavourites(${item.id})"></i>
          </div>
        </div>
      </div>
    `;
  });
}

// Remove item from favourites
function removeItemFromFavourites(id) {
  favourites = favourites.filter((item) => item.id != id);

  updateFavourites();
}

// Calculate and render the number of items in the favourites
function renderFavouritesItemsCount() {
  let totalItems = 0;
  favourites.forEach((item) => {
    totalItems += item.numberOfUnits;
  });
  favouritesTotalEl.innerHTML = `
  <h3 class="favourites-count">${totalItems} items</h3>
  `;
}

// Add to favourites
// function changeColor(heartIcon) {
//   heartIcon.classList.toggle("changeColor");
// }

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
