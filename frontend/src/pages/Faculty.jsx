import '../styles/facultyCard.css';
import NavBar2 from '../components/navbar2';
import Footer from '../components/footer';
import pup from '../assets/pup.png';
import coding from '../assets/coding.png';
import {ScrollContainer, ScrollPage} from "react-scroll-motion";

function Faculty(){
    return(
        <>
            <div className=" h-screen w-screen  bg-[#39AEA8]">
                <NavBar2/>
                <div className="flex absolute z-[10]">
                    <div className=" justify-self-start">
                        <p className="font-Archivo font-bold text-[#F1F1F1] text-[5vw] m-20 w-[10vw] ">Faculty</p>
                    </div>
                </div>
                <div className='absolute right-0 top-0 bg-[#f1f1f1] w-[65%] h-screen'>
                    <div className='flex justify-self-start'>
                            <div className="flex flex-col ml-[10vw]">
                                <div id="facultyCard"></div>
                                <div id="facultyCard"></div>
                                <div id="facultyCard"></div>
                            </div>
                            <div className="flex flex-col m-[10vw]">
                                <div id="facultyCard"></div>
                                <div id="facultyCard"></div>
                                <div id="facultyCard"></div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}
export default Faculty;