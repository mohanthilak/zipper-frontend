"use client"
import { useEffect, useState } from "react";
import "./Login.css";
import useAuth from "@/Hooks/useAuth";
import axios from "@/Axios/axios";
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();
  const {auth, setAuth} = useAuth()

  useEffect(()=>{
    if(auth?.accessToken) push("/menupage")
  }, [])

  const handleLoginSuccess = (data) => {
    console.log({env: process.env.NODE_ENV})
    console.log(data)
    setAuth({uid: data.uid, accessToken: data.accessToken, name: data.name, profilePicture: data.profilePicture, verificationStatus: data.verificationStatus})
    if(data.verificationStatus.includes('name-entry')) push("/auth/user-details")
    else if(data.verificationStatus.includes('phone-verification')) push('/auth/phone-verification')
    else push('/menupage');
  }

  useEffect(()=>{
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_Google_Auth_ClientID,
      callback: (res)=>{
        console.log("Encoded JWT ID:", res.credential)
        // console.log("decoded JWT ID:", decode(res.credential))

        axios.post("/user/signup", {
          token: res.credential
        },
        {
          withCredentials: true,
          headers:{
            loginType: "google"
          }
        }).then(res=>{
          if(res.data.success){
            handleLoginSuccess(res.data.data);
          }
        })
      }
    })

    google.accounts.id.renderButton(
      document.getElementById("googleBTN"),
      {theme: 'outline', size:"large"}
    )
  }, [])


  const handleLogin = async () => {
    if(username.length == 0 || password.length == 0){
      alert("Email/Password Empty!");
      return;
    }
    axios.post("/user/signup", {
      email:username,password
    },
    {
      withCredentials: true
    }
    ).then(res=>{
      console.log(res.data)
      if(res.data.success){
        handleLoginSuccess(res.data.data);
      }
    })
    setPassword("")
    setUsername("")
  }

  return (
    <div>
      <h3 className="font-bold pb-12  text-xl">Sign in to zipper</h3>
      
      <div className="w-full flex justify-center">
        <div className="w-56" id="googleBTN"></div>
      </div>

      <div className="email_signin  py-6 flex justify-center items-center gap-2">
        <div className="w-24 md:w-32 border border-gray-400"></div>
          <span className=" text-sm text-gray-600">or signin with email</span>
        <div className="w-24 md:w-32 h-0 border border-gray-400"></div>
      </div>

      <div >
        <div className="input-box">
          <label className="text-md font-semibold" htmlFor="">Email / Phone Number</label><br />
          <input className="input-styling rounded-md w-[100%]" value={username} onChange={(e)=>setUsername(e.target.value)} type="text" /> 
        </div>
        <div className="input-box">
          <div className="flex justify-between items-center">
            <label className="text-md font-semibold" htmlFor="">Password</label>
            <span className=" text-xs underline font-md p-0" htmlFor="" >Forgot Password?</span>
          </div>
          <input className=" input-styling rounded-md" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
        </div>
        <button onClick={handleLogin} className="submit-btn mb-3 w-full">
          SIGN IN
        </button>
      </div>

      <div className="signup_to text-md hover:underline cursor-pointer"> Don’t have an account? Sign up</div>
    
    </div>
  );
};

export default Login;
