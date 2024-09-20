import { useContext,createContext,useState } from "react";
import film from "./FilmArray";
import books from "./BooksArray";

const Context = createContext();

export const ContextProvider = ({children}) =>{

    const [filmList]=useState(film);
    const[booksList]=useState(books);


    const value={filmList,booksList}

    return(
        <Context.Provider value={value}>  
            {children}
        </Context.Provider>
    )
}

export const myContextApp =()=>{
    return useContext(Context)
}

