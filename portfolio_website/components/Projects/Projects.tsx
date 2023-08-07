'use client'
import React, { useState } from 'react'
import styles from './projects.module.scss'
import Image from 'next/image'
import img from '@/images/developer.png'
import Link from 'next/link'

const Projects = () => {
  
    return (
    <>
        <div id='projects' className={styles.projects}>
            <div className={styles.projectsContainer}>
                <h1>Projects</h1>
                <div className={styles.projectsList}>
                    <div className={styles.layer}>
                        <h3>Heading of Project</h3>
                        <p>Description of project: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link href='#'><span>
                            {/* &#xe164; */}
                            <svg height="40" width="20" viewBox="0 0 1024 768"><path d="M640 768H128V258L256 256V128H0v768h768V576H640V768zM384 128l128 128L320 448l128 128 192-192 128 128V128H384z"/></svg>
                            </span></Link>
                    </div>
                    
                    <div className={styles.project}>
                        <Image src={img} alt='Project'/>
                    </div>
                    <div className={styles.project}>
                        <Image src={img} alt='Project'/>
                    </div>
                </div>
            </div>
            
        </div>
        <hr className="border border-gray-300 mt-4"></hr>
    </>
    )
}

export default Projects