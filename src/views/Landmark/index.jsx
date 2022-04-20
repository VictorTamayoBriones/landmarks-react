import { useParams } from "react-router-dom"
import data from '../../assets/data/landmarkData.json';
import { useLoadImage } from "../../hooks/useLoadIMage";
import { DetailLandmark } from "./style";

export const Landmark = () =>{

    const { id } = useParams();
    const loadImage = useLoadImage();

    return(
        data.filter((landmark) => landmark.id == id).map((result)=>{
            return(
                <DetailLandmark key={ result.id } >
                    <div className="hero">
                        <img src={ loadImage(result.imageName) } alt="" />
                        <div className="text">
                            <h2>{ result.name }</h2>
                            <p>{ result.park }</p>
                            <p>{ result.city }</p>
                            <p>{ result.state }</p>
                        </div>
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