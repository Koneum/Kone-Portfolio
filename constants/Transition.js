//framer motion
import { delay, motion } from "framer-motion";

//variants
const transitionVariants = {
  initial: {
    x: '100%',
    with: '100%',
  },
  animate: {
    x: '0%',
    with: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  },
}

const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-scree h-screen z-30 bg-[#03045e] opacity-[30%]"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{delay: 0.2, duration:0.6, ease: 'easeInOut'}}
      ></motion.div>

      <motion.div className="fixed top-0 bottom-0 right-full w-scree h-screen z-20 bg-[#0077b6] opacity-[20%]"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{delay: 0.4, duration:0.6, ease: 'easeInOut'}}
      ></motion.div>

      <motion.div className="fixed top-0 bottom-0 right-full w-scree h-screen z-10 bg-[#00b4d8] opacity-[10%]"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{delay: 0.6, duration:0.6, ease: 'easeInOut'}}
      ></motion.div>
      
    </>
  );
};

export default Transition;
