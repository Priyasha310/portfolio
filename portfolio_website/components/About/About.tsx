'use client'
import React, { useState } from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import user from '../../images/user.png'

const About = () => {

    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName:any) => {
      setActiveTab(tabName);
    };
  
    return (
    <div id={styles.about}>
        <div className={styles.row}>
            {/* <div className={styles.aboutCol1}>
                <Image src={user} alt=''/>
            </div> */}
            <div className={styles.aboutCol2}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ea, in unde odio sint earum maxime facere porro impedit architecto assumenda, accusantium ad dolorum atque quo voluptates sapiente debitis delectus minima nulla sit velit repellendus! Sint modi totam deleniti, tempora accusantium minus. Eveniet saepe ratione impedit voluptatem facilis reiciendis eum.</p>
                <div className={styles.tabTitles}>
                    <p className={`${styles.tabLinks} ${activeTab === 'skills' ? styles.active : ''}`} 
                    onClick={()=>openTab('skills')}
                    >Skills</p>
                    <p className={`${styles.tabLinks} ${activeTab === 'experience' ? styles.active : ''}`}  
                    onClick={()=> openTab('experience')}
                    >Experience</p>
                    <p className={`${styles.tabLinks} ${activeTab === 'education' ? styles.active : ''}`} 
                    onClick={()=> openTab('education')}
                    >Education</p>
                </div>
                <div className={` ${styles.tabContents} ${activeTab === 'skills' ? styles.activeTab : ''}`} id='skills'>
                    <ul>
                        <li><span>UI/Ux</span> <br/> Designing</li>
                        <li><span>UI/</span> <br/> Designing</li>
                        <li><span>UI/</span> <br/> Designing</li>
                    </ul>
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
                        <li><span>education</span> <br/> Designing</li>
                        <li><span>education</span> <br/> Designing</li>
                        <li><span>education</span> <br/> Designing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About