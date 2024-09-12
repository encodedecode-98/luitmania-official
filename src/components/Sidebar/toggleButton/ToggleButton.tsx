import React from 'react'

const ToggleButton = ({setOpen} : any) => {
  return (
    <button onClick={()=>setOpen((prev:any)=>!prev)}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <path strokeWidth="3" stroke='white' strokeLinecap="round"/>
            <path strokeWidth="3" stroke='white' strokeLinecap="round"/>
            <path strokeWidth="3" stroke='white' strokeLinecap="round"/> 
        </svg>
    </button>
  )
}

export default ToggleButton