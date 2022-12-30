import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LightDark } from "../../../Components/DarkMood/DarkMood";
import MyButton from "../../Button/Button";
import headerimg from "../../../assates/task2.png"

const Header=()=>{
    const {dark}=useContext(LightDark)

    return(
        <div className={`${dark?"bg-zinc-900":"bg-indigo-100"} lg:h-[100vh] h-auto flex lg:flex-row flex-col-reverse lg:justify-center w-full lg:items-center lg:px-10 px-3`}>
            <div className="flex  h-full lg:h-1/2 flex-col  lg:w-1/2">
             <h1 className={`${dark?"text-blue-50":"text-violet-900"} leading-normal  text-5xl font-sans font-semibold my-8  `}>Wellcome to Your Task Management Web Application</h1>
           <Link to="/addtask"><MyButton props={"Get Start"}></MyButton></Link>
            </div>
            <div className="lg:w-2/3 w-full ">
                <img className="w-full" src={headerimg} alt=""/>
            </div>

         

            
        </div>
    )

}
export default Header