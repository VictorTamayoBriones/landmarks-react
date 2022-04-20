import { Switch } from "./style"
import { useContext } from 'react'
import { ContextOnlyFavorites } from "../../context/onlyFavorites"

export const SwicthToFavorites = () =>{

    const {onlyFavorites, setOnlyFavorites}=useContext(ContextOnlyFavorites);

    const handleChange = () => setOnlyFavorites(!onlyFavorites)
    
    return(
        <Switch>
            <p>Only Favorites</p>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} />
                <span className="slider round"/>
            </label>
        </Switch>
    )
}