import logo from '../assets/logo.png';
import "../styles/topCard.css";

export default function TopCard(){
    return(
        <>
            <div id='topCard' className='card z-10 absolute'>
                <img id='logoImg' src={logo}/>
            </div> 
        </>
    );

}