"use client";
import React, { useEffect } from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
import download from "../../assets/images/download.png";
import { scriptURL, CONTACT_TEXT } from "./contact.constants";

const Contact = () => {
  // scriptURL is now imported from contact.constants.ts
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const msg = document.getElementById("message");

    try {
      const response = fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      console.log("Success!", response);
      if (msg) {
        msg.innerHTML = CONTACT_TEXT.form.response;
        setTimeout(() => {
          msg.innerHTML = "";
          form.reset();
        }, 3000);
      }
    } catch (error) {
      console.error("Error!", error);
    }
  };

  useEffect(() => {
    const form = document.forms["submit-to-google-sheet" as any];
    if (form) {
      form.addEventListener("submit", handleSubmit as any);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit as any);
      }
    };
  }, []);

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactDetails}>
          <h1>{CONTACT_TEXT.heading}</h1>
          <p>{CONTACT_TEXT.description}</p>
          <p className="w-95_100 overflow-hidden overflow-ellipsis hover:overflow-visible whitespace-pre-wrap">
            {CONTACT_TEXT.email}
          </p>
          <a
            href={CONTACT_TEXT.resumeLink}
            download
            className={`${styles.btn} ${styles.imageBtn}`}
          >
            <Image src={download} alt='download' className="w-6 h-6"></Image>
            {CONTACT_TEXT.resumeBtn}
          </a>
        </div>
        <div className={styles.contactForm}>
          <form name="submit-to-google-sheet">
            <input type="text" name="Name" placeholder={CONTACT_TEXT.form.name} required />
            <input
              type="email"
              name="Email"
              placeholder={CONTACT_TEXT.form.email}
              required
            />
            <input
              type="subject"
              name="Subject"
              placeholder={CONTACT_TEXT.form.subject}
            />
            <textarea name="Message" placeholder={CONTACT_TEXT.form.message} required />
            <button
              type="submit"
              className={`${styles.btn} ${styles.submitBtn}`}
            >
              {CONTACT_TEXT.form.submit}
            </button>
          </form>
          <span id="message" className={styles.message}></span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
