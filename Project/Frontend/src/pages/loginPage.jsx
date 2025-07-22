/*
import { useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export default function LoginPage(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    function loginHandler(){
     
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email:email,
            password:password
        }
    ).then(
        (respons)=>{
            console.log("Login successfull",respons.data)
            localStorage.setItem("token",respons.data.token)
            
            const user = respons.data.user
            if (user.role.toLowerCase() === "admin" || user.role.toLowerCase() === "manager") {
                navigate("/admin");
            }else{
               console.log("Customer",respons.data.user.fristName)
            }
            toast.success("Login successfull")
           

        }
    ).catch(
        (error) => {
            console.log("Login failed", error.response.data); // ✅ FIXED
            toast.error(error.response.data.message||"Login failed");
        }
    )
    }

    return(
        <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex">

            <div className="w-[50%] h-full">
            </div>

            <div className="flex w-[50%] h-full items-center justify-center">
                <div className=" w-[450px] h-[600px] backdrop-blur-md shadow-xl rounded-[10px] flex flex-col justify-center items-center">
                    <h1 className="text-black text-2xl top-[50px]">Login</h1>
                    <input onChange={(event)=>{
                        setEmail(event.target.value)}} 
                        className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="E-mail"></input>
                    
                    <input onChange={(event)=>{
                        setPassword(event.target.value)}} 
                        className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]" type="password" placeholder="Password"></input>
                    
                    <button onClick={loginHandler} className="w-[400px] h-[45px] bg-green-600 rounded-xl text-white cursor-pointer">Login</button>

                </div>

            </div>
        </div>
    )
}
*/


import { useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export default function LoginPage(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    function loginHandler(){
     
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email:email,
            password:password
        }
    ).then(
        (respons)=>{
            console.log("Login successfull",respons.data)
            localStorage.setItem("token",respons.data.token)
            
            const user = respons.data.user
            if (user.role.toLowerCase() === "admin" || user.role.toLowerCase() === "manager") {
                navigate("/admin");
            }else{
               console.log("Customer",respons.data.user.fristName)
            }
            toast.success("Login successfull")
           

        }
    ).catch(
        (error) => {
            console.log("Login failed", error.response.data); // ✅ FIXED
            toast.error(error.response.data.message || "Login failed");
        }
    )
    }

    return(
        <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex">

            <div className="w-[50%] h-full">
            </div>

            <div className="flex w-[50%] h-full items-center justify-center">
                <div className=" w-[450px] h-[600px] backdrop-blur-md shadow-xl rounded-[10px] flex flex-col justify-center items-center">
                    <h1 className="text-black text-2xl top-[50px]">Login</h1>
                    <input onChange={(event)=>{
                        setEmail(event.target.value)}} 
                        className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="E-mail"></input>
                    
                    <input onChange={(event)=>{
                        setPassword(event.target.value)}} 
                        className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]" type="password" placeholder="Password"></input>
                    
                    <button onClick={loginHandler} className="w-[400px] h-[45px] bg-green-600 rounded-xl text-white cursor-pointer">Login</button>

                </div>

            </div>
        </div>
    )
}

