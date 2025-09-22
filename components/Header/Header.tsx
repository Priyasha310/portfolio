"use client";
import React, { useEffect, useRef } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@/assets/images/Priyasha_Parnavi_profile.jpg";
import Link from "next/link";
import Typed from "typed.js";

const Navbar = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ["a Web Designer", "a Web Developer", "a Learner"],
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
            <p>Hello! I&apos;m </p>
            <h1>
              Priyasha Parnavi,
              <br />
              <span ref={typedRef}></span>
            </h1>
            <p>
              I&apos;m an enthusiastic and passionate web developer and very
              inquisitive person. Ready to learn new technologies.
            </p>
            <br />
            <a
              href={`/PRIYASHA_PARNAVI-resume.pdf`}
              target="_blank"
              className={`${styles.btn}`}
            >
              {" "}
              Resume
            </a>
            <Link
              href="mailto:priyashaparnavi299@gmail.com"
              target="_blank"
              className={`${styles.btn}`}
            >
              {" "}
              Mail me{" "}
            </Link>
          </div>

          <div className={styles.imgContainer}>
            <Image src={logo} alt="" />
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 mt-4"></hr>
    </>
  );
};

export default Navbar;
