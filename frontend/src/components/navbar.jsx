import {Link} from "react-router-dom";
import '../styles/navbar.css';
import logoImg from '../assets/logo.png';

export default function NavBar({logo}){
    return(
        <>  
            <div id='navbarContainer' className={"flex items-center "+logo?(""):("my-20")}>
                {
                    (logo)?(
                        <div className="rounded-br-[90px] bg-[#F1F1F1] items-center ">
                            <img src = {logoImg} className="h-[10em] mx-[2vw] my-[1vw]"/>
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
                <div id='navbar' className='font-Archivo text-[#444343] my-20'>
                    <Link to='/'>ABOUT</Link>
                    <div>|</div>
                    <Link to='/academics'>ACADEMICS</Link>
                    <div>|</div>
                    <Link to='/commingsoons'>PEOPLE</Link>
                    <div>|</div>
                    <Link to='/research'>RESEARCH</Link>
                    <div>|</div>
                    <Link to='/contactus'>CONTACT US</Link>
                </div>
            </div>
        </>
    )
}
