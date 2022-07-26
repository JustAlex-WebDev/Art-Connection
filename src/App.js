import GlobalStyles from "./Components/Styles/Global";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import ShoppingCart from "./Components/ShoppingCart";
import ScrollToTop from "./Components/ScrollToTop";
import { useState, useEffect } from "react";

function App() {
  // Setting up the menu items array
  const [menu, setMenu] = useState(
    // Items
    [],
    []
  );

  // Setting up the cart items array
  const [cartMenu, setCartMenu] = useState(cartFromLocalStorage);

  // Setting up the on scroll animation of the header
  const [headerBackground, setHeaderBackground] = useState(false);
  const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

  // Fetch Menu
  const fetchMenu = async () => {
    const res = await fetch("http://localhost:5000/menu");
    const data = await res.json();

    return data;
  };

  // Add To Cart
  const addToCart = async (id) => {
    // const res = await fetch(`http://localhost:5000/menu/${id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(id),
    // });
    // const data = await res;
    // setCartMenu([...cartMenu, data]);

    if (cartMenu.some((item) => item.id === id)) {
      alert("This item is already in your shopping bag!");
    } else {
      // console.log(id);
      const item = menu.find((product) => product.id === id);
      const newCartMenu = { ...item, numberOfUnits: 1 };
      // console.log(newCartItem);
      setCartMenu([...cartMenu, newCartMenu]);
    }
  };

  // Delete From Cart
  const deleteFromCart = async (id) => {
    // await fetch("http://localhost:5000/menu/${id}", {
    //   method: "DELETE",
    // });

    setCartMenu(cartMenu.filter((item) => item.id !== id));
  };

  // Change the number of units in the cart
  const numberOfUnits = (numberOfUnits) => {
    setCartMenu(
      cartMenu.map((item) =>
        numberOfUnits.id === item.id
          ? { numberOfUnits: numberOfUnits + 1 }
          : item
      )
    );
  };

  // Header-Background styles on scroll
  const scrollHeader = () => {
    if (window.scrollY >= 15) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  window.addEventListener("scroll", scrollHeader);

  // Scroll To Top Btn
  const scollToTopBtn = () => {
    if (window.scrollY >= 40) {
      setScrollToTopBtn(true);
    } else {
      setScrollToTopBtn(false);
    }
  };

  window.addEventListener("scroll", scollToTopBtn);

  // Scroll To Top
  const scollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <GlobalStyles />
      <Header headerBackground={headerBackground} />
      <Menu menu={menu} />
      <ShoppingCart
        cartMenu={cartMenu}
        onCartDelete={deleteFromCart}
        onNumberOfUnits={numberOfUnits}
      />
      <ScrollToTop scrollToTopBtn={scrollToTopBtn} onScollToTop={scollToTop} />
    </>
  );
}

export default App;
