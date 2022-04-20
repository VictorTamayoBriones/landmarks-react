import { HeaderApp } from "./style"
import Arrow from '../../assets/images/arrow-left.svg';
import UserThumdail from '../../assets/images/user.svg'; 
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () =>{

    const { pathname } = useLocation();
    const navigate = useNavigate()

    return(
        <HeaderApp detail={ pathname.includes('1') } >
            <img src={Arrow} className="arrow" onClick={ ()=>navigate('/') } />
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