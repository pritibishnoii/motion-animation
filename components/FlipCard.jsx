
"use client"
import React, { useState } from 'react'
import { motion } from "motion/react"



const variants = {
    fron: { rotateY: 0 },
    back: { rotateY: 180 }
}
export const FlipCard = () => {

    const [ isFliped, setIsFliped ] = useState( true );

    return (
        <motion.div className='perspective-1000'
            onClick={ () => setIsFliped( !isFliped ) }
        >
            <motion.div className=' m-8 w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-perserve-3d'
                variants={ variants }
                initial="front"
                animate={ isFliped ? "back" : "front" }
                transition={ { duration: 0.6 } }
            >

                {/* front side  */ }
                <motion.div
                    className=" absolute  inset-0 bg-white flex items-center justify-center text-xl font-bold ">
                    Front side
                </motion.div>
                {/* back side  */ }
                <motion.div
                    className=" absolute  inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold ">
                    Back side
                </motion.div>

            </motion.div>

        </motion.div>
    )
}
