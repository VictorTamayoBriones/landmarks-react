import { LandmarkList } from "../../components/LandmarkList"
import { SwicthToFavorites } from "../../components/SwicthToFavorites"
import { useContext } from "react"
import { ContextOnlyFavorites } from "../../context/onlyFavorites"

export const Home = () =>{

    const { onlyFavorites } = useContext(ContextOnlyFavorites);

    return(
        <>
            <SwicthToFavorites/>
            {
                onlyFavorites ? <LandmarkList title="Favorites" /> 
                :
                <>
                    <LandmarkList title="Favorites" />
                    <LandmarkList/>
                </>
            }
        </>
    )
}