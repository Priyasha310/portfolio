"use client";
import React, { useState } from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import user from "@/assets/images/Picture1.png";
import { tabs, skillsColumns, experiences, education, ABOUT_TEXT } from "./about.constants";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName: any) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div id="about" className={styles.about}>
        <div className={styles.row}>
          <div className={styles.aboutCol1}>
            <Image src={user} alt=""></Image>
          </div>
          <div className={styles.aboutCol2}>
            <h1>{ABOUT_TEXT.heading}</h1>
            <p>{ABOUT_TEXT.description}</p>
            <div className={styles.tabTitles}>
              {tabs.map((tab) => (
                <p
                  key={tab.id}
                  className={`${styles.tabLinks} ${activeTab === tab.id ? styles.active : ""}`}
                  onClick={() => openTab(tab.id)}
                >
                  {tab.label}
                </p>
              ))}
            </div>
            <div
              className={` ${styles.tabContents} ${activeTab === "skills" ? styles.activeTab : ""} `}
              id="skills"
            >
              <div className="w-full md:w-3/4 flex justify-between">
                {skillsColumns.map((col, idx) => (
                  <ul key={idx}>
                    {col.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div
              className={` ${styles.tabContents} ${activeTab === "experience" ? styles.activeTab : ""}`}
              id="experience"
            >
              {experiences.map((exp, i) => (
                <div key={i}>
                  <h6 className={i === 0 ? "" : "mt-4"}>
                    {exp.title} <span>{exp.period}</span>
                  </h6>
                  <p> {exp.company}</p>
                </div>
              ))}
            </div>
            <div
              className={` ${styles.tabContents} ${activeTab === "education" ? styles.activeTab : ""}`}
              id="education"
            >
              <ul>
                {education.map((edu, idx) => (
                  <li key={idx}>
                    {edu.degree} <br />
                    <span> {edu.detail} </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 mt-4"></hr>
    </>
  );
};

export default About;
