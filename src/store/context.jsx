import { useContext,createContext,useState } from "react";

const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [count , setCount]= useState(0)
    const value={count,setCount}

    return(
        <Context.Provider value={value}>  
            {children}
        </Context.Provider>
    )
}

export const myContextApp =()=>{
    return useContext(Context)
}

