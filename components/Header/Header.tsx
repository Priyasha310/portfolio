"use client";
import React, { useEffect, useRef } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@/assets/images/Priyasha_Parnavi_profile.png";
import Link from "next/link";
import Typed from "typed.js";
import { HEADER_TEXT } from "./header.constants";

const Navbar = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: HEADER_TEXT.typedStrings,
        typeSpeed: 70,
        loop: true,
      };
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <div id="home" className={styles.header}>
        <div className={styles.row}>
          <div className={styles.smImg}>
            <Image src={logo} alt="Priyasha" />
          </div>

          <div className={styles.headerText}>
            <p>{HEADER_TEXT.hello}</p>
            <h1>
              {HEADER_TEXT.name}
              <br />
              <span ref={typedRef}></span>
            </h1>
            <p>{HEADER_TEXT.description}</p>
            <br />
            <a
              href={HEADER_TEXT.resumeLink}
              target="_blank"
              className={`${styles.btn}`}
            >
              {HEADER_TEXT.resumeBtn}
            </a>
            <Link
              href={HEADER_TEXT.mail}
              target="_blank"
              className={`${styles.btn}`}
            >
              {HEADER_TEXT.mailBtn}
            </Link>
          </div>

          <div className={styles.imgContainer}>
            <Image src={logo} alt="" />
          </div>
        </div>
      </div>
      <hr className={HEADER_TEXT.hrClass}></hr>
    </>
  );
};

export default Navbar;
