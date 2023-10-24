import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>


      {/* NAVBAR SECTION STARTS */}
      <nav className='flex justify-between bg-indigo-200 px-3 md:px-5 items-center'>

        {/* LOGO */}
        <div className='text-2xl text-indigo-600 font-bold' >PW SKILLS</div>

        {/* LINKS */}
        <ul className='hidden md:flex justify-center font-semibold'>
          <li className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About Us</li>
          <li className='mx-[10px] cursor-pointer'>Contact Us</li>
        </ul>

        {/* USER */}
        <div className='hidden md:block px-1 py-1 mcursor-pointer text-sm text-yellow-50 bg-blue-700 my-1 rounded-md font-semibold '>Login/Signup</div>

        {/* HAMBURGER ICON */}
        <div className='md:hidden text-2xl font-bold'>&#8801;</div>

      </nav>
      {/* NAVBAR SECTION ENDS */}


      {/* HERO SECTION STARTS */}
      <div className='w-full h-auto border overflow-auto'>
        {/* WEB IMAGE */}
        <img className='hidden md:block' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" />

        {/* MOBILE DEVICE IMAGE */}
        <img className='md:hidden  ' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" />
      </div>
      {/* HERO SECTION ENDS */}


      {/* STUDENTS SECTION STARTS */}
      <div className='h-auto w-full flex flex-wrap flex-col items-center py-10 px-5 text-center'>

        {/* PROMOTION SENTENCE */}
        <div className='w-full h-auto flex  flex-col items-center'>
          <p className='text-indigo-800 text-3xl md:text-4xl mb-2 font-bold'>"Pure Hardwork, No Shortcuts!"</p>
          <p className='border-yellow-400  border-t-4 w-[120px] md:w-[200px] rounded-2xl'></p>
        </div>

        {/* CARDS */}
        <div className='w-full flex flex-wrap justify-evenly py-12 '>

          <div className='w-46 flex flex-col items-center mb-12 rounded-lg'>
            <img className=' w-24 h-24 mb:w-56 mb:h-44  rounded-full  object-cover ' src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709998.jpg?t=st=1697654474~exp=1697658074~hmac=9d6f218fb26c8dfd3b0853f240f9448e9fed75db87ee75c8629588063d5e616a&w=740" alt="" />
            <p className=' text-xl md:text-3xl text-white'>600+</p>
            <p className='text-xl md:text-3xl text-gray-500 font-semibold'>Different Courses</p>
          </div>

          <div className='w-46 flex flex-col items-center mb-12 rounded-lg'>
            <img className='w-24 h-24 mb:w-44 mb:h-44   rounded-full  object-cover ' src="https://img.freepik.com/free-photo/group-successful-happy-smiling-graduates-generated-by-ai_188544-26121.jpg?t=st=1697654564~exp=1697658164~hmac=735492952bdeaf4d0ad8c53071b27f1abba9749307f839e726870170d5151d7a&w=740" alt="" />
            <p className='text-xl md:text-3xl text-white'>7000+</p>
            <p className='text-xl md:text-3xl text-gray-500 font-semibold'>Students Enrolled</p>
          </div>

          <div className='w-46 flex flex-col items-center mb-12 rounded-lg'>
            <img className='w-24 h-24 mb:w-44 mb:h-44   rounded-full  object-cover ' src="https://img.freepik.com/free-photo/heap-wealth-success-growth-generated-by-ai_188544-15209.jpg?t=st=1697654653~exp=1697658253~hmac=5d5f4047114a0989105834eb8cee68751152282bd2c5b89831de5b3c830e640f&w=740" alt="" />
            <p className='text-xl md:text-3xl text-white'>20000+</p>
            <p className='text-xl md:text-3xl text-gray-500 font-semibold'>Transactions</p>
          </div>

        </div>
      </div>
      {/* STUDENT SECTION ENDS */}



      {/* PRODUCTS SECTION STARTS */}
      <div className='h-auto w-full flex flex-wrap flex-col items-center px-5  text-center'>

        {/* PROMOTION SENTENCE */}
        <div className='w-full h-auto flex  flex-col items-center'>
          <p className='text-indigo-800 text-3xl md:text-4xl mb-2 font-bold'>"Our Products"</p>
          <p className='border-yellow-400  border-t-4 w-[120px] md:w-[200px] rounded-2xl'></p>
        </div>

        {/* CARDS */}
        <div className='w-full flex flex-wrap justify-evenly py-12 '>

          <div className='w-44 h-54 hover:border-2 hover:rounded-lg p-3 flex flex-col flex-wrap items-center justify-center'>
            <img className='w-28 h-28 rounded-full' src='https://img.freepik.com/premium-photo/programmer-generative-ai_860599-3057.jpg?w=740' />
            <p className='text-white text-lg uppercase'>PW SKills Lab</p>
            <p className='text-gray-500 text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis!</p>
          </div>

          <div className='w-44 h-54 hover:border-2 hover:rounded-lg p-3 flex flex-col flex-wrap items-center justify-center'>
            <img className='w-28 h-28 rounded-full' src='https://img.freepik.com/free-photo/man-suit-walks-across-street-with-suitcase_1340-38249.jpg?t=st=1697654162~exp=1697657762~hmac=e15da46c22db3d5f7685ced71c4f2bea09f79d02a804f0a30cbe1cd566cdbb64&w=740' />
            <p className='text-white text-lg uppercase'>Job Portal</p>
            <p className='text-gray-500 text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis!</p>
          </div>

          <div className='w-44 h-54 hover:border-2 hover:rounded-lg p-3 flex flex-col flex-wrap items-center justify-center'>
            <img className='w-28 h-28 rounded-full' src='https://img.freepik.com/free-photo/cultures-clash-elegant-antique-gold-design-generated-by-ai_188544-10382.jpg?t=st=1697654258~exp=1697657858~hmac=04dabb67a393cb84537752e6f811f7db88af4c384873bb55cc45ad3ecc394305&w=740' />
            <p className='text-white text-lg uppercase'>Achievements</p>
            <p className='text-gray-500 text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis!</p>
          </div>
          <div className='w-44 h-54 hover:border-2 hover:rounded-lg p-3 flex flex-col flex-wrap items-center justify-center'>
            <img className='w-28 h-28 rounded-full' src='https://img.freepik.com/free-photo/businessman-businesswoman-signing-contract-office-generated-by-ai_24640-87360.jpg?t=st=1697654336~exp=1697657936~hmac=a34b2cd837625f7d6183ada3bc081461320ef15e9b81d8e970d8039c222e33b0&w=740' />
            <p className='text-white text-lg uppercase'>Cetificates</p>
            <p className='text-gray-500 text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis!</p>
          </div>
          <div className='w-44 h-54 hover:border-2 hover:rounded-lg p-3 flex flex-col flex-wrap items-center justify-center'>
            <img className='w-28 h-28 rounded-full' src='https://img.freepik.com/premium-photo/customer-satisfaction-rating-thumbs-up-excellent-service-with-rating-star-with-generative-ai-tech_860978-2593.jpg?w=740' />
            <p className='text-white text-lg uppercase'>Testimonies</p>
            <p className='text-gray-500 text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis!</p>
          </div>
        </div>
      </div>
      {/* PRODUCTS SECTION ENDS */}


      {/* FOOTER SECTION BEGINS */}
      <div className='w-full h-auto text-white border-4 p-10  '>

        <div className='flex flex-wrap justify-between '>

          {/* LOGO */}
          <div className='flex flex-wrap flex-col justify-center w-36 '>
            <p className='text-2xl  text-gray-600 font-bold mb-2'>PW SKILLS</p>
            <div className='flex w-[200px] justify-between items-center '>
              <img className='w-20 h-20 rounded-full' src="https://img.freepik.com/premium-photo/gold-ribbon-with-ribbon-that-says-sea-salt_655090-98372.jpg?w=740" alt="" />
              <p className='text-xl text-gray-500 font-bold px-3'>Certified</p>
            </div>
          </div>

          {/* Footer content */}
          <div className='flex flex-wrap justify-around w-[60%]'>

            <div className='w-24 m-2'>
              <p className='text-xl font-semibold '>Sections</p>
              <p className='border-yellow-400  border-t-4 w-[80px] rounded-2xl '></p>
              <div className='text-gray-500 text-sm  leading-loose mt-2 cursor-pointer'>
                <p className='hover:text-gray-700'> About Us</p>
                <p className='hover:text-gray-700'>Founders</p>
              </div>
            </div>

            <div className='w-24 m-2'>
              <p className='text-xl font-semibold '>Sections</p>
              <p className='border-yellow-400  border-t-4 w-[80px] rounded-2xl '></p>
              <div className='text-gray-500 text-sm  leading-loose mt-2 cursor-pointer'>
                <p className='hover:text-gray-700'> About Us</p>
                <p className='hover:text-gray-700'>Founders</p>
              </div>
            </div>

            <div className='w-24 m-2'>
              <p className='text-xl font-semibold '>Sections</p>
              <p className='border-yellow-400  border-t-4 w-[80px] rounded-2xl '></p>
              <div className='text-gray-500 text-sm  leading-loose mt-2 cursor-pointer'>
                <p className='hover:text-gray-700'> About Us</p>
                <p className='hover:text-gray-700'>Founders</p>
              </div>
            </div>

            <div className='w-24 m-2'>
              <p className='text-xl font-semibold '>Sections</p>
              <p className='border-yellow-400  border-t-4 w-[80px] rounded-2xl '></p>
              <div className='text-gray-500 text-sm  leading-loose mt-2 cursor-pointer'>
                <p className='hover:text-gray-700'> About Us</p>
                <p className='hover:text-gray-700'>Founders</p>
              </div>
            </div>

            <div className='w-24 m-2'>
              <p className='text-xl font-semibold '>Sections</p>
              <p className='border-yellow-400  border-t-4 w-[80px] rounded-2xl '></p>
              <div className='text-gray-500 text-sm  leading-loose mt-2 cursor-pointer'>
                <p className='hover:text-gray-700'> About Us</p>
                <p className='hover:text-gray-700'>Founders</p>
              </div>
            </div>

            <div className='w-24 m-2'>
              <p className='text-xl font-semibold '>Sections</p>
              <p className='border-yellow-400  border-t-4 w-[80px] rounded-2xl '></p>
              <div className='text-gray-500 text-sm  leading-loose mt-2 cursor-pointer'>
                <p className='hover:text-gray-700'> About Us</p>
                <p className='hover:text-gray-700'>Founders</p>
              </div>
            </div>

            

            

          
          </div>
        </div>

      </div>
      {/* FOOTER SECTION ENDS */}

    </div>
  )
}

export default App
