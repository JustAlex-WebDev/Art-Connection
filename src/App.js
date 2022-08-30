import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import Favourites from "./routes/Favourites";
import ShoppingCart from "./routes/ShoppingCart";
import { paintings } from "./data";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [items, setItems] = useState(paintings);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
