"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { NAVBAR_TEXT } from "./navbar.constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <div id={styles.navbar}>
      <div className={styles.header}>
        <div className={`${styles.container}`}>
          <nav>
            <div className={styles.logo}>{NAVBAR_TEXT.logo}</div>
            {/* <Image className={styles.logo} src={logo} alt=''/>             */}
            <ul
              id={styles.sideMenu}
              style={{ right: isMenuOpen ? "0" : "-220px" }}
            >
              {NAVBAR_TEXT.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <span className={styles.menu} onClick={handleMenuClose}>
                {NAVBAR_TEXT.close}
              </span>
            </ul>
            <span className={styles.menu} onClick={handleMenuOpen}>
              {NAVBAR_TEXT.menu}
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
