import { LandmarkList } from "../../components/LandmarkList";
import { SwicthToFavorites } from "../../components/SwicthToFavorites";
import { useContext } from "react";
import { ContextOnlyFavorites } from "../../context/onlyFavorites";
import { ContextCategories } from "../../context/categories"
import { Categories } from "../../components/Categories";
import { Actions } from "./style";

export const Home = () =>{

    const { onlyFavorites } = useContext(ContextOnlyFavorites);
    const { category } = useContext(ContextCategories)
    
    return(
        <>
            <Actions>
                <Categories/>
                <SwicthToFavorites/>
            </Actions>
            {
                onlyFavorites ? <LandmarkList title="Favorites" category={ category } /> 
                :
                <>
                    <LandmarkList title="Favorites" category={ category } />
                    <LandmarkList category={ category } />
                </>
            }
        </>
    )
}