import React, { useState } from 'react'
import Links from './links/Links'
import {motion} from 'framer-motion';
import ToggleButton from './toggleButton/toggleButton';

const Sidebar = () => {
  const [open,setOpen] = useState(false);
  const variants = {
    open : {
        clipPath : "circle(1200px at 50px 50px ) ",
        transition : {
            type : "spring",
            
        }
    }, 
    closed : {
        clipPath : "circle(30px at 50px 50px)",
        transition : {
            delay : 0.5, 
            type : "spring",
            stiffness : 400,
            damping : 40
        }
    }
  }
  return (
   <motion.div className="sidebar">
    <motion.div  className="bg" variants ={variants}>
        <Links></Links>
    </motion.div>
    <ToggleButton  setOpen  = {setOpen}  />
   </motion.div>
  )
}

export default Sidebar