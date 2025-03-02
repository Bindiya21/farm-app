import React from "react";
import {useState} from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;