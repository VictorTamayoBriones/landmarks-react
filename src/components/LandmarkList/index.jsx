import { CardPreview } from "../LandmarkCard"
import { Cards, List } from "./style"
import data from '../../assets/data/landmarkData.json';
import starIcon from '../../assets/images/star.svg';
import { useLoadImage } from "../../hooks/useLoadIMage";
import { useNavigate } from "react-router-dom";

export const LandmarkList = ({title="All Landmarks"}) =>{
    
    const loadImage  = useLoadImage();
    const navigate = useNavigate()

    const handleClick = (id) => navigate(`/landmark${id}`)

    return(
        <List>
            <h2>{ title }</h2>
            <Cards>
                {
                    title === 'Favorites' ? 
                    data.filter( landmark => landmark.isFavorite === true).map((favorite)=>{
                        return(
                            <CardPreview key={ favorite.id } favorite={true} onClick={ ()=>handleClick(favorite.id) } >
                                <img src={ loadImage(favorite.imageName) } alt={`Picture of ${favorite.name} from Apple`}/>
                                <div className="text">
                                    <h3>{ favorite.name }</h3>
                                    <p>{ favorite.state }</p>
                                </div>
                                <img src={ starIcon } className="favorite-icon" />
                            </CardPreview>
                        )
                    })
                    :
                    data.map( landmark =>{
                        return(
                            <CardPreview key={ landmark.id } onClick={ ()=>handleClick(landmark.id) } >
                                <img src={ loadImage(landmark.imageName) } alt={`Picture of ${landmark.name} from Apple`}/>
                                <div className="text">
                                    <h3>{ landmark.name }</h3>
                                    <p>{ landmark.state }</p>
                                </div>
                            </CardPreview>
                        )
                    })
                }
            </Cards>
        </List>
    )
}