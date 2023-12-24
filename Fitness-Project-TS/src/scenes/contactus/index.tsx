import {SelectedPageEnum} from '@/shared/types'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'

type Props = {
  setSelectedPage: (value: SelectedPageEnum) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

  const {
    register,
    trigger,    // Validates whether form is valid or not , it's an asynchronous function
    formState: {errors}
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();  // It's an asynchronous operation
    if(!isValid){
      e.preventDefault();
    }
    console.log("Form submitted: ", e);
    console.log("IsValid: ", isValid)
  }

  const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  return (
    <section id={`${SelectedPageEnum.CONTACTUS}`}>
      <motion.div
        className='w-5/6 mx-auto'
        onViewportEnter={()=> setSelectedPage(SelectedPageEnum.CONTACTUS)}
      >
        {/* HEADER */}
        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
          }}
        >
          <HText>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nemo temporibus illo reprehenderit natus. Deleniti, repellendus omnis. Optio pariatur vero sed eius iste, eos reiciendis dolores omnis, maxime, alias voluptatem repellat maiores minima adipisci id dignissimos nostrum consequatur impedit incidunt placeat nihil ex. A numquam incidunt iure facilis culpa laboriosam.</p>
        </motion.div>

        {/* FORM AND IMAGE  */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {opacity: 1, y: 0}
            }}
          >
            <form 
              target='_blank'
              onSubmit={onSubmit}
              action="https://formsubmit.co/b2f196cd4a7085dc422000729c8d40c7"
              method="POST"
            >
              {/* NAME FIELD */}
              <div>
                <input 
                  className={inputStyle}
                  type="text"
                  placeholder='NAME'
                  {...register("name",{
                    required:true,
                    maxLength: 100,
                  })}
                />
                {
                  errors.name && (
                    <p className='mt-1 text-primary-500'>
                      {errors.name.type === 'required' && "This field is required"}
                      {errors.name.type === 'maxLength' && "Max length is 100 characters"}
                    </p>
                  )
                }
              </div>

              {/* EMAIL FIELD */}
              <div>
                <input 
                  className={inputStyle}
                  type="text"
                  placeholder='EMAIL'
                  {...register("email",{
                    required:true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                  })}
                />
                {
                  errors.email && (
                    <p className='mt-1 text-primary-500'>
                      {errors.email.type === 'required' && "This field is required."}
                      {errors.email.type === 'pattern' && "Please enter a valid email address."}
                    </p>
                  )
                }
              </div>

              {/* MESSAGE FIELD */}
              <div>
                <textarea 
                  className={inputStyle}
                  placeholder='MESSAGE'
                  rows={4}
                  cols={50}
                  {...register("message",{
                    required:true,
                    maxLength: 200,
                  })}
                />
                {
                  errors.message && (
                    <p className='mt-1 text-primary-500'>
                      {errors.message.type === 'required' && "This field is required"}
                      {errors.message.type === 'maxLength' && "Max length is 200 characters"}
                    </p>
                  )
                }
              </div>
              {/* SUMBIT BUTTON */}
              <button 
                type='submit'
                className=' py-2 px-8 my-5 rounded-lg bg-secondary-500 transition duration-500 hover:text-white'
              >SUBMIT</button>
            </form>
          </motion.div>

          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: {opacity: 1, y: 0}
            }}
            >
              {/* EVOLVE CONTENT BEHIND IMAGE  */}
            <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>  
              <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className='w-full'/>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>

  )
}

export default ContactUs