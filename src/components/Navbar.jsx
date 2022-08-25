import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Art Connection</h1>
      </Link>
    </div>
  );
};

export default Navbar;
