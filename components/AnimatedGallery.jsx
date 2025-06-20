"use client"
import React, { useState } from 'react'
// import * as motion from "motion/react-client";
import { motion } from "motion/react"

const images = [
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
    "assets/img5.jpg",
    "assets/img6.jpg",

]

const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            staggerDirection: 1
        }
    }
}


const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0
    }
}




const AnimatedGallery = () => {
    const [ showImages, setShowImages ] = useState( false )
    return (
        <div>
            <button
                className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-white font-bold"
                onClick={ () => setShowImages( ( prev ) => !prev ) }
            >{ showImages ? "hide image" : "show image" }</button>

            <motion.div

                variants={ parentVariant }
                initial="hidden"
                animate={ showImages ? "visible" : "hidden" }
                className='flex space-x-2'
            >
                {
                    images.map( ( image, index ) => {
                        return (
                            <motion.img key={ index }
                                variants={ childVariant }
                                src={ image }
                                alt={ `gallery-image-${ index + 1 }` }
                                className="ml-p2rem] w-[300px] rounded"
                            />
                        )
                    } )
                }
            </motion.div>
        </div>
    )
}

export default AnimatedGallery