const { default: useAxiosPrivate } = require("@/Hooks/useAxiosPrivate");

export const GetMenuPageBooks = (userLocation) =>{
    const axiosPrivate = useAxiosPrivate();
    axiosPrivate.get(`https://zipper-library.onrender.com/book/menupage/${userLocation.longitude}/${userLocation.latitude}`).then(res=>{
        if(res.data.success){
          return {nearYouBooks: res.data.data};
        }else return null;
      }).catch(e=>{
        console.log("Could Not Fetch Books for MenuPage")
        return null;
      })
}

export const CalculateDistance = (lat1, lon1, lat2, lon2) => {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344;
      return dist.toFixed(2);
    }
  }

  export const GetMenuPageLibraries = async (userLocation) =>{
    try {
        const axiosPrivate = useAxiosPrivate();
        const res = await axiosPrivate.get(`https://zipper-library.onrender.com/library/find/${userLocation.latitude}/${userLocation.longitude}`)
        return {librariesNearYou: res.data.data}
    } catch (error) {
        console.log("error while fetching libraries near you")
        return null;
    }
}