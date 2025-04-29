import React from "react";
import styles from "../Header/Header.module.scss";
const Header = ({ menuOpen, setMenuOpen }) => (
    <header>
      <nav>
        <button className={`${styles.menu_toggle}`} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={menuOpen ? styles.open : ""}>
          <li><a href="/">Home</a></li>
          <li>About</li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
  
export default Header;