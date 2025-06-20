import React from 'react'
// import { motion } from "motion/react";   for client component 
import * as motion from "motion/react-client"


const card = () => {
  return (
    // <motion.div className='bg-blue-400 w-38 h-38  my-8 mx-6 '
    // // initial={ { opacity: 0 } }
    // // animate={ { x: 200 } }
    // // animate={ { y: 100 } }
    // // animate={ { scaleX: 2 } }
    // // animate={ { rotateY: 100 } }
    // // animate={ { opacity: 1 } }
    // // animate={ { rotateX: 60 } }
    // animate={ { skewX: 20 } }></motion.div>


    // transition  --> duration (how long the animation takes)  delay(how long  to wait before starting the animation)  ,easing(the speed curve of the animation)

    // <motion.div className='bg-blue-400 w-38 h-38  my-8 mx-6 '
    //   initial={ { x: 0 } }   // initial value for transition
    //   animate={ { x: 100 } }
    //   // transition={ { delay: 2 } }
    //   // transition={ { duration: 2, ease: "easeIn" } }
    //   transition={ { duration: 2, ease: "linear" } }
    // ></motion.div>



    // keyframes
    <motion.div className='bg-blue-400 w-8 h-8  my-8 mx-6   flex justify-center items-center text-white  p-6   rounded'
      // animate={ { scale: [ 1, 2, 2, 3 ] } }  
      animate={ {
        // scale: [ 1, 2, 2, 3, 4, 3, 2, 1 ],
        // rotate: [ 0, 0, 270, 270, 0 ],
        borderRadius: [ "20%", "20%", "50%", "20%" ]

      } }
      transition={ { duration: 2, delay: 2 } }
    >
      priti
    </motion.div>
  )
}

export default card