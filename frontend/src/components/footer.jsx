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
                    <div className='flex justify-evenly  z-10'>

                        <div className="flex flex-col font-Maven text-[#808080] text-[0.9em]">
                            <span className="text-[#277773] text-[1.1em]">USEFUL LINKS</span>
                            <a>CARRERS @HCD</a>
                            <Link to="/students">HCD AlUMNI</Link>
                            <Link to="/faculty">FACULTY</Link>
                            <Link to="/students">STUDENTS</Link>
                            <a>RESEARCH PAPERS</a>
                        </div>

                        <div className="flex flex-col font-Maven text-[#808080] text-[0.9em]">
                            <a className="text-[#277773] text-[1.1em]">INITIATIVES</a>
                            <a>WORKSHOPS</a>
                            <a>PLACEMENT</a>
                        </div>

                        <div className="flex flex-col font-Maven text-[#808080] text-[0.9em]'">
                            <span className="text-[#277773] text-[1.1em]">CONTACT US</span>
                            <a href="mailto:admin-hcd@iiitd.ac.in"> admin-hcd@iiitd.ac.in</a>
                            <a href="tel:+91-11-26907588">+91-11-26907588</a>
                            <span className='flex justify-between my-4 mx-2'>
                                <a href="https://www.facebook.com/IIITDelhi/">
                                    <img className='hover:scale-125' src={facebook}/>
                                </a>
                                <a href="https://www.instagram.com/iiit.delhi" >
                                    <img className='hover:scale-125' src={insta}/> 
                                </a>
                                <a href="https://twitter.com/IIITDelhi">
                                    <img className='hover:scale-125' src={tweet}/> 
                                </a>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <div className="font-Maven text-[#277773] text-[1.1em]">COLLABORATIONS</div>
                        </div>
                    </div>
                    <div className="flex justify-between mx-[13vw]">
                        <div className='flex flex-col font-Maven text-[#808080] text-[0.9em]'>

                            <span className='font-bold'>ALL RIGHTS RESERVED</span>
                            <span>Copyright © 2022 IIITD</span>
                            <span>LAST UPDATED 26/05/2022</span>
                        </div>
                        <div className='flex font-Maven text-[#808080] text-[0.9em] mr-5'>
                            <a>Terms and Conditions</a>
                            <a className='ml-5'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <img src={img} id="bcg" className='h-screen w-screen object-cover absolute z-[-10] '/>
            </div>
        </>
    );
}