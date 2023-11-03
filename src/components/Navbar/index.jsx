import React from "react";
import styles from "./Navbar.module.scss";
import { ChevronLeft, ChevronRight, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <a href="/" className={styles.navbar__logo}>
          <p>
            <ChevronLeft /> cornershop
            <ChevronRight />
          </p>
        </a>
        <div className={styles.navbar__right}>
          <a href="/cart">
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </a>
          <img
            className={styles.navbar__avatar}
            src="https://source.unsplash.com/100x100/?avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
