"use client"
import React from 'react'
import { motion, useScroll, useTransform } from "motion/react"

const PageScrollAnimation = () => {

    const { scrollYProgress } = useScroll()


    //animation for 1st sectoon 
    const y1 = useTransform( scrollYProgress, [ 0, 0.1 ], [ 100, 0 ] )
    const opacity1 = useTransform( scrollYProgress, [ 0, 0.1 ], [ 0, 1 ] )
    const scale1 = useTransform( scrollYProgress, [ 0, 0.1 ], [ 0.8, 1 ] )
    //animation for 2en sectoon

    const y2 = useTransform( scrollYProgress, [ 0.2, 0.3 ], [ 100, 0 ] )
    const opacity2 = useTransform( scrollYProgress, [ 0.2, 0.3 ], [ 0, 1 ] )
    const scale2 = useTransform( scrollYProgress, [ 0.2, 0.3 ], [ 0.8, 1 ] )

    //animation for 3rd sectoon

    const y3 = useTransform( scrollYProgress, [ 0.4, 0.5 ], [ 100, 0 ] )
    const opacity3 = useTransform( scrollYProgress, [ 0.4, 0.5 ], [ 0, 1 ] )
    const scale3 = useTransform( scrollYProgress, [ 0.4, 0.5 ], [ 0.8, 1 ] )


    return (
        <div className=" overflow-hidden ">

            {/* first section  */ }

            <motion.div className="h-screen  flex items-center  justify-center  bg-blue-300"
                style={ {
                    y: y1,
                    opacity: opacity1,
                    scale: scale1
                } }
            >

                <div className=".text-center p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-blue-800 ">
                        welcom to the journey
                    </h1>
                    <p className="mt-4 text-center text-gray-600">scroll down to see more animations.</p>
                </div>
            </motion.div>




            {/* second section  */ }
            <motion.div className="h-screen  flex items-center  justify-center  bg-green-500"
                style={ { y: y2, opacity: opacity2, scale: scale2 } }
            >

                <div className=".text-center p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-blue-800">
                        welcom to the journey
                    </h1>
                    <p className="mt-4  text-center text-gray-600">scroll down to see more animations.</p>
                </div>
            </motion.div>

            {/* third section  */ }
            <motion.div className="h-screen  flex items-center  justify-center  bg-indigo-600"
                style={ { y: y3, opacity: opacity3, scale: scale3 } }
            >

                <div className=".text-center p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-blue-800">
                        welcom to the journey
                    </h1>
                    <p className="mt-4 text-gray-600 text-center ">scroll down to see more animations.</p>
                </div>
            </motion.div>



        </div>
    )
}

export default PageScrollAnimation