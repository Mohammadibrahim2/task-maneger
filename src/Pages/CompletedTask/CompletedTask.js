import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { LightDark } from "../../Components/DarkMood/DarkMood";
import SubHeader from "../SubHedaer/SubHeader";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-hot-toast";

const CompletedTask = () => {
    const[completedData,setCompletedData]=useState([])

    useEffect(()=>{
        fetch("https://task-management-server-mohammadibrahim2.vercel.app/completed")
        .then(res=>res.json())
        .then(completedAllData=>{
            console.log(completedAllData)
            setCompletedData(completedAllData)
        })
    },[])
    const { dark } = useContext(LightDark)
    

    
    const handlecomment=(event,subject)=>{
        event.preventDefault()
        
        console.log(event.target.comment.value)
        const Comment=event.target.comment.value 
        console.log(subject)
       
        fetch(`https://task-management-server-mohammadibrahim2.vercel.app/comment/${subject}`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({subject,Comment})
        })
        .then(res=>res.json()
        .then(infor=>{
            console.log(infor)
            
           

        }))
        fetch(`https://task-management-server-mohammadibrahim2.vercel.app/comment/${subject}`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            // setComments(result)
        })

        
        
    }
    const handleDelete=(id)=>{
        fetch(`https://task-management-server-mohammadibrahim2.vercel.app/deletetask/${id}`,{

        method:"DELETE",

        })
        .then(res=>res.json())
        .then(deletedData=>{
            if(deletedData.acknowledged===true){
                toast.success("successfully deleted your data")
            }
        })
    }

    return (
        <div className={`${dark ? "bg-gray-900" : "bg-slate-50"} h-[100vh] w-full `}>
            <SubHeader props={"Completed Task"}></SubHeader>
            <h1 className={`text-3xl ${dark?"text-white":"text-indigo-900"} font-sans font-semibold text-center `}>Your Completed Task</h1>
            <div className=" px-5 py-10 h-auto bg-indigo-100 border-y-4 border-y-indigo-700  w-full mx-auto">
               
                <div className="bg-indigo-100 ">
                    {
                        completedData.map(dta=>
                        <div className=" flex md:flex-row flex-col  justify-between my-3">
                            <div>
                             <img src={dta.image} className="w-[150px]"></img>
                    <h1 className="text-2xl">{dta.subject}</h1>
                    <h2>{dta.task}</h2>
                    <form onSubmit={(event)=>handlecomment(event,dta.subject)}>
                        <input type="text" name="comment" placeholder="write your comment" className=" text-xl px-3 py-2 border border-indigo-700"></input>
                        <button type="submit" className="border border-indigo-700 bg-indigo-700 text-white text-xl px-2 py-2 ">Comment</button>
                    </form>
                    </div>

                    <div className="flex flex-row justify-around items-center">
                    <button onClick={()=>handleDelete(dta._id)} className="text-red-600 px-3 py-2 text-4xl"><RiDeleteBin2Fill></RiDeleteBin2Fill></button>
                    <Link to="/mytask"><button className="bg-indigo-700 px-3 py-2 text-white rounded-lg">Not Completed</button></Link>
                </div>
                        </div>)
                    }
                   

                    
                </div>
               

            </div>


        </div>
    )

}
export default CompletedTask