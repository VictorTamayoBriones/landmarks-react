import React, { useState } from "react";

export const ContextCategories = React.createContext();

export const ProviderCategories = ({children})=>{

    const[category, setCategory]=useState('')
    
    return(
        <ContextCategories.Provider value={{category, setCategory}} >
            {children}
        </ContextCategories.Provider>
    )
}