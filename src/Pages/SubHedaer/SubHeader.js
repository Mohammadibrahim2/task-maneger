import React from "react";
import "./SubHeader.css"

const SubHeader=({props})=>{
    return(
        <div className="subtask h-[45vh] w-full  flex justify-start px-10 py-10">
            <h1 className="text-3xl font-sans  text-violet-900 font-semibold">Home / {props}</h1> 
            
        </div>
    )

}
export default SubHeader