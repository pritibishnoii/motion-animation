"use client"
import React from 'react'
// import * as motion from "motion/react-client";
import { motion, useMotionValue, useMotionValueEvent, useSpring, useTransform } from "motion/react"



const MotionHook = () => {
    // const x = useMotionValue( 100 );

    const x = useMotionValue( 0 )
    const y = useMotionValue( 0 )
    const backgroundColor = useTransform( x, [ -100, 100 ], [ "#ff0000", "#00ff00" ] )
    useMotionValueEvent( x, "animationStart", () => {
        console.log( "animation started x" )
    } )
    useMotionValueEvent( x, "change", ( latest ) => {
        console.log( " x is chnaged to  ", latest )
    } )


    const scale = useSpring( 1 )
    // const scale = useMotionValue( 1 )
    console.log( x )


    const handleChnage = ( e ) => {
        scale.set( parseFloat( e.target.value ) )
    }
    return (
        <>
            <motion.div
                style={ { scale } }
                className='bg-yellow-500 w-20 h-20 rounded-full'
            // // animate={ { y: -50 } }
            // // transition={ { duration: 2 } }
            // drag
            // dragConstraints={ { left: 0, right: 200 } }
            // style={ { x } }
            />


            <div className='mt-[6rem] flex justify-center'>
                <input
                    type="range"
                    min={ 0.5 }
                    max={ 5 }
                    step={ 0.01 }
                    defaultValue={ 1 }
                    onChange={ handleChnage }
                />



                <motion.div
                    drag
                    dragConstraints={ {
                        left: -200,
                        right: 200,
                        top: -200,
                        bottom: 200
                    } }
                    style={ { x, y, backgroundColor } }
                    className='w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer'>

                    <span>Drag me! </span>
                </motion.div>

            </div>
        </>



    )
}

export default MotionHook