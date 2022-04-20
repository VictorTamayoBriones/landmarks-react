import { useParams } from "react-router-dom"
import data from '../../assets/data/landmarkData.json';
import { useLoadImage } from "../../hooks/useLoadIMage";
import { DetailLandmark } from "./style";
import star from '../../assets/images/star.svg';

export const Landmark = () =>{

    const { id } = useParams();
    const loadImage = useLoadImage();

    return(
        data.filter((landmark) => landmark.id == id).map((result)=>{
            return(
                <DetailLandmark key={ result.id } favorite={result.isFavorite} >
                    <div className="hero">
                        <img src={ loadImage(result.imageName) } alt="" />
                        <div className="text">
                            <h2>{ result.name }</h2>
                            <p>{ result.park }</p>
                            <p>{ result.city } - { result.state }</p>
                        </div>
                        <img src={star} className="favorite"/>
                    </div>
                    <div className="about">
                        <h3>About { result.name }</h3>
                        <p>{ result.description }</p>
                    </div>
                </DetailLandmark>
            )
        })
    )
}