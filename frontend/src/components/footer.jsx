import '../styles/footer.css';
import img from '../assets/bcg.png';
import tweet from '../assets/tweet.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png'
export default function footer(){
    return(
        <>
            <div id="footer">
                <div className='flex justify-evenly'>

                    <div className="flex flex-col">
                        <div className="font-Maven text-[#277773] text-[1.1vw]">USEFUL LINKS</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>CARRERS @HCD</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>HCD AlUMNI</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>FACULTY</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>STUDENTS</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>RESEARCH PAPERS</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-Maven text-[#277773] text-[1.1vw]">INITIATIVES</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>WORKSHOPS</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>PLACEMENT</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-Maven text-[#277773] text-[1.1vw]">CONTACT US</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>admin-hcd@iiitd.ac.in</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>+91-11-26907588</div>
                        <div className='flex justify-between my-4 mx-2'>
                            <img src={facebook}/>
                            <img src={tweet}/>
                            <img src={insta}/>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-Maven text-[#277773] text-[1.1vw]">COLLABORATIONS</div>
                    </div>
                </div>
                <div className="flex justify-between mx-[13vw]">
                    <div className='flex flex-col'>

                        <div className='font-Maven text-[#808080] text-[0.9vw] font-bold'>ALL RIGHTS RESERVED</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>2022 IIITD</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw]'>LAST UPDATED 26/05/2022</div>
                    </div>
                    <div className='flex'>
                        <div className='font-Maven text-[#808080] text-[0.9vw] mr-5'>Terms and Conditions</div>
                        <div className='font-Maven text-[#808080] text-[0.9vw] ml-5'>Privacy Policy</div>
                    </div>
                </div>
            </div>
            <img src={img} className='h-screen w-screen object-cover'/>
        </>
    );
}