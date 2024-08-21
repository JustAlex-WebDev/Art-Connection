import React from "react";
import ShoppingCartItems from "../components/ShoppingCartItems";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Slides from "../components/Slides";
import Footer from "../components/Footer";

const ShoppingCart: React.FC = () => {
  return (
    <>
      <PageTransition />
      <Navbar />
      <Slides />
      <ShoppingCartItems />
      <Footer />
    </>
  );
};

export default ShoppingCart;
