"use client"
import axios from "@/Axios/axios";
import useAuth from "./useAuth";
import useUserLocation from "./useUserLocation";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  const {setUserLocation} = useUserLocation();

  const refresh = async () => {
    let returnResult;
     await axios.post(
      "/user/refresh",
      {},
      {
        withCredentials: true,
      }
    ).then(res=>{
      if (res.data.success) {
  
        const { uid, accesstoken, name, profilePicture, currentLocation } = res.data.data;
        const payload = { uid, accessToken: accesstoken, name, profilePicture};
        console.log(currentLocation)
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