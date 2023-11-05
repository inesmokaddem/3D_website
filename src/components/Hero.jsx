import { motion } from 'framer-motion';
import { styles } from '../styles'
// import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0076E2]'/>
          <div className='w-1 sm:h-80 h-40 blue-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} blue-shadow`}>Kinésithérapie et Ostéopathie à <span className='text-[#0076E2]'>Labenne</span></h1>
          <p className={`${styles.heroSubText} mt-2 blue-shadow`}>Massages et Rééducation, de la prévention jusqu'à la récupération <br className='sm:block hidden'/>totale des pathologies dans votre cabinet situé à Labenne.</p>
        </div>

      </div>

      {/* <ComputersCanvas/> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#à_propos'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-blue flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-blue mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    
  )
}

export default Hero