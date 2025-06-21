"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"

const images = [
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
    "assets/img5.jpg",
    "assets/img6.jpg",

]
const GestureBasedImageGallery = () => {

    const [ currentIndex, setcurrentIndex ] = useState( 0 );

    const handleSwipe = ( _, info ) => {
        if ( info.offset.y > 100 ) {
            setcurrentIndex( ( prev ) => ( prev - 1 + images.length ) % images.length )// 0-1%6   =0 - 1 + 6 = 5  5%6 -5    (0 - 1 + 6)%6
            5
        } else if ( info.offset.y < -100 ) {
            setcurrentIndex( ( prev ) => ( prev + 1 ) % images.length )// 0+1%6  2%6 
        }
    }


    return (
        <div className="w-78 h-78 rounded  relative  mx-auto">

            <AnimatePresence>
                <motion.img src={ images[ currentIndex ] } alt={ `slide +${ currentIndex + 1 }` }
                    className="w-full  h-full rounded "
                    key={ currentIndex }
                    drag="y"
                    dragConstraints={ { top: 0, bottom: 0 } }
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit={ { opacity: 0 } }
                    onDragEnd={ handleSwipe }

                />
            </AnimatePresence>
        </div>
    )
}

export default GestureBasedImageGallery