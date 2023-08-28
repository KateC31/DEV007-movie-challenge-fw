import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";


export const DataContex = createContext();

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("superman");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (
        <DataContex.Provider value={{ setQuery, isLoading, error, data }}>
            { children }
        </DataContex.Provider>
    )
}