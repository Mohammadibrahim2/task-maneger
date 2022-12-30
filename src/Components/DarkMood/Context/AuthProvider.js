import React, { children, createContext, useEffect, useState } from "react";
import app from "../../../firebase.config";
import {signOut,updateProfile,signInWithPopup, createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const auth=getAuth(app)

export const AuthContext=createContext()

const AuthProvider=({children})=>{

    const [user,setUser]=useState({})
   
const Signin=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const updateUserProfile=(userinfo)=>{
    return updateProfile(auth.currentUser,userinfo)
}
const GoogleSignin=(auth,Googleprovider)=>{
    return signInWithPopup(auth,Googleprovider)
}
const logout=()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
    })
    return()=>{
        unsubscribe()
    }
})




    const authinfo={ GoogleSignin,Signin,login,user,updateUserProfile,logout}

    return(
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )

    


}
export default AuthProvider