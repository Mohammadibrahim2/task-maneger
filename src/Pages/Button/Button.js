
import React from "react";

const MyButton=({props})=>{
    return(
        <div>

<button className="text-2xl font-sans px-4 py-2 bg-indigo-600 text-white rounded-lg
hover:bg-indigo-100 hover: border-2 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 delay-100 ease-in-out">{props}</button>

        </div>
    )
}
export default MyButton