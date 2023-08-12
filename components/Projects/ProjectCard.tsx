import React from 'react'
import styles from './projects.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/images/developer.png'

const ProjectCard = ({ heading, description, path}:ProjectCardProps) => {
  return (
    <div className={styles.project}>
        {/* <Image src={img} alt='Project'/> */}
        <div className={styles.layer}>
            <h3>{heading}</h3>
            <p>{description}</p>
            <Link href={path} target='_blank'><span  className={styles.openNew} ></span></Link>
        </div>
    </div>
  )
}

export default ProjectCard;

export interface ProjectCardProps{
    heading: string,
    description: string,
    path: string,
    // projectImg: string,
}
