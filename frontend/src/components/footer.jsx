import '../styles/footer.css';
import '../styles/button.css';
import img from '../assets/bcg.png';
import tweet from '../assets/tweet.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png'
import { Link } from 'react-router-dom';
export default function footer(){
    return(
        <>
            <div id="footer">
                <div className="footerContainer">
                    <div className='flex justify-evenly  z-10 small:flex-col small:mx-5' >

                        <div className="flex flex-col font-Maven text-[#808080] text-[0.9em] small:my-2.5">
                            <span className="text-[#277773] text-[1.1em]">USEFUL LINKS</span>
                            <Link to="/Comingsoon">CAREERS @HCD</Link>
                            <Link to="/students">HCD AlUMNI</Link>
                            <Link to="/faculty">FACULTY</Link>
                            <Link to="/students">STUDENTS</Link>
                            <Link to="/researchPublication">RESEARCH PUBLICATIONS</Link>
                        </div>

                        <div className="flex flex-col font-Maven text-[#808080] text-[0.9em] small:my-2.5">
                            <a className="text-[#277773] text-[1.1em]">INITIATIVES</a>
                            <Link to="/Comingsoon">WORKSHOPS</Link>
                            <Link to="/Comingsoon">PLACEMENT</Link>
                        </div>

                        <div className="flex flex-col font-Maven text-[#808080] text-[0.9em] small:my-2.5 small:items-center">
                            <span className="text-[#277773] text-[1.1em]">CONTACT US</span>
                            <a href="mailto:admin-hcd@iiitd.ac.in"> admin-hcd@iiitd.ac.in</a>
                            <a href="tel:+91-11-26907588">+91-11-26907588</a>
                            <span className='flex justify-between my-4 mx-2 small:w-[30%]'>
                                <a href="https://www.facebook.com/hcdiiitd">
                                    <img className='hover:scale-125' src={facebook}/>
                                </a>
                                <a href="https://www.instagram.com/hcdiiitd/" >
                                    <img className='hover:scale-125' src={insta}/> 
                                </a>
                                <a href="https://twitter.com/hcdiiitd">
                                    <img className='hover:scale-125' src={tweet}/> 
                                </a>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <div className="font-Maven text-[#277773] text-[1.1em]">COLLABORATIONS</div>
                        </div>
                    </div>
                    <div className="flex justify-between mx-[13vw] small:flex-col small:mx-0 small:items-center">
                        <div className='flex flex-col font-Maven text-[#808080] text-[0.9em]'>

                            <span className='font-bold'>ALL RIGHTS RESERVED</span>
                            <span>Copyright © 2022 IIITD</span>
                            <span>LAST UPDATED 28/02/2023</span>
                        </div>
                        <div className='flex font-Maven text-[#808080] text-[0.9em] mr-5'>
                            <a>Terms and Conditions</a>
                            <a className='ml-5 '>Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <img src={img} id="bcg" className='h-screen w-screen object-cover absolute z-[-10] '/>
            </div>
        </>
    );
}