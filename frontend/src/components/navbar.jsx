import {Link} from "react-router-dom";
import '../styles/navbar.css';

export default function NavBar(){
    return(
        <>
            <div id='navbar' className='font-Maven text-[#040404] my-10'>
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
        </>
    )
}
