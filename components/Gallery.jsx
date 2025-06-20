
import React from 'react'
import * as motion from "motion/react-client";



const images = [
    {
        src: "assets/img1.jpg"
        , caption: "Caption for image 1"
    },
    {
        src: "assets/img2.jpg",
        caption: "Caption for image 2"
    },
    {
        src: "assets/img3.jpg",
        caption: "Caption for image 3"
    },
    {
        src: "assets/img4.jpg",
        caption: "Caption for image 4"
    },
    {
        src: "assets/img5.jpg",
        caption: "Caption for image 5"
    },
    {
        src: "assets/img6.jpg",
        caption: "Caption for image 6"
    },
]
const Gallery = () => {
    return (
        <div className='w-[80%] flex '>
            {
                images.map( ( image, index ) => {
                    return (
                        <motion.div
                            key={ index }
                            className="relative m-[1rem] overflow-hidden shadow-lg rounded-lg"
                            whileHover={ { scale: 1.05 } }
                        >
                            <img src={ image.src } alt={ "imge" }
                                className='w-68 h-auto'
                            />
                            <motion.div
                                className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0  transition-opacity duration-300 cursor-pointer"
                                whileHover={ { opacity: 1 } }
                            >
                                <p className='text-sm'>{ image.caption }</p>
                            </motion.div>

                        </motion.div>
                    )
                } )
            }
        </div>
    )
}

export default Gallery