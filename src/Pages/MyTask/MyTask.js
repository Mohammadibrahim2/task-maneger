import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/DarkMood/Context/AuthProvider";
import { LightDark } from "../../Components/DarkMood/DarkMood";
import SubHeader from "../SubHedaer/SubHeader";
import { RiDeleteBin2Fill } from "react-icons/ri";
import {GrDocumentUpdate}from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const MyTask = () => {
    const { dark } = useContext(LightDark)
    const [store, setStore] = useState()
    const [comments,setComments]=useState([])
    const { user } = useContext(AuthContext)
    console.log(user)

    useEffect(() => {
        fetch("https://task-management-server-mohammadibrahim2.vercel.app/data")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStore(data)
            }
            )
    }, [])

    const handleDelete=(id)=>{
        fetch(`https://task-management-server-mohammadibrahim2.vercel.app/deletetask/${id}`,{

        method:"DELETE",

        })
        .then(res=>res.json()
        .then(deletedData=>{
            console.log(deletedData)
            if(deletedData.acknowledged===true){
                toast.success("successfully deleted you data")
            }
        }))


    }

    const handelComplete=(id,sto)=>{


        if(id==sto._id){
            fetch(`https://task-management-server-mohammadibrahim2.vercel.app/completedTask/${id}`,{
          
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(sto)
        })
        .then(res=>res.json())
        .then(completes=>{
            console.log(completes)
            
        })
                
        }
        else{
            toast.warning("sorry vai onno akta try koro")
        }
        

    }
   

    

    return (
        <div className={`${dark ? "bg-gray-900" : "bg-slate-50"} h-auto`}>
            <SubHeader props={"My Task"}></SubHeader>
            <p className="text-center text-3xl text-indigo-600">Name: {user?.displayName}</p>
            <div className="w-full px-5 h-auto">
                <ul className="text-xl font-semibold text-black  h-full ">
                    {store && store.map((sto, key) =>
                        <li className=" py-4 my-3 bg-white px-5 border-b border-b-indigo-800">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row ">
                                <span className="mx-2 px-2 py-2 h-[40px] rounded-full bg-indigo-500 text-white text-xl">{key + 1}</span>
                                <div>
                                <img src={sto?.image} className=" w-[100px]">
                                    </img><p className="text-2xl">{sto?.subject} </p>
                                    <p className="text-sm">{sto?.task}</p>

                                </div>
                              
                    
                                    
    
                                </div>
                                <div className="flex flex-row-reverse  ">
                                   
                                    <button onClick={()=>handleDelete(sto._id)}className="text-red-600 lg:ml-5 ml-2 text-3xl"><RiDeleteBin2Fill></RiDeleteBin2Fill></button>
                                    <Link to={`/update/${sto._id}`}><button  className="bg-purple-900 px-2 py-2 rounded-full "><GrDocumentUpdate></GrDocumentUpdate></button></Link>
                                    <Link to={`/completed`}>
                                        <button onClick={()=>handelComplete(sto._id,sto)}  className="px-2 py  bg-transparent border-2 border-indigo-700 text-indigo-700 text-xl mr-2 hover:bg-indigo-700 hover:text-white ">Completed</button>
                                        </Link>
                                </div>

                            </div>

                        </li>)
                    }

                </ul>
            </div>





        </div>
    )

}
export default MyTask