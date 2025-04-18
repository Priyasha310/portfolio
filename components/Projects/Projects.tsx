"use client";
import React from "react";
import styles from "./projects.module.scss";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div id="projects" className={`${styles.projects} `}>
        <div className={styles.projectsContainer}>
          <h1>Projects</h1>
          <div className={styles.projectsList}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              infinite={false}
              arrows={true}
              className={styles.carousel}
              removeArrowOnDeviceType={["mobile"]}
            >
              <ProjectCard
                heading="Stack Overflow Clone"
                description="Clone of stack overflow where user can ask/answer question publicly."
                path="https://github.com/Priyasha310/stack-overflow-clone"
              />
              <ProjectCard
                heading="Chat Application"
                description="Allows user to chat. Have to implement socket.io for real-time experience."
                path="https://github.com/Priyasha310/Whispp-chat-App"
              />
              <ProjectCard
                heading="Portfolio"
                description="You can go and checkout my portfolio code here. :)"
                path="https://github.com/Priyasha310/portfolio"
              />
              {/* <ProjectCard
                heading="Project in Progress"
                description="Stay in tune for more such projects."
                path=""
              /> */}
            </Carousel>
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 mt-4"></hr>
    </>
  );
};

export default Projects;
