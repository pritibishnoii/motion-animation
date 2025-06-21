import React from 'react'
import * as  motion from "motion/react-client";


const Loader = () => {
    return (
        <motion.div
            className="border-12  border-solid   border-blue-400 rounded-full  w-30 h-30 mx-auto mb-8 relative"
            animate={ { rotate: 360 } }
            transition={ { duration: 1, repeat: Infinity, ease: "linear" } }
        >
            <motion.div
                className="border-12  border-solid   border-blue-800 rounded-full  w-24 h-24 absolute inset-0 border-t-transparent "
                animate={ { opacity: [ 1, 0.5, 1 ] } }
                transition={ { duration: 1, ease: "easeInOut", repeat: Infinity } }
            ></motion.div>
        </motion.div>
    )
}

export default Loader