"use client"
import axios from "@/Axios/axios";
import useAuth from "./useAuth";
import useUserLocation from "./useUserLocation";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  const {setUserLocation} = useUserLocation();

  const refresh = async () => {
    let userPath = ""
    userPath = process.env.NEXT_PUBLIC_User_Prod_URL
    
    let returnResult;
     await axios.post(
      userPath+"/user/refresh",
      {},
      {
        withCredentials: true,
      }
    ).then(res=>{
      if (res.data.success) {
  
        const { uid, accesstoken, name, profilePicture, currentLocation, verificationStatus } = res.data.data;
        const payload = { uid, accessToken: accesstoken, name, verificationStatus, profilePicture};
        setUserLocation(currentLocation)
        setAuth(payload);
        returnResult = true;
      } else {
        setAuth({});
        returnResult = false
      }
    }).catch(e=>{
      console.log(e);
      returnResult = false;
    });
    return returnResult;
  };
  return refresh;
};

export default useRefreshToken;