import useMediaQuery from "@/hooks/useMediaQueryHook"
import {SelectedPageEnum} from '@/shared/types'
import ActionButton from "@/shared/ActionButton"
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPageEnum) => void;
}

const Home = ( { setSelectedPage }: Props) => {
  
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id={`${SelectedPageEnum.HOME}`}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 "
    >
      {/*  MAIN HEADER AND IMAGE */}
      <motion.div 
       className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
       onViewportEnter={() => setSelectedPage(SelectedPageEnum.HOME)}
      >

        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}

          <motion.div     // CONVERTED NORMAL DIV INTO MOTION DIV FOR THE ANIMATION
            className='relative'
            initial = 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >    
            <div className="before:absolute before:-top-20 before:z-[-1] md:before:content-evolvetext ">  {/* EVOLVED BACKGROUND */} 
              {/* EVOGYM and tagline*/}
              <img src={HomePageText} alt="home-page-text" />
            </div>
          </motion.div>

          {/* MESSAGE */}
          <p className="mt-8 text-sm ">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
          </p>

          {/* ACTION BUTTONS */}
          <motion.div 
            className='mt-8 flex items-center gap-2'
            initial = 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay:0.3, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>

            {/* CHANGE IT TO ANCHOR TAG */}
            <div
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPageEnum.CONTACTUS) }
              // href={`#${SelectedPageEnum.CONTACTUS}`}
            >
              <p>Learn More</p>
            </div>
          </motion.div>
        </div>


        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>

      </motion.div>

      {/* SPONSORS */}
      {
        isAboveMediumScreen && (
          <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between">
                <img src={SponsorRedBull} alt="redbull" />
                <img src={SponsorFortune} alt="fortune" />
                <img src={SponsorForbes} alt="forbes" />
              </div>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Home