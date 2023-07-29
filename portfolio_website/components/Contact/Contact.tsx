'use client'
import React from 'react'
import styles from './contact.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../../public/next.svg'
import { Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <div id={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactDetails}>
          <h1 className={styles.subTitle}>Contact Me</h1>
          <p>contact@gmail.com</p>
          <p>465451321</p>
          <div className={styles.socialIcons}>
            <Link href=''> <Image src={icon} alt=''></Image> </Link>
            <Link href=''> <Image src={icon} alt=''></Image> </Link>
            <Link href=''> <Image src={icon} alt=''></Image> </Link>
          </div>
          <Link href='../../public/next.svg' className={styles.btn} download>Download Resume</Link>
        </div>
        <div className={styles.contactForm}>
          <form>
            <input type='text' name='Name' placeholder='Your Name' required />
            <input type='email' name='Email' placeholder='youremail@xyz.com' required />
            <input type='subject' name='Subject' placeholder='Contact Subject' required />
            <textarea name='Message' placeholder='Your Message'  />
            <button type='submit' className={styles.btn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
        
     
  )
}

export default Contact