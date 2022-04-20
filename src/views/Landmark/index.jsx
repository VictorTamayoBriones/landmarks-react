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
                    </div>
                </DetailLandmark>
            )
        })
    )
}