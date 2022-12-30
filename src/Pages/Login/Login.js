import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaRegistered } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/DarkMood/Context/AuthProvider";
import { LightDark } from "../../Components/DarkMood/DarkMood";

const Login=()=>{
    const {dark}=useContext(LightDark)

    const {register,formState: { errors }, handleSubmit}=useForm()
    const [data,setData]=useState( )
    const {login}=useContext(AuthContext)

    const handleLogin=data=>{
        login(data.email,data.password)
        .then(result=>{
            const user=result.user 
            console.log(user)
            toast.success("You are successFuly login")
        })
 
    //    console.log(data)
    }
return(
    <div className={`${dark?"bg-gray-900":"bg-slate-50"} lg:h-[100vh] py-5`}>
        <form className="lg:w-1/3 md:w-1/2 w-full  mx-auto border-8 border-y-indigo-800 px-5 py-10 drop-shadow-2xl " onSubmit={handleSubmit(handleLogin)} >
            <h1 className="text-3xl text-indigo-700 font-semibold  font-sans py-4">Log in</h1>
            <input type="email" {...register("email",{required:"Email Address is required" })} placeholder="email" className="px-3 py-2 w-full border-2 border-indigo-700"/>
            
            <input type="password" {...register("password",{required:"password is required",minLength: { value: 6, message: "password must be 6 character" }})} placeholder="password" className="px-3 py-2 w-full border-2 border-indigo-700 my-4"/>
            
            <input type="submit" className="px-4 py-2 bg-indigo-600 text-white"/>
            <p className="text-xl text-indigo-500">New in this task manager? <Link to="/sinup" className="underline underline-offset-2 text-blue-900">SinUp</Link></p>
            <p>{data}</p>
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
        </form>

    </div>
)


}
export default Login