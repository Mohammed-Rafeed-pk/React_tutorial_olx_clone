import { createContext, useContext, useState } from "react";

export const PostContext = createContext(null)

function Post ({children}){
const [postdetails , setPostdetails] =useState()
   return(
    <PostContext.Provider  value={{postdetails,setPostdetails}}>
        {children}
    </PostContext.Provider>
   )
}

export default Post