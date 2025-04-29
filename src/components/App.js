import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";
import Contact from "./Contact";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;