import React from 'react'
import *  as motion from "motion/react-client"

const images = [
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
    "assets/img5.jpg",
    "assets/img6.jpg",

]

const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}
const StaggerItems = () => {
    const text = "welcome Back ! "
    const items = [ "item1", "item2", "item3", "item4", "item5", "item6" ]
    return (
        <>
            <div className='w-full flex justify-center'>
                <motion.h1
                    className="text-center text-indigo-900 font-bold text-4xl"
                    variants={ {
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    } }
                    initial="hidden"
                    animate="visible"

                >
                    { text.split( "" ).map( ( char, index ) => <motion.span key={ index } variants={ staggerVariants }>{ char }</motion.span> ) }

                </motion.h1>
            </div>




            <motion.ul className=" w-40 "
                initial="hidden"
                animate="visible"
                variants={ {
                    visible: { transition: { staggerChildren: 1 } }
                } }
            >
                {
                    items.map( ( item, index ) => {
                        return (
                            <motion.li
                                variants={ staggerVariants }
                                key={ index }
                                className=" bg-yellow-400 mb-2 p-8 rounded"
                            >{ item }</motion.li>
                        )
                    } )
                }
            </motion.ul>


            <motion.ul className=" w-40 flex "
                initial="hidden"
                animate="visible"
                variants={ {
                    visible: { transition: { staggerChildren: 1 } }
                } }
            >
                {
                    images.map( ( img, index ) => {
                        return (
                            <motion.img
                                src={ img }
                                variants={ staggerVariants }
                                key={ index }
                                className="  mb-2  rounded"
                            />
                        )
                    } )
                }
            </motion.ul>



            <motion.div className=" grid  grid-cols-3 gap-4 "
                initial="hidden"
                animate="visible"
                variants={ {
                    visible: { transition: { staggerChildren: 0.6 } }
                } }
            >
                {
                    items.map( ( item, index ) => {
                        return (
                            <motion.div
                                variants={ staggerVariants }
                                key={ index }
                                className="  mb-2 bg-indigo-600  rounded p-8 text-white font-bold"
                            >{ item }</motion.div>
                        )
                    } )
                }
            </motion.div>
        </>
    )
}

export default StaggerItems