import {useState, useEffect} from 'react'
// import Navbar from './scenes/navbar'
import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import OurClasses from '@/scenes/ourClasses'
import ContactUs from '@/scenes/contactus'
import Footer from '@/scenes/footer'
import {SelectedPageEnum} from '@/shared/types'

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPageEnum>(SelectedPageEnum.HOME)
  
  // CHANGES ACCORDING TO WINDOW SCROLLING
  const [isAtTopOfPage, setIsAtTopOfPage] = useState<boolean>(true);   // By default we are at top of page
  useEffect(() => {
    const handleScroll = (): any =>{
      if(window.scrollY === 0){  // At top of page
        setIsAtTopOfPage(true)
        setSelectedPage(SelectedPageEnum.HOME)
      }
      else{
        setIsAtTopOfPage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[]);
  



  return (
    <div className='app bg-gray-20'>
      {/* NAVBAR COMPONENT */}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isAtTopOfPage={isAtTopOfPage}
      />
      {/* HOMEPAGE COMPONENT */}
      <Home
        setSelectedPage={setSelectedPage}
      />
      {/* BENEFITS COMPONENT */}
      <Benefits
        setSelectedPage={setSelectedPage}
      />
      {/* OUR CLASSES COMPONENT */}
      <OurClasses
        setSelectedPage={setSelectedPage}
      />
      {/* CONTACT US COMPONENT */}
      <ContactUs
        setSelectedPage={setSelectedPage}
      />
      {/* FOOTER COMPONENT */}
      <Footer/>
      
    </div>
  )
}

export default App
