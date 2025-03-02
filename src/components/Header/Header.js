import React from "react";
import styles from "../Header/Header.module.scss";
const Header = ({ menuOpen, setMenuOpen }) => (
    <header>
      <nav>
        <button className={`${styles.menu_toggle}`} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={menuOpen ? styles.open : ""}>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
        <button className={styles.contact}>
          Contact us --
        </button>
      </nav>
    </header>
  );
  
export default Header;