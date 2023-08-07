import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.scss'
import React from 'react'
import linkedin from '../../images/linkedin.png'
import git from '../../images/github.png'
import mail from '../../images/mail.png'
import up from '../../images/up.svg'

const Footer = () => {
  return (
    <div id='footer'>
        <div className={styles.footerContainer}>
            <div className={styles.socialIcons}>
                <Link href='mailto:priyashaparnavi31099@gmail.com' target='_blank'> <Image src={mail} alt='' ></Image> </Link>
                <Link href='https://www.linkedin.com/in/priyasha-parnavi-915b691b4/' target='_blank'> <Image src={linkedin} alt=''></Image> </Link>
                <Link href='https://github.com/Priyasha310' target='_blank'> <Image src={git} alt=''></Image> </Link>
                <Link className='absolute right-6' href='#home'> <Image className='h-60_100' src={up} alt=''></Image> </Link>
            </div>
            <p> &copy; Priyasha Parnavi 2023 | All rights reserved </p>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, perferendis quam! Neque reiciendis sequi molestias non quas ratione! Dolorum modi natus autem impedit sapiente unde maxime temporibus sed optio distinctio nulla id rem ex harum commodi voluptatem ipsa dicta, consequuntur nisi quia aperiam? Omnis a iure, quia ipsum quaerat reiciendis architecto ut, asperiores minus maxime, nam esse quis rerum libero ullam itaque at inventore voluptate officiis id voluptas? Asperiores quas a beatae ducimus vero. Tempora tenetur porro voluptatibus velit nisi, dolorem, qui eum libero eveniet commodi nesciunt quam ducimus sequi ex laborum corporis. Exercitationem totam autem fuga ea eveniet vel, velit iure fugiat temporibus iste corporis quia sunt optio deleniti pariatur natus maxime rerum labore voluptatem cumque quaerat nam! Eaque ullam commodi ducimus odit qui ut quos quasi. Libero eaque repudiandae reiciendis totam id vitae asperiores porro, explicabo mollitia sint reprehenderit dolor incidunt molestias excepturi rerum quae necessitatibus voluptate quos? Veritatis provident, omnis necessitatibus saepe sapiente maiores amet voluptatem eligendi tempora quae ea optio accusantium recusandae? Nam officiis id excepturi nobis sunt, in rerum amet necessitatibus minima libero maiores ut quas laudantium molestias reprehenderit totam ad dolorem vel, fugiat vitae iusto? Magnam enim provident obcaecati aliquid culpa fugiat ex odio.</p> */}
        </div>
    </div>
  )
}

export default Footer