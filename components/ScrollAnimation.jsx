import React from 'react'
import * as motion from "motion/react-client";


const ScrollAnimation = () => {

    const boxs = Array.from( { length: 6 }, ( _, index ) => index + 1 )
    // console.log( boxs )
    return (
        <>
            <div className='flex justify-center items-start mt-[100rem] ' >
                <div className='h-[200vh] w-full flex justify-center items-center'>
                    <motion.div
                        initial={ { scale: 0.5, opacity: 0 } }
                        whileInView={ {
                            scale: 2,
                            opacity: 1,
                            y: -200
                        } }
                        transition={ { duration: 1 } }
                        className='bg-white rounded-lg shadow-lg p-6 text-center '>
                        <h2 className='text-2xl font-bold mb-2 '>Amazing Card </h2>
                        <p className="">this card animate beautifully into view </p>
                    </motion.div>
                </div>
            </div>




            <div className='flex flex-col items-center justify-center min-h-screen mt-[300rem]'>
                <h1 className='text-4xl font-bold '>scroll to animate </h1>
                <div className="space-y-6">
                    {
                        boxs.map( ( box, index ) => {
                            return (
                                <motion.div
                                    initial={ { opacity: 0, scale: 0.5 } }
                                    whileInView={ { opacity: 1, scale: 1 } }
                                    transition={ { duration: 0.6, ease: "easeInOut" } }
                                    key={ index }
                                    className="w-64 h-66 bg-blue-500 flex items-center justify-center text-white rounded-lg shadow-lg"

                                >
                                    Box{ box }

                                </motion.div>
                            )
                        } )
                    }
                </div>
            </div>
        </>
    )
}

export default ScrollAnimation