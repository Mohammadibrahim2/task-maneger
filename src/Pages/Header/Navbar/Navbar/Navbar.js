import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LightDark } from "../../../../Components/DarkMood/DarkMood";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import {RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../../../Components/DarkMood/Context/AuthProvider";
const Navbar=()=>{

    const{dark,setDark}=useContext(LightDark)

    const [toggle,setToggle]=useState(false)

    const{logout,user}=useContext(AuthContext)

    const handleLogOut=()=>{
        logout()
        .then(()=>{})
    }
    const menu=[
        <li onClick={()=>setToggle(false)}><Link to="/addtask">Add Task</Link></li>,
        <li   onClick={()=>setToggle(false)} className="lg:mx-4"><Link to="/mytask">My Task</Link></li>,
        <li  onClick={()=>setToggle(false)}><Link to="/completed">Completed Task</Link></li>,
        <>
        {user?<><li  onClick={handleLogOut} className="lg:mx-4"><Link>Log Out</Link></li>
        <img src={user?.photoURL} className="w-[50px] h-[50px] rounded-full"/></>:
            <li  onClick={()=>setToggle(false)} className="lg:mx-4"><Link to="/login">Log In</Link></li>
    }</>
            
        
        
        
        
    ]
    return(
        <div className={`flex flex-row justify-between items-center px-5 py-3
         ${dark?"bg-violet-900":"bg-violet-600"}  text-white relative `}>
            <div className="text-3xl font-semibold font-mono "><Link to="/">Task Manager</Link></div>

            <div className={` ${dark?"bg-violet-900":"bg-violet-600"} ${toggle? "top-14 left-0 z-50  ":"bottom-16 left-0"} w-full h-[200px] absolute  lg:hidden left-0`} > 
            
            {/* large device */}
            <div className="text-xl font-sans list-none flex flex-col justify-between items-start  px-4  py-3 h-full">
                {menu}
                <button className={`text-2xl lg:ml-4 px-3 py rounded-md ${dark?"bg-gray-800":"bg-white"} `}>
                    {
                    dark?<button onClick={()=>setDark(!dark)} ><BsMoonStarsFill className="text-slate-200"></BsMoonStarsFill></button>:
                    <button onClick={()=>setDark(!dark)}  ><MdOutlineLightMode className="text-yellow-400"></MdOutlineLightMode></button>
                }
                </button >
                </div></div>
             {/* large device */}


             <div  > 
            
            {/* large device */}
            <div className="text-lg font-sans list-none lg:flex lg:flex-row lg:justify-around  lg:items-center hidden ">
                {menu}
                <button className={`text-2xl lg:ml-4 px-3 py rounded-md ${dark?"bg-gray-800":"bg-white"} `}>
                    {
                    dark?<button onClick={()=>setDark(!dark)} ><BsMoonStarsFill className="text-slate-200"></BsMoonStarsFill></button>:
                    <button onClick={()=>setDark(!dark)}  ><MdOutlineLightMode className="text-yellow-400"></MdOutlineLightMode></button>
                }
                </button >
                </div></div>

                 {/* small devce */}
                 <button className="text-3xl lg:hidden ">
                    {
                        toggle?<RxCross2 onClick={()=>setToggle(!toggle)} ></RxCross2>:
                         <FaBars onClick={()=>setToggle(!toggle)}></FaBars>
                    }
                 </button>
                {/* small devce */}
        </div>
    )
}
export default Navbar