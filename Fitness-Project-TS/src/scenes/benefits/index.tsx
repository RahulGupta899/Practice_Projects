import { SelectedPageEnum, IBenefitType } from '@/shared/types'
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'
import HText from '@/shared/HText'
import BenefitCard from '@/scenes/benefits/BenefitCard'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

// FOR ANIMATION 
const container = {
  hidden: {},
  visible: {
      transition: { staggerChildren: 0.2}
  }
}


// CARD BENEFITS 
const benefits: Array<IBenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6'/> ,
    title: 'State of the Art Facilities',
    description: "Neque adispinlorem40 lorem ipsum dolor sit amet, consectetur adipiscing elit sol  jfd er"
  },
  {
    icon: <UserGroupIcon className='h-6 w-6'/> ,
    title: "100's of Diverse Classes",
    description: "Neque adispinlorem40 lorem ipsum dolor sit amet, consectetur adipiscing elit sol  jfd er"
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6'/> ,
    title: 'Expert and Pro Trainers',
    description: "Neque adispinlorem40 lorem ipsum dolor sit amet, consectetur adipiscing elit sol  jfd er "
  },
]




type Props = {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id='benefits'
      className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.BENEFITS)}
      >
        {/* HEADER */}
        <motion.div 
        initial = "hiddend"
        whileInView= "visible"
        viewport={{ once: true, amount: 0.3}}
        transition={{ duration: 0.7}}
        variants={{
          hiddend: { opacity: 0, x: -50},
          visible: { opacity: 1, x: 0}
        }}
        className='md:my-5 md:w-3/5'>
          <HText>More Than Just A GYM</HText>
          <p>
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide ture care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
        initial='hidden'
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={container}
        className='mt-5 md:flex items-center justify-between gap-5'>
           {
            benefits.map((benefit: IBenefitType) => (
              <BenefitCard 
                key = {benefit.title}
                icon = {benefit.icon}
                title = {benefit.title}
                description = {benefit.description}
                setSelectedPage = {setSelectedPage}
              />
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />

          {/* DESCRIPTION */}
          <div>
              {/* TITLE */}
              <motion.div 
              initial = "hiddend"
              whileInView= "visible"
              viewport={{ once: true, amount: 0.3}}
              transition={{ duration: 0.7}}
              variants={{
                hiddend: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
              }}
              className='relative'
              >
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[1]  before:content-abstractwaves'>
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING {" "}
                      <span className='text-primary-500'>FIT</span>
                    </HText>
                </div>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.div
              initial = "hiddend"
              whileInView= "visible"
              viewport={{ once: true, amount: 0.3}}
              transition={{ delay:0.2,duration: 0.7}}
              variants={{
                hiddend: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
              }}
              >
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloribus sunt illum impedit similique natus veniam beatae pariatur, saepe autem delectus? Tempore aliquid facere sed aut eaque autem ullam optio.lorem60 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat excepturi laboriosam fugit eveniet dolorem recusandae ducimus odit earum, aperiam totam quasi repudiandae in error id aliquam omnis iure culpa, ratione ad et aliquid. Quo ea voluptates blanditiis ratione excepturi? Accusantium, id vero! Corrupti assumenda asperiores soluta magni. Modi reiciendis dolor autem animi aspernatur nulla sunt porro ad, laboriosam hic?</p>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloribus sunt illum impedit similique natus veniam beatae pariatur, saepe autem delectus? Tempore aliquid facere sed aut eaque autem ullam optio.lorem60 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat excepturi laboriosam fugit eveniet dolorem recusandae ducimus odit earum, aperiam totam quasi repudiandae in error id aliquam omnis iure culpa, ratione ad et aliquid. Quo ea voluptates blanditiis ratione excepturi? Accusantium, id vero! Corrupti assumenda asperiores soluta magni. Modi reiciendis dolor autem animi aspernatur nulla sunt porro ad, laboriosam hic?</p>
              </motion.div>

              {/* BUTTON */}
              <div className='relative mt-16'>
                <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'></div>
              </div>
              <div className='w-[35%]'>

              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              </div>
          </div>
        </div>
        


      </motion.div>
    </section>
  )
}

export default Benefits