import {Link} from "react-router-dom";
import '../styles/navbar.css';
import logo from '../assets/logo.png';

export default function NavBar2(){
    return(
        <>  
            <div id='navbar2' className="flex items-center">
                <div className="rounded-br-[90px] bg-[#F1F1F1] items-center ">
                    <img src = {logo} className="h-[10em] mx-[2vw] my-[1vw]"/>
                </div>
                <div id='navbar' className='font-Archivo text-[#444343] '>
                    <Link to='about'>ABOUT</Link>
                    <div to='/'>|</div>
                    <Link to='academics'>ACADEMICS</Link>
                    <div to='/'>|</div>
                    <Link to='people'>PEOPLE</Link>
                    <div to='/'>|</div>
                    <Link to='research'>RESEARCH</Link>
                    <div to='/'>|</div>
                    <Link to='contactus'>CONTACT US</Link>
                </div>
            </div>
        </>
    )
}
