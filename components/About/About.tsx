"use client";
import React, { useState } from "react";
import Image from "next/image";
import user from "@/assets/images/Picture1.png";
import styles from "./about.module.scss";
import { ABOUT_TEXT, education, experiences, skillsColumns, tabs } from "./about.constants";
import { TabButton, TabPanel, type TabId } from "./AboutTabs";

const About = () => {
  const [activeTab, setActiveTab] = useState<TabId>("skills");

  const handleTabChange = (tabName: TabId) => {
    setActiveTab(tabName);
  };

  const renderSkillsContent = () => (
    <div className="w-full md:w-3/4 flex justify-between">
      {skillsColumns.map((column, index) => (
        <ul key={`${column.join("-")}-${index}`}>
          {column.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ))}
    </div>
  );

  const renderExperienceContent = () => (
    <>
      {experiences.map((exp, index) => (
        <div key={`${exp.title}-${exp.company}`}>
          <h6 className={index === 0 ? "" : "mt-4"}>
            {exp.title} <span>{exp.period}</span>
          </h6>
          <p>{exp.company}</p>
        </div>
      ))}
    </>
  );

  const renderEducationContent = () => (
    <ul>
      {education.map((edu, index) => (
        <li key={`${edu.degree}-${index}`}>
          {edu.degree}
          <br />
          <span>{edu.detail}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div id="about" className={styles.about}>
        <div className={styles.row}>
          <div className={styles.aboutCol1}>
            <Image src={user} alt="" />
          </div>
          <div className={styles.aboutCol2}>
            <h1>{ABOUT_TEXT.heading}</h1>
            <p>{ABOUT_TEXT.description}</p>

            <div className={styles.tabTitles}>
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  activeTab={activeTab}
                  onClick={handleTabChange}
                />
              ))}
            </div>

            <TabPanel id="skills" activeTab={activeTab}>
              {renderSkillsContent()}
            </TabPanel>

            <TabPanel id="experience" activeTab={activeTab}>
              {renderExperienceContent()}
            </TabPanel>

            <TabPanel id="education" activeTab={activeTab}>
              {renderEducationContent()}
            </TabPanel>
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 mt-4" />
    </>
  );
};

export default About;
