import React from 'react'
import * as motion from "motion/react-client"

const variants = {
    initial: { scale: 1, rotate: 0, skew: 0 },
    hover: {
        scale: 1.2,
        rotate: 50,
        skew: '10deg',
        transition: {
            duration: 0.3
        },

    },
    click: {
        scale: 0.9, rotate: -15, transition: { duration: 0.3 }

    }
}



const BoxVariants = () => {
    return (
        <motion.div className='w-20  h-20 bg-red-400 m-8 rounded-lg'
            variants={ variants }
            initial="initial"
            whileHover="hover"
            whileTap="click"
        >

        </motion.div>
    )
}

export default BoxVariants