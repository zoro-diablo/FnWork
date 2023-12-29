import { IoMdContact } from 'react-icons/io'
import { PiPhoneCallBold } from 'react-icons/pi'
import { motion } from 'framer-motion'
import Framer from '../magframer/Framer'
import logo from '../../assets/logo.png'
import Profile from '../profile/Profile'
import { useState } from 'react'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
}

const Navbar = () => {

  const [showProfile, setShowProfile] = useState(false)
  
 const handleClick = () => {
   setShowProfile(!showProfile)
 }
  return (
    <div className='bg-slate-200 w-full h-14 '>
      <div className='h-14 flex items-center justify-between w-full'>
        <div className='flex cursor-pointer '>
          <div className=' text-[20px] font-semibold font-mono'>
            <motion.div
              className='textContainer flex'
              variants={textVariants}
              initial='initial'
              animate='animate'
              whileInView={'animate'}
            >
              <motion.div
                variants={textVariants}
                className='mt-1 ml-5 font-mono font-semibold text-2xl'
              >
                <img src={logo} alt='fnmoney' width={110} />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className='flex mr-5 gap-10'>
          <Framer>
            <IoMdContact
              size={35}
              className='cursor-pointer'
              onClick={handleClick}
            />
          </Framer>
          <Framer>
            <PiPhoneCallBold size={30} className=' cursor-pointer mt-[2px]' />
          </Framer>
        </div>
      </div>
      {showProfile && <Profile />}
    </div>
  )
}

export default Navbar
