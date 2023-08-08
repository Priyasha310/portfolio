'use client'
import React from 'react'
import styles from './contact.module.scss'

const Contact = () => {
  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactDetails}>
          <h1 className={styles.subTitle}>Contact Me</h1>

          <p>Let&apos;s build something incredible together! Reach out to me for software development opportunities and collaborations. Would be happy to connect with you!</p>
          {/* <p className=' font-bold'>Email</p> */}
          <p>1rn19is109.priyashaparnavi@gmail.com</p>
          
          <a href={`/PRIYASHA_PARNAVI-resume.pdf`} download className={styles.btn} > Resume</a>
        </div>
        <div className={styles.contactForm}>
          <form>
            <input type='text' name='Name' placeholder='Your Name' required />
            <input type='email' name='Email' placeholder='youremail@xyz.com' required />
            <input type='subject' name='Subject' placeholder='Contact Subject' required />
            <textarea name='Message' placeholder='Your Message'  />
            <button type='submit' className={`${styles.btn} ${styles.submitBtn}`}>Submit</button>
          </form>
        </div>
      </div>
    </div>
        
     
  )
}

export default Contact