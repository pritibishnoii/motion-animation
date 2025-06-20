"use client"
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import React from 'react'


// const UseScroll = () => {

//     const { scrollY } = useScroll()
//     const scale = useTransform( scrollY, [ 0, 300 ], [ 1, 1.5 ] )
//     const opacity = useTransform( scrollY, [ 0, 100 ], [ 1, 0 ] )
//     // console.log( scrollY )

//     // useMotionValueEvent( scrollY, 'change', ( latest ) => {
//     //     console.log( "page scroll", latest )
//     // } )

//     return (
//         <div className="h-screen flex justify-center items-center">
//             <motion.div
//                 style={ { scale, opacity } }
//                 className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg">
//                 <div className="h-[150vh] w-full"></div>jjjj
//             </motion.div>
//         </div>
//     )
// }


const UseScroll = () => {

    const { scrollY } = useScroll()
    const scale = useTransform( scrollY, [ 0, 60 ], [ 1, 0.5 ] )
    const borderRadius = useTransform( scrollY, [ 0, 1000 ], [ "0%", "50%" ] )
    // console.log( scrollY )

    // useMotionValueEvent( scrollY, 'change', ( latest ) => {
    //     console.log( "page scroll", latest )
    // } )

    return (
        <div className=" relative h-[150vh] overflow-hidden ">

            <motion.img src={ "/assets/img4.jpg" } alt="bg"
                className="absolute  w-full h-full object-cover"

                style={ { scale, borderRadius } }
            />
            <div className="sticky top-0 h-screen flex items-center justify-center ">
                <h1 className="text-indigo-900 text-4xl font-semibold text-center">scroll animation usescroll</h1>
            </div>

        </div>
    )
}

export default UseScroll