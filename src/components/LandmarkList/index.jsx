import { CardPreview } from "../LandmarkCard"
import { Cards, List } from "./style"
import data from '../../assets/data/landmarkData.json';
import starIcon from '../../assets/images/star.svg';
import { useLoadImage } from "../../hooks/useLoadIMage";
import { useNavigate } from "react-router-dom";

export const LandmarkList = ({title="All Landmarks", category}) =>{
    
    const loadImage  = useLoadImage();
    const navigate = useNavigate()
    const handleClick = (id) => navigate(`/landmark${id}`)
    
    return(
        <List>
            <h2>{ title }</h2>
            <Cards>
                {
                    title === 'Favorites' ?
                        category === '' ?
                            data.filter( landmark => landmark.isFavorite === true ).map((favorite)=>{
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
                            data.filter( landmark => landmark.isFavorite === true && landmark.category === category ).map((favorite)=>{
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
                    category === '' ?
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
                    :
                        data.filter( landmark => landmark.category === category ).map(landmarkFilter => {
                            return(
                                <CardPreview key={ landmarkFilter.id } onClick={ ()=>handleClick(landmarkFilter.id) } >
                                    <img src={ loadImage(landmarkFilter.imageName) } alt={`Picture of ${landmarkFilter.name} from Apple`}/>
                                    <div className="text">
                                        <h3>{ landmarkFilter.name }</h3>
                                        <p>{ landmarkFilter.state }</p>
                                    </div>
                                </CardPreview>
                            )
                        })    
                }
            </Cards>
        </List>
    )
}