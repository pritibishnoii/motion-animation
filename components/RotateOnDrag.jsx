"use client"
import React, { useState } from 'react'
import { color, motion } from "motion/react"


const RotateOnDrag = () => {


    const colors = [ "bg-teal-600", "bg-green-300", "bg-red-500", "bg-yellow-500", "bg-blue-900", "bg-indigo-700" ]

    const [ rotation, setRotation ] = useState( 0 )
    const [ colorIndex, setColorIndex ] = useState( 1 )



    const handleRotation = ( _, info ) => {
        console.log()
        const newRotate = rotation + info.offset.x
        setRotation( newRotate )
        console.log( newRotate )
    }


    const handleChangeColor = () => {
        setColorIndex( ( prev ) => ( prev + 1 ) % colors.length )
        // const randomeIndex = Math.floor( Math.random() * colors.length )
        // console.log( randomeIndex )
        // setColorIndex( randomeIndex )
    }
    return (
        <>
            <motion.div className=" w-30 h-30 rounded-lg bg-red-400  flex justify-center items-center"
                drag
                onDrag={ handleRotation }
                style={ { rotate: rotation } }
            >
                Drag Me !
            </motion.div>


            <motion.div className={ ` w-60 h-60 rounded-lg   ${ colors[ colorIndex ] } flex justify-center items-center break-words cursor-pointer   text-white font-bold` }
                onTap={ handleChangeColor }

            >
                Change Color of box
            </motion.div>
        </>
    )
}

export default RotateOnDrag