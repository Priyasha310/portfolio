import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import React from "react";
import linkedin from "@/assets/images/linkedin.png";
import git from "@/assets/images/github.png";
import mail from "@/assets/images/mail.png";
import up from "@/assets/images/up.svg";
import { FOOTER_TEXT } from "./footer.constants";

const Footer = () => {
  return (
    <div id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.socialIcons}>
          <Link
            href={FOOTER_TEXT.mail}
            target="_blank"
          >
            <Image src={mail} alt=""></Image>
          </Link>
          <Link
            href={FOOTER_TEXT.linkedin}
            target="_blank"
          >
            <Image src={linkedin} alt=""></Image>
          </Link>
          <Link href={FOOTER_TEXT.github} target="_blank">
            <Image src={git} alt=""></Image>
          </Link>
          <Link className="absolute right-6" href={FOOTER_TEXT.up}>
            <Image className="h-60_100" src={up} alt=""></Image>
          </Link>
        </div>
        <p> {FOOTER_TEXT.copyright} </p>
      </div>
    </div>
  );
};

export default Footer;
