"use client"

import { motion, useScroll, useTransform } from "motion/react"
import React, { useRef } from 'react'

const images = [
    { url: "assets/img1.jpg" },
    { url: "assets/img2.jpg" },
    { url: "assets/img3.jpg" },
    { url: "assets/img4.jpg" },
    { url: "assets/img5.jpg" },
    { url: "assets/img6.jpg" },

]

const GalleryAnimationY = () => {
    const targetRef = useRef( null );
    const { scrollYProgress } = useScroll( { target: targetRef } );

    // const { scrollyProgress } = useScroll( {
    //     target: targetRef,
    //     // offset: [ "start start", "end start" ],
    // } )
    console.log( scrollYProgress )

    const x = useTransform( scrollYProgress, [ 0, 1 ], [ "1%", "-95%" ] )
    return (
        <section className=" relative  h-[400vh] bg-neutral-900 flex justify-center"
            ref={ targetRef }
        >
            <div className="sticky  top-0 flex  h-screen items-center overflow-hidden">
                <motion.div
                    style={ { x: x } }
                    className="flex gap-4"

                >
                    { images.map( ( card, index ) => <Card card={ card } key={ index }

                    />
                    ) }
                </motion.div>

            </div>

        </section>
    )
}

export default GalleryAnimationY





const Card = ( { card } ) => {
    return (
        <div className="group relative w-[10rem] h-[10rem] bg-neutral-200 overflow-hidden">
            <div style={ {
                backgroundImage: `url(${ card.url })  `,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } }

                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            >

            </div>
        </div>
    )
}



