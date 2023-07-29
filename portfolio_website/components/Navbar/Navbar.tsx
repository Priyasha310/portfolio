import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import Link from 'next/link'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <div id={styles.navbar}>
        <div className={styles.header}>
            <div className={`${styles.container}`}>
                <nav>
                    <Image className={styles.logo} src={logo} alt=''/>            
                    <ul>
                        <li> <Link href='#'>Home</Link> </li>
                        <li> <Link href='#about' >About</Link> </li>
                        <li> <Link href='#'>Contact</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar