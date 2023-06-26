import React from "react";
import Footer from "../components/Footer";
import ItemSearch from "../components/ItemSearch";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Slides from "../components/Slides";

const Home = () => {
  return (
    <>
      <PageTransition />
      <Navbar />
      <Slides />
      <ItemSearch />
      <Footer />
    </>
  );
};

export default Home;
