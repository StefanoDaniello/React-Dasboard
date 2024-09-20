import { useContext,createContext,useState } from "react";
import film from "./Array/FilmArray";
import books from "./Array/BooksArray";
import commedie from "./Array/CommedyArray";

const Context = createContext();

export const ContextProvider = ({children}) =>{

    const [filmList]=useState(film);
    const[booksList]=useState(books);
    const[commedyList]=useState(commedie);

    const [commedy,setCommedy]=useState([])


    const value={filmList,booksList,commedyList,commedy,setCommedy}

    return(
        <Context.Provider value={value}>  
            {children}
        </Context.Provider>
    )
}

export const myContextApp =()=>{
    return useContext(Context)
}

