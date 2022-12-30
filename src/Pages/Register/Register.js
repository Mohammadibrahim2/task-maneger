import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import registerimg from"../../assates/login.png"
import { AuthContext } from "../../Components/DarkMood/Context/AuthProvider";
import { LightDark } from "../../Components/DarkMood/DarkMood";


const Googleprovider =new GoogleAuthProvider()

const Register=()=>{

    

 const {Signin,updateUserProfile,GoogleSignin}=useContext(AuthContext)

const handleGooglesignin=(Googleprovider)=>{
    GoogleSignin(Googleprovider)
    .then(result=>{
        const user=result.user 
        console.log(user)
    })

}

  
    const {dark}=useContext(LightDark)

    const {register,formState: { errors }, handleSubmit}=useForm()
    const[photo,setPhoto]=useState('')
    console.log("photor ke plm?",photo)
    const [data,setData]=useState( )
   
   

    const handleSinup=data=>{
        const image=data.image[0]
        console.log(data.image[0])

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
                 setPhoto(img.data.url)

            }
            console.log(img)
        })
       
        Signin(data.email,data.password)
        .then(result=>{
            toast.success("your successfully Regitered ")
            const user=result.user
            console.log(user)

            const userInfo={
                photoURL:photo,
                displayName : data.name   
              
            }
            updateUserProfile(userInfo)
            .then(()=>{})
            
        })
    }
    //    console.log(data)
    //2cacf4dc89929f34e5b8606104ad7542
   
return(
    <div className={`flex  lg:flex-row flex-col ${dark?"bg-gray-900":"bg-slate-50"} lg:h-[100vh] py-5`}>
        <div>
            <img src={registerimg}></img>
        </div>
        <form className={`lg:w-1/3 md:w-1/2 w-full px-5 mx-auto h-auto border-4 border-x-indigo-800`} onSubmit={handleSubmit(handleSinup)} >
            <h1 className="text-3xl text-indigo-700 font-semibold  font-sans my-4">Register</h1>
            <input type="name" {...register("name")} placeholder="Your Name" className="px-3 py-2 w-full border-2 border-indigo-700"/>
            <input type="file" {...register("image")}  className="px-3 py-2 w-full border-2 border-indigo-700 text-white my-2 bg-indigo-700"/>
            
            <input type="email" {...register("email",{required:"Email Address is required" })} placeholder="email" className="px-3 py-2 w-full border-2 border-indigo-700 my-3"/>
            
            <input type="password" {...register("password",{required:"password is required",minLength: { value: 6, message: "password must be 6 character" }})} placeholder="password" className="px-3 py-2 w-full border-2 border-indigo-700 my-3"/>
            
            <input type="submit" className="px-4 py-2 bg-indigo-600 text-white"/>
            <button type="button" onClick={handleGooglesignin} className="text-white bg-indigo-700 px-2 py-2 ml-2">Google Signin</button>
            <p className="text-indigo-500">Already have an account? Go to <Link to="/login" className="underline underline-offset-2 text-blue-900">Log in</Link></p>
            <p>{data}</p>
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
        </form>

    </div>
)


}
export default Register