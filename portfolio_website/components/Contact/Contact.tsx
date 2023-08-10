'use client'
import React, { useEffect } from 'react'
import styles from './contact.module.scss'

const Contact = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxE6qO91s_czXLrq1pNyTjhsAzjzkrAHbZp3sbIbUuBBbSxc_3bxr6ec5JqTnERVh2oYw/exec';
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const form = e.currentTarget;
      const msg = document.getElementById('message');
  
      try {
        const response =  fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        console.log('Success!', response);
        if(msg){
          msg.innerHTML = 'Response submitted. Will get to you soon!';
          setTimeout(() => {
            msg.innerHTML = '';
            form.reset();
          }, 3000);
        }   
      }catch (error) {
        console.error('Error!', error);
      }
    };
  
    useEffect(() => {
      const form = document.forms['submit-to-google-sheet' as any];
      if (form) {
        form.addEventListener('submit', handleSubmit as any);
      }
  
      return () => {
        if (form) {
          form.removeEventListener('submit', handleSubmit as any);
        }
      };
    }, []);

  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactDetails}>
          <h1>Contact Me</h1>

          <p>Let&apos;s build something incredible together! Reach out to me for software development opportunities and collaborations. Would be happy to connect with you!</p>
          <p className='w-full overflow-hidden overflow-ellipsis hover:overflow-visible whitespace-pre-wrap'>1rn19is109.priyashaparnavi@gmail.com</p>
          
          <a href={`/PRIYASHA_PARNAVI-resume.pdf`} download className={styles.btn} > Resume</a>
        </div>
        <div className={styles.contactForm}>
          <form name='submit-to-google-sheet'>
            <input type='text' name='Name' placeholder='Your Name *'  required/>
            <input type='email' name='Email' placeholder='youremail@xyz.com *'  required/>
            <input type='subject' name='Subject' placeholder='Contact Subject'  />
            <textarea name='Message' placeholder='Your Message *' required />
            <button type='submit' className={`${styles.btn} ${styles.submitBtn}`}>Submit</button>
          </form>
          <span id='message' className={styles.message}></span>
        </div>
      </div>
    </div>
        
     
  )
}
export default Contact;