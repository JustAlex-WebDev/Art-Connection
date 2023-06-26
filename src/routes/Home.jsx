import React from "react";
import Footer from "../components/Footer";
import ItemSearch from "../components/ItemSearch";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Slides from "../components/Slides";

const Home = ({ items }) => {
  return (
    <>
      <PageTransition />
      <Navbar />
      <Slides />
      <ItemSearch items={items} />
      <Footer />
    </>
  );
};

export default Home;
