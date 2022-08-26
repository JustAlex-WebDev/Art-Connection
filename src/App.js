import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import Favourites from "./routes/Home";
import Shoppingcart from "./routes/Home";
import { paintings } from "./data";

function App() {
  const [items, setItems] = useState(paintings);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
      </Routes>
    </div>
  );
}

export default App;
