import React from 'react'
import {SelectedPageEnum} from '../../shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from 'framer-motion'

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1}
}



type Props = {
    icon: JSX.Element,
    title: string,
    description: string,
    setSelectedPage: (value: SelectedPageEnum) => void, 
}

const BenefitCard = ({icon, description, title, setSelectedPage}: Props) => {
  return (
    <motion.div
    variants={childVariant}
    className='mt-5 border-2 border-gray-100 px-5 py-16 text-center '>
        <div className='mb-4 flex justify-center '>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4 '>{icon}</div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <div
            className={'rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'}
            // href={`#${SelectedPageEnum.CONTACTUS}`}
            onClick={()=> setSelectedPage(SelectedPageEnum.CONTACTUS)}
        >
            Learn More
        </div>
    </motion.div>
  )
}

export default BenefitCard