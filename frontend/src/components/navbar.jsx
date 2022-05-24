import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <>
            <div id='navbar' className='font-Maven text-[#444343]'>
                <Link to='about'>ABOUT</Link>
                <Link to='academics'>ACADEMICS</Link>
                <Link to='people'>PEOPLE</Link>
                <Link to='research'>RESEARCH</Link>
                <Link to='contactus'>CONTACT US</Link>
            </div>
        </>
    )
}