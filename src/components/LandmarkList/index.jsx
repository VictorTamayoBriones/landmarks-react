import { CardPreview } from "../LandmarkCard"
import { Cards, List } from "./style"
import data from '../../assets/data/landmarkData.json';
import { useLoadImage } from "../../hooks/useLoadIMage";

export const LandmarkList = ({title="All Landmarks"}) =>{
    
    const loadImage  = useLoadImage();

    return(
        <List>
            <h2>{ title }</h2>
            <Cards>
                {
                    data.map( landmark =>{
                        return(
                            <CardPreview key={ landmark.id } >
                                <img src={ loadImage(landmark.imageName) } alt={ landmark.name } />
                            </CardPreview>
                        )
                    })
                }
            </Cards>
        </List>
    )
}