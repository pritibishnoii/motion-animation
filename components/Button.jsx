import React from 'react'
import * as motion from 'motion/react-client'

const Button = () => {
    return (
        <motion.button className='py-2 px-4 bg-blue-500 text-white ml-8'
            animate={ {
                scale: [ 1, 1.1, 1 ],
                backgroundColor: [ "#3b82f6", "#60a5fa", "#3b82f6" ],


            } }
            transition={ {
                duration: 0.8,
                ease: "easeInOut",
                // repeat: 2
                repeat: Infinity
            } }
        >
            click me
        </motion.button>
    )
}

export default Button