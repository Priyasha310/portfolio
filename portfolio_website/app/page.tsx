import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Contact/>
    </main>
  )
}
