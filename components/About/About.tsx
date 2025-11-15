"use client";
import React, { useState } from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import user from "@/assets/images/Picture1.png";

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
            <h1>About Me</h1>
            <p>
              Software Engineer with 2+ years of experience in React, TypeScript, and scalable UI development, specializing in reusable components, performance optimization, WCAG accessibility, and end-to-end SDLC delivery.
            </p>
            <div className={styles.tabTitles}>
              <p
                className={`${styles.tabLinks} ${activeTab === "skills" ? styles.active : ""}`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className={`${styles.tabLinks} ${activeTab === "experience" ? styles.active : ""}`}
                onClick={() => openTab("experience")}
              >
                Experience
              </p>
              <p
                className={`${styles.tabLinks} ${activeTab === "education" ? styles.active : ""}`}
                onClick={() => openTab("education")}
              >
                Education
              </p>
            </div>
            <div
              className={` ${styles.tabContents} ${activeTab === "skills" ? styles.activeTab : ""} `}
              id="skills"
            >
              <div className="w-full md:w-3/4 flex justify-between">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                </ul>
                <ul>
                  <li>Redux Toolkit</li>
                  <li>Dialogflow</li>
                  <li>Reactjs</li>
                  <li>Material UI</li>
                  <li>Clay UI</li>
                </ul>
                <ul>
                  <li>Nodejs</li>
                  <li>Nestjs</li>
                  <li>Expressjs</li>
                  <li>MongoDB</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
            <div
              className={` ${styles.tabContents} ${activeTab === "experience" ? styles.activeTab : ""}`}
              id="experience"
            >
              <div>
                <h6 className="">
                  Software Engineer - 1 <span>[November 2023 - Present]</span>
                </h6>
                <p> HashedIn by Deloitte</p>
              </div>
              <div>
                <h6 className="mt-4">
                  Associate Software Engineer{" "}
                  <span>[March 2023 - June 2023]</span>
                </h6>
                <p> HashedIn by Deloitte</p>
              </div>
            </div>
            <div
              className={` ${styles.tabContents} ${activeTab === "education" ? styles.activeTab : ""}`}
              id="education"
            >
              <ul>
                <li>
                  B.E. in Information Science and Engineering [2019-2023] <br />
                  <span> CGPA = 8.47 </span>
                </li>
                <li>
                  Intermediate [2018] <br />
                  <span> Aggregate = 85% </span>{" "}
                </li>
                <li>
                  Matriculation [2016] <br />
                  <span> CGPA = 9.8 </span>
                </li>
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
