import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 8,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition 