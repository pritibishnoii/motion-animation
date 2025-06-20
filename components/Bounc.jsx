import React from 'react'
import * as motion from "motion/react-client"

const Bounc = () => {
    return (
        <div className="flex space-x-2 m-8">
            {
                [ ...Array( 3 ) ].map( ( _, index ) => {
                    return (
                        <motion.div
                            key={ index }
                            className='w-8 h-8 bg-teal-500 rounded-full'
                            animate={ {
                                y: [ 0, -15, 0 ]

                            } }
                            transition={ {
                                duration: 0.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: index * 0.2
                            } }
                        >

                        </motion.div>
                    )
                } )
            }
        </div>
    )
}

export default Bounc