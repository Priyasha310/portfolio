import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import Projects from '@/components/Projects/Projects'
import UsedTech from '@/components/UsedTech/UsedTech'

export default function Home() {

  
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      {/* <Projects/> */}
      <Contact/>
      <UsedTech/>
      <Footer/>
    </main>
  )
}
