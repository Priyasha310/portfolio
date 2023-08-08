import React from 'react'
import styles from './usedTech.module.scss'
import Image from 'next/image'
import next from '@/images/next.png'
import react from '@/images/react.png'
import vercel from '@/images/vercel.png'
import tailwind from '@/images/tailwind.png'

const UsedTech = () => {
  return (
    <>
    <hr className="border border-gray-300 mt-4"></hr>
    <div id='technology' className={`${styles.techs} `}>
        <div className={styles.techsContainer}>
            <div className={styles.title}>Technologies used for portfolio</div>
            <div className={styles.techsList}>
                <Image src={react} alt=''/>
                <Image src={next} alt=''/>
                <Image src={vercel} alt=''/>
                <Image src={tailwind} alt=''/>
            </div>
        </div>
    </div>
    </>
  )
}

export default UsedTech