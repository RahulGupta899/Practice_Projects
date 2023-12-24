// HERE ACTION BUTTON IS CONSIDERED AS CONTACTUS BUTTON SO THAT THE USER CAN SUBSCRIBE OUR PLAN
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {SelectedPageEnum} from '@/shared/types'


type Props = {
    children: string,
    setSelectedPage: (value:SelectedPageEnum) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <div
        className={'rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'}
        // href={`#${SelectedPageEnum.CONTACTUS}`}
        onClick={()=> setSelectedPage(SelectedPageEnum.CONTACTUS)}
    >
        {children}
    </div>
  )
}

export default ActionButton