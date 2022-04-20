import { HeaderApp } from "./style"
import Arrow from '../../assets/images/arrow-left.svg';
import UserThumdail from '../../assets/images/user.svg'; 

export const Header = () =>{

    return(
        <HeaderApp>
            <img src={Arrow} className="arrow"/>
            <div className="text">
                <p>What places are you</p>
                <h3>Looking for?</h3>
            </div>
            <div className="user-profile">
                <img src={UserThumdail} alt="" />
            </div>
        </HeaderApp>
    )
}