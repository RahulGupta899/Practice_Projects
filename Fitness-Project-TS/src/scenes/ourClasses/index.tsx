import {SelectedPageEnum, IClassType} from '../../shared/types'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import {motion} from 'framer-motion'
import HText from '@/shared/HText';
// import Class from './Class'
import Class from './Class';


type Props = {
    setSelectedPage :  (value: SelectedPageEnum) => void;
}

const classes: Array<IClassType> = [
    {
        name: "Weight Training Classes", 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus necessitatibus explicabo placeat doloremque rerum quod iure incidunt assumenda impedit quae ex debitis dolorum quo deleniti laborum, eveniet at eos distinctio hic, iusto tenetur ea aliquid omnis. Sint quasi, hic libero dolore tempora delectus unde accusamus rem voluptatum, adipisci suscipit sit.',
        image: image1,
    },
    {
        name: "Yoga Classes", 
        image: image2,
    },
    {
        name: "Ab Core Classes", 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus necessitatibus explicabo placeat doloremque rerum quod iure incidunt assumenda impedit quae ex debitis dolorum quo deleniti laborum, eveniet at eos distinctio hic, iusto tenetur ea aliquid omnis. Sint quasi, hic libero dolore tempora delectus unde accusamus rem voluptatum, adipisci suscipit sit.',
        image: image3,
    },
    {
        name: "Adventure Classes", 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus necessitatibus explicabo placeat doloremque rerum quod iure incidunt assumenda impedit quae ex debitis dolorum quo deleniti laborum, eveniet at eos distinctio hic, iusto tenetur ea aliquid omnis. Sint quasi, hic libero dolore tempora delectus unde accusamus rem voluptatum, adipisci suscipit sit.',
        image: image4,
    },
    {
        name: "Fitness Classes", 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus necessitatibus explicabo placeat doloremque rerum quod iure incidunt assumenda impedit quae ex debitis dolorum quo deleniti laborum, eveniet at eos distinctio hic, iusto tenetur ea aliquid omnis. Sint quasi, hic libero dolore tempora delectus unde accusamus rem voluptatum, adipisci suscipit sit.',
        image: image5,
    },
    {
        name: " Training Classes", 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus necessitatibus explicabo placeat doloremque rerum quod iure incidunt assumenda impedit quae ex debitis dolorum quo deleniti laborum, eveniet at eos distinctio hic, iusto tenetur ea aliquid omnis. Sint quasi, hic libero dolore tempora delectus unde accusamus rem voluptatum, adipisci suscipit sit.',
        image: image6,
    },
]

const OurClasses = (props:Props) => {
    const {setSelectedPage} = props

    return (
        <section id={`#${SelectedPageEnum.OURClasses}`}>
            <motion.div
                onMouseEnter={ () => setSelectedPage(SelectedPageEnum.OURClasses)}
                className='bg-primary-100 py-20'
            >
                <motion.div
                    className='mx-auto w-5/6'
                    initial='hidden'
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>
                            OUR CLASSES
                        </HText>
                        <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ipsum rem amet temporibus laborum qui necessitatibus quisquam molestias voluptate voluptatum minima labore delectus natus molestiae aliquid, eaque sed architecto dolorum, enim est debitis. Sit animi atque vero eos dolores. Corporis optio officiis vel in autem quis voluptates ipsum sequi unde rem hic nesciunt, omnis ea dignissimos enim quas quasi harum obcaecati fuga placeat quia minima laborum iste.</p>
                    </div>
                </motion.div>

                {/* IMAGES HORIZONTAL SCROLL */}
                <div className='mt-10 h-[353px] image-container w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {
                            classes.map(( item: IClassType, index) => (
                                <Class
                                    key={`${item.name}-${item.name}`}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))
                        }
                    </ul>
                </div>

            </motion.div>
        </section>
    )
}

export default OurClasses;