import React, {useState} from "react";

export const ContextOnlyFavorites = React.createContext();

export const ProviderOnlyFavorites = ({children})=>{

    const [onlyFavorites, setOnlyFavorites]=useState(false);

    return(
        <ContextOnlyFavorites.Provider value={{onlyFavorites, setOnlyFavorites}} >
            {children}
        </ContextOnlyFavorites.Provider>
    )
}