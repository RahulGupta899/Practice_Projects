import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png';
import PageLink from './PageLink';
import {SelectedPageEnum} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQueryHook'
import ActionButton from '@/shared/ActionButton';

type Props = {
    selectedPage: SelectedPageEnum,
    setSelectedPage: (value: SelectedPageEnum) => void,
    isAtTopOfPage: boolean
}

const Navbar = (props: Props) => {

    const {
        selectedPage,
        setSelectedPage,
        isAtTopOfPage
    } = props;

    const isScreenAbove = useMediaQuery("(min-width: 1060px)")  // Returns true if the screen is above

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    

    const flexBetween = 'flex items-center justify-between'
    const navBarBackground = (!isAtTopOfPage)?'bg-primary-100 duration-500' : ''; 

    return (
        <nav>
            <div className={` ${navBarBackground} ${flexBetween} fixed top-0 z-30 w-[100%] py-6 } `}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt='logo' src={Logo}/>

                        {/* RIGHT SIDE */}
                        {
                            (isScreenAbove)?(
                                <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <PageLink 
                                        pageName='Home'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <PageLink 
                                        pageName='Benefits'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <PageLink 
                                        pageName='Our Classes'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <PageLink 
                                        pageName='Contact Us'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />

                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >Become a Member</ActionButton>
                                </div>
                            </div>
                            ):(
                                <button 
                                    className='rounded-full bg-secondary-500 p-2'
                                    onClick={()=> setIsMenuToggled((state)=>!state)}
                                >
                                    <Bars3Icon className='h-6 w-6 text-white'/>
                                </button>
                            )
                        }
                        

                    </div>
                </div>
            </div>
            
            {/* MOBILE MENU MODAL */}
            {
                ( !isScreenAbove && isMenuToggled ) && (
                    <div className='md:hidden fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                        {/* CLOSE ICON */}
                        <div className='flex justify-end p-12'>
                            <button onClick={()=>setIsMenuToggled(false)}>
                                <XMarkIcon className='h-6 w-6 text-gray-400 '/>
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className={`ml-[33%] flex flex-col gap-10  text-2xl`}>
                                    <PageLink 
                                        pageName='Home'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <PageLink 
                                        pageName='Benefits'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <PageLink 
                                        pageName='Our Classes'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <PageLink 
                                        pageName='Contact Us'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />

                                </div>
                    </div>
                )
            }
        </nav>

        
    )
}

export default Navbar