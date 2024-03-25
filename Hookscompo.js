import React from 'react'
import {useState} from 'react'
function Hookscompo(){
    const[data,SetData]=useState("tulika")
    return(
        <div>
            <h1>hook value is {data}</h1>
            <button onClick={()=>{SetData("tulika Jaiswal")}}>click me !</button>

        </div>
    )
}
export default Hookscompo 