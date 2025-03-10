import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseCart = () => {
   
 const {user} = useContext(AuthContext)


 const { data : cart = [ ] , refetch} = useQuery({
      
    queryKey: [  'cart ' , user?.email  ] ,
     
    queryFn : async ()=> {
   
        const result = await axios.get(`http://localhost:5000/myCarts?email=${user.email}`)
  

        return result.data;

    }

})

  
return [ cart , refetch];






};

export default UseCart;