import React from "react";
import ItemSearch from "../components/ItemSearch";

const Home = ({ items }) => {
  return (
    <div>
      <ItemSearch items={items} />
    </div>
  );
};

export default Home;
