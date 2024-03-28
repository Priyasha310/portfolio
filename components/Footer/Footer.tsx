import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import React from "react";
import linkedin from "@/assets/images/linkedin.png";
import git from "@/assets/images/github.png";
import mail from "@/assets/images/mail.png";
import up from "@/assets/images/up.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.socialIcons}>
          <Link
            href="mailto:priyashaparnavi299@gmail.com"
            target="_blank"
          >
            {" "}
            <Image src={mail} alt=""></Image>{" "}
          </Link>
          <Link
            href="https://www.linkedin.com/in/priyasha-parnavi-915b691b4/"
            target="_blank"
          >
            {" "}
            <Image src={linkedin} alt=""></Image>{" "}
          </Link>
          <Link href="https://github.com/Priyasha310" target="_blank">
            {" "}
            <Image src={git} alt=""></Image>{" "}
          </Link>
          <Link className="absolute right-6" href="#home">
            {" "}
            <Image className="h-60_100" src={up} alt=""></Image>{" "}
          </Link>
        </div>
        <p> &copy; Priyasha Parnavi 2023 | All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
