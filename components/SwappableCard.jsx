"use client"
import React, { useState } from 'react'
import { motion } from "motion/react"





const SwappableCard = () => {
    const [ isRemoved, setIsRemoved ] = useState( false )

    const handleSwap = ( _, info ) => {
        console.log( "info--", info )
        if ( info.offset.x > 100 ) {
            setIsRemoved( true )
        } else if ( info.offset.x < -100 ) {
            setIsRemoved( true )
        }
    }
    return (
        <div className='flex justify-center h-68 items-center'>
            <motion.div className={ `w-64 h-32 bg-blue-500 rounded-lg flex items-center justify-center ${ isRemoved ? "hidden" : "" }` }
                drag="x"
                dragConstraints={ { lefft: -100, right: 100 } }
                onDragEnd={ handleSwap }
                transition={ { type: "spring", duration: 0.9 } }
            >
                Swipe Me!
            </motion.div>
        </div>
    )
}

export default SwappableCard