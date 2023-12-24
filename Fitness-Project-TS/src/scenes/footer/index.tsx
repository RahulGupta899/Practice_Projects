import React from 'react'
import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer
      className='bg-primary-100 py-16 mt-[65px]'
    >
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt="logo" />
          <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nemo veritatis magni nostrum, dolorum, similique nisi doloribus quaerat itaque ad accusamus. Ullam eaque, alias consectetur delectus eligendi eveniet fugiat beatae.
          </p>
          <p>&#169; Evogym All Rights Reserved. </p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0 '>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Massa orsci senectus</p>
          <p className='my-5'>Lorem, ipsum dolor.</p>
          <p>Gravitas dolor sit.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0 '>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Aniota dini gespe</p>
          <p>(333)425-6825</p>
          <p>Gravitas dolor sit.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer