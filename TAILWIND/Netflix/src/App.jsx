import { useState } from 'react'
import './App.css'


function App() {
  return (
    <div>
      {/*  BANNER SECTION BEGINS */}
      <section className="w-[100%] h-screen bg-center  bg-cover bg-[url('./assets/images/banner.jpg')]">
        {/* OVERLAY */}
        <div className='w[100%] h-[100vh] text-[white] bg-[rgba(0,0,0,0.5)]'>
          {/* HEADER */}
            <header className='max-w-[1170px] h-4 border-[40px]' > 
          
            </header>
        </div>
      </section>
    </div>
  )
}

export default App
