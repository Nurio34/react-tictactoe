
import { useState } from "react"

const Square = ({index,value,onClick}) => {

  return (

    <div 
        className="border-2 border-black aspect-square text-[19vw] grid place-content-center"
        onClick={onClick}
    >      
        {value}  
    </div>
  )
}

export default Square