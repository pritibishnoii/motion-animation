// import * as motion from "motion/react-client"
"use client"
import { motion } from "motion/react";
import React, { useState } from 'react'

const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 }
}


const Varients = () => {
    const [ isVisible, setIsVisible ] = useState( false )
    return (
        <motion.div
            className="w-20 h-20 bg-teal-900 m-8 cursor-pointer"
            variants={ variants }
            initial="hidden"
            animate={
                isVisible ? "visible" : "hidden"
            }
            exit="exit"
            transition={ { duration: 1 } }
            onClick={ () => setIsVisible( !isVisible ) }
        >

        </motion.div>
    )
}

export default Varients