import React from 'react'
import * as motion from "motion/react-client"



// stagger animation refers to a technique where multiple elements animate in a sequence rather than all at once. this creates a more dynamic and visually appealing effect, as each element appears or moves slightly after the previouse one , adding a sence of rhythm and flow to the animation



const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        // transition: { staggerChildren: 1 }
        transition: { staggerChildren: 0.8 }
    }
}
const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}
const StagerAnimation = () => {
    return (
        <motion.div className='flex  space-x-4 m-8 '
            variants={ parentVariant }
            initial="hidden"
            animate="visible"

        >

            {
                [ ...Array( 5 ) ].map( ( _, index ) => {
                    return (
                        <motion.div
                            key={ index }
                            variants={ childVariant }
                            // initial="hidden"
                            // animate="visible"
                            className="  bg-yellow-300 w-10 h-10 rounded-full ">

                        </motion.div>
                    )
                } )
            }
        </motion.div>
    )
}

export default StagerAnimation