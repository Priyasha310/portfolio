'use client'
import React from 'react'
import styles from './projects.module.scss'
import ProjectCard from './ProjectCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };

    return (
    <>
        <div id='projects' className={`${styles.projects} `}>
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
                    <ProjectCard heading='Heading of Project1' description='Description of project1: Lorem ipsum dolor sit amet consectetur adipisicing elit.' path='' />
                    <ProjectCard heading='Heading of Project2' description='Description of project2: Lorem ipsum dolor sit amet consectetur adipisicing elit.' path='' />
                    <ProjectCard heading='Heading of Project3' description='Description of project3: Lorem ipsum dolor sit amet consectetur adipisicing elit.' path='' />
                    <ProjectCard heading='Heading of Project4' description='Description of project4: Lorem ipsum dolor sit amet consectetur adipisicing elit.' path='' />
                </Carousel>
                </div>
            </div>
        </div>
        <hr className="border border-gray-300 mt-4"></hr>
    </>
    )
}

export default Projects