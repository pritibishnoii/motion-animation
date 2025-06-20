"use client"
import React from 'react';
import *  as motion from "motion/react-client"
// import { motion } from "motion/react";

//whileHover
//whileTap
//whileDrag

const Gesture = () => {

    // gestures allow us to add interactive animation based on user action like  dragging,hovering,or tapping. it makes our components respond to how users intract with them.
    return (
        // <motion.div className='bg-yellow-300 w-20 h-20 rounded-full'
        //     // whileTap={ { backgroundColor: "green" } }
        //     // whileHover={ { scale: 0.8 } }
        //     dragConstraints={ {
        //         top: 60,
        //         left: 50,
        //         right: 50
        //     } }
        //     drag
        //     whileDrag={ { scale: 1.1, backgroundColor: "orange" } }
        //     transition={ { type: "spring", stiffness: 300, } }
        // >

        // </motion.div>
        <motion.div
            initial={ { scale: 1, rotate: 0 } }
            whileHover={ { scale: 1.05, rotate: 3 } }
            whileTap={ { scale: 0.95 } }
            drag
            dragConstraints={ { left: 50, right: 50 } }
            transition={ { type: "spring", stiffness: 300 } }
            dragElastic={ 0.2 }
            className=" max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer mt-8">
            <img src="https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card"

                className=" w-full object-cover h-48"
            />
            <div className='p-6'>
                <h2 className=" text-xl  font-semibold mb-2 ">Dynamic Card Title</h2>
                <p className=" text-gray-700 mb-4">this is my simple and amazing card built with  amazing animation</p>
                <button className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Learn more</button>
            </div>
        </motion.div>
    )
}

export default Gesture