'use client'
import React, { useState } from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import user from '../../images/Picture1.png'

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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  delectus minima nulla sit velit repellendus! Sint modi totam deleniti, tempora accusantium minus. Eveniet saepe ratione impedit voluptatem facilis reiciendis eum.</p>
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
                    <div className="w-3/4 md:w-1/2 flex justify-between">
                        <ul>
                            <li><span>HTML</span> </li>
                            <li><span>CSS</span> </li>
                            <li><span>Nextjs</span> </li>
                            <li><span>Reactjs</span> </li>
                        </ul>
                        <ul>
                            <li><span>Nodejs</span> </li>
                            <li><span>Nestjs</span> </li>
                            <li><span>Tailwind CSS</span> </li>
                            <li><span>Bootstrap</span> </li>
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
                        <li><span>B.E. in Information Science and Engineering</span> <br/> CGPA = 8.47</li>
                        <li><span>Intermediate 	</span> <br/> Aggregate = 85% </li>
                        <li><span>Matriculation </span> <br/> CGPA = 9.8</li>
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