import React from "react";
import FavouritesItems from "../components/FavouritesItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Slides from "../components/Slides";

const Favourites: React.FC = () => {
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
