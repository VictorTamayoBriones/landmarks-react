import charleyrivers from '../assets/images/charleyrivers@2x.jpg';
import chilkoottrail from '../assets/images/chilkoottrail@2x.jpg';
import chincoteague from '../assets/images/chincoteague@2x.jpg';
import hiddenlake from '../assets/images/hiddenlake@2x.jpg';
import icybay from '../assets/images/icybay@2x.jpg';
import lakemcdonald from '../assets/images/lakemcdonald@2x.jpg';
import rainbowlake from '../assets/images/rainbowlake@2x.jpg';
import silversalmoncreek from '../assets/images/silversalmoncreek@2x.jpg';
import stmarylake from '../assets/images/stmarylake@2x.jpg';
import turtlerock from '../assets/images/turtlerock@2x.jpg';
import twinlake from '../assets/images/twinlake@2x.jpg';
import umbagog from '../assets/images/umbagog@2x.jpg';

export const useLoadImage = ()=>{
    
    const loadImage = (imgName) =>{
        switch (imgName) {
            case "charleyrivers":
                return charleyrivers

            case "chilkoottrail":
                return chilkoottrail
    
            case "chincoteague":
                return chincoteague
    
            case "hiddenlake":
                return hiddenlake
    
            case "icybay":
                return icybay
    
            case "lakemcdonald":
                return lakemcdonald
    
            case "rainbowlake":
                return rainbowlake
    
            case "silversalmoncreek":
                return silversalmoncreek
    
            case "stmarylake":
                return stmarylake
    
            case "turtlerock":
                return turtlerock
    
            case "twinlake":
                return twinlake
    
            case "umbagog":
                return umbagog
            default:
                return null
        }
    }

    return loadImage
}