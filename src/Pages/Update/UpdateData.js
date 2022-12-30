
import { useLoaderData } from "react-router-dom";
import { LightDark } from "../../Components/DarkMood/DarkMood";
import SubHeader from "../SubHedaer/SubHeader";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import registerimg from"../../assates/login.png"
import { AuthContext } from "../../Components/DarkMood/Context/AuthProvider";
import { toast } from "react-hot-toast";


const UpdateData=()=>{



    const {register,formState: { errors }, handleSubmit}=useForm()
    const [data,setData]=useState( )

     const {user}=useContext(AuthContext)
   
    
    const handleUpdate=(data)=>{
        console.log(data)
        console.log(data.photo[0].name)
        fetch(`https://task-management-server-mohammadibrahim2.vercel.app/updatedTask/${polo._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(updatedData=>{
            console.log(updatedData)
            if(updatedData?.acknowledged===true){
                toast.success("successfully updated your data")
            }
        })

    }

    const {dark}=useContext(LightDark)
    const polo=useLoaderData()
    console.log(polo,"polo")

    return(
        <div className={`${dark?"bg-gray-900":"bg-slate-50"} `}>
            <SubHeader props={"Updating data"}></SubHeader>


            <form className="lg:w-1/3 md:w-1/2 w-full  py-5 px-4 mx-auto border-2 border-indigo-600 rounded-md my-3 " onSubmit={handleSubmit(handleUpdate)} >
            <h1 className="text-3xl text-indigo-700 font-semibold  font-sans py-4">Update Your Task</h1>
            <input type="text" {...register("subject",{required:"subject is requred" })} placeholder="subject" className="px-3 py-2 w-full border-2 border-indigo-700"/>
            <input type="file" {...register("photo",{required:"file is requred" })} className=" my-2 bg-indigo-700  text-white px-3 py-2 w-full border-2 border-indigo-700"/>
            <textarea type="password" {...register("task",{required:""})} placeholder="write your task" className="px-3 py-2 w-full border-2 border-indigo-700 my-4"/>
            
            <input type="submit" className="px-4 py-2 bg-indigo-700 text-white font-semibold "/>
            
            <p>{data}</p>
            {errors.subject && <p className="text-red-600" role="alert">{errors.subject?.message}</p>}
           
        </form>
        </div>
    )
}
export default UpdateData