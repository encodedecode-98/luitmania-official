import React from 'react'
import {motion} from 'framer-motion';


const Test = () => {
  return (
    <div className="course">
        <motion.div className="box"
         initial = {{opacity : 0.5 , scale : 0.5}}
         animate  = {{opacity : 1 ,scale : 1}}
         transition={{duration:1 , delay : 0}}
        //  whileHover={{opacity : 1 , scale : 0.5}}
        whileInView={{opacity : 1, scale : 0.5}}
        ></motion.div>
    </div>
  )
}

export default Test