'use client'
import React, { useState } from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import user from '@/images/Picture1.png'

const About = () => {

    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName:any) => {
      setActiveTab(tabName);
    };
  
    return (
        <>
    <div id='about' className={styles.about}>
        <div className={styles.row}>
            <div className={styles.aboutCol1}>
                <Image src={user} alt=''></Image>
            </div>
            <div className={styles.aboutCol2}>
                <h1>About Me</h1>
                <p>Passionate web developer with a focus on designing aesthetically appealing and user-friendly websites. I&apos;m skilled at using front-end technologies to bring ideas to life with functional and responsive designs through clean and efficient code.</p>
                <div className={styles.tabTitles}>
                    <p className={`${styles.tabLinks} ${activeTab === 'skills' ? styles.active : ''}`} 
                    onClick={()=>openTab('skills')}
                    >Skills</p>
                    {/* <p className={`${styles.tabLinks} ${activeTab === 'experience' ? styles.active : ''}`}  
                    onClick={()=> openTab('experience')}
                    >Experience</p> */}
                    <p className={`${styles.tabLinks} ${activeTab === 'education' ? styles.active : ''}`} 
                    onClick={()=> openTab('education')}
                    >Education</p>
                </div>
                <div className={` ${styles.tabContents} ${activeTab === 'skills' ? styles.activeTab : ''} `} id='skills'>
                    <div className="w-full md:w-3/4 flex justify-between">
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                        </ul>
                        <ul>
                            <li>Nextjs</li>
                            <li>Tailwind CSS</li>
                            <li>Reactjs</li>
                            <li>Figma</li>
                        </ul>
                        <ul>
                            <li>Nodejs</li>
                            <li>Nestjs</li>
                            <li>Expressjs</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className={` ${styles.tabContents} ${activeTab === 'experience' ? styles.activeTab : ''}`} id='experience'>
                    <ul>
                        <li><span>experience</span> <br/> Designing</li>
                        <li><span>experience/</span> <br/> Designing</li>
                        <li><span>experience/</span> <br/> Designing</li>
                    </ul>
                </div>
                <div className={` ${styles.tabContents} ${activeTab === 'education' ? styles.activeTab : ''}`} id='education'>
                    <ul>
                        <li>B.E. in Information Science and Engineering [2019-2023] <br/><span> CGPA = 8.47 </span></li>
                        <li>Intermediate [2018] <br/><span> Aggregate = 85% </span> </li>
                        <li>Matriculation [2016] <br/><span> CGPA = 9.8 </span></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
<hr className="border border-gray-300 mt-4"></hr>
</>
  )
}

export default About