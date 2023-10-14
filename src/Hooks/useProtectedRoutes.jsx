"use client";
import useRefreshToken from "./useRefresh";
import useAuth from "./useAuth";

const useProtectedRoutes =  () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    const protectRoute = async () =>{
        const verifyRefreshToken = async () => {
            try {
                const dataFromRefresh = await refresh();
                return dataFromRefresh;
            } catch (e) {
                console.error("error with refresh", e);
                return false;
            } 
        };
        if (!auth?.accessToken){
            const result = await verifyRefreshToken()
            return result == true ? true : false;
        }else{
            return true;
        }

    }
    
    return protectRoute;
};

// const checkAuth = () => {
//     const { auth } = useAuth();

//     return auth.accessToken ? true : false;
// }

export default useProtectedRoutes;