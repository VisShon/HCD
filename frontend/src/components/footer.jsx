import '../styles/footer.css';
import '../styles/button.css';
import img from '../assets/bcg.png';
import tweet from '../assets/tweet.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png'
export default function footer(){
    return(
        <>
            <div id="footer">
                <div className='flex justify-evenly  z-10'>

                    <div className="flex flex-col font-Maven text-[#808080] text-[0.9em]">
                        <span className="text-[#277773] text-[1.1em]">USEFUL LINKS</span>
                        <span>CARRERS @HCD</span>
                        <span>HCD AlUMNI</span>
                        <span>FACULTY</span>
                        <span>STUDENTS</span>
                        <span>RESEARCH PAPERS</span>
                    </div>

                    <div className="flex flex-col font-Maven text-[#808080] text-[0.9em]">
                        <span className="text-[#277773] text-[1.1em]">INITIATIVES</span>
                        <span>WORKSHOPS</span>
                        <span>PLACEMENT</span>
                    </div>

                    <div className="flex flex-col font-Maven text-[#808080] text-[0.9em]'">
                        <span className="text-[#277773] text-[1.1em]">CONTACT US</span>
                        <span> admin-hcd@iiitd.ac.in</span>
                        <span>+91-11-26907588</span>
                        <span className='flex justify-between my-4 mx-2'>
                            <img src={facebook}/>
                            <img src={tweet}/>
                            <img src={insta}/>
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-Maven text-[#277773] text-[1.1em]">COLLABORATIONS</div>
                    </div>
                </div>
                <div className="flex justify-between mx-[13vw]">
                    <div className='flex flex-col font-Maven text-[#808080] text-[0.9em]'>

                        <span className='font-bold'>ALL RIGHTS RESERVED</span>
                        <span>2022 IIITD</span>
                        <span>LAST UPDATED 26/05/2022</span>
                    </div>
                    <div className='flex font-Maven text-[#808080] text-[0.9em] mr-5'>
                        <span>Terms and Conditions</span>
                        <span className='ml-5'>Privacy Policy</span>
                    </div>
                </div>
            </div>
                <img src={img} className='h-screen w-screen object-cover'/>
        </>
    );
}