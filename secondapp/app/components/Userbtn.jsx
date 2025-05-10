"use client"
import React from 'react'

const Userbtn = ({name}) => {
    const Printname = () => {
        console.log(name)
    }
  return (
    <div>
        <button onClick={()=>Printname()} className=' px-8 bg-gray-800 h-min rounded-md text-white'>click me</button>
    </div>
  )
}

export default Userbtn