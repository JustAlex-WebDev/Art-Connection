import React from "react";
import FavouritesItems from "../components/FavouritesItems";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Slides from "../components/Slides";
import Footer from "../components/Footer";

const Favourites = () => {
  return (
    <>
      <PageTransition />
      <Navbar />
      <Slides />
      <FavouritesItems />
      <Footer />
    </>
  );
};

export default Favourites;
