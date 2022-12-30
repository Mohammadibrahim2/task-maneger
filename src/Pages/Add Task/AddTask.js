import { Button ,TextField} from "@mui/material";
import React, { useContext } from "react";
import { LightDark } from "../../Components/DarkMood/DarkMood";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import Header from "./Header";
import SubHeader from "../SubHedaer/SubHeader";
import { AuthContext } from "../../Components/DarkMood/Context/AuthProvider";
import { toast } from "react-hot-toast";

const AddTask=()=>{
 
    const {register,formState: { errors }, handleSubmit}=useForm()
    const [data,setData]=useState( )
    const[singlephoto,setPhoto]=useState({})

     const {user}=useContext(AuthContext)
   
    const {dark}=useContext(LightDark)
    const handletask=(data)=>{
        console.log(data)
       
        const image=data.photo[0]
        console.log(data.photo[0])

        const formData=new FormData()
        formData.append("image",image)
        const url="https://api.imgbb.com/1/upload?expiration=600&key=acbca0356cf868436c7c6a4a4783d467"
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(img=>{
            if(img.success){
                console.log(img.data.url)
                
                 const postedPhoto=img.data.url
                data["image"]=postedPhoto;
              
                const newUpdatedata=data
                console.log(newUpdatedata,"data update hoice")
                setPhoto(newUpdatedata)

                fetch("https://task-management-server-mohammadibrahim2.vercel.app/task",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(data)
                })
                .then(res=>res.json())
                .then(addedData=>{
                    console.log(addedData)
                    if(addedData.acknowledged===true){
                        toast.success("successfully added your data into database")
                    }
                })
                

            }
           
        })


      

    }
    return(
        <div  className={`${dark?"bg-gray-900":"bg-slate-50"} h-auto`}>
            <SubHeader  props={"Add Task"}></SubHeader>
           
            <form className="lg:w-1/3 md:w-1/2 w-full  py-5 px-4 mx-auto border-4 border-indigo-900 my-3 rounded-lg" onSubmit={handleSubmit(handletask)} >
            <h1 className="text-3xl text-indigo-700 font-semibold  font-sans py-4">Add Your Task</h1>
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
export default AddTask