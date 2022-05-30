import NavBar2 from '../components/navbar2';
import Footer from '../components/footer';
import pup from '../assets/pup.png';
import coding from '../assets/coding.png';
import {ScrollContainer, ScrollPage} from "react-scroll-motion";

function Commingsoon(){
    return(
        <>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <div className="flex flex-col relative h-screen w-screen  bg-[#39AEA8]">
                        <div>
                            <NavBar2/>
                            <div className="flex justify-start">
                                <p className="font-Archivo font-bold text-[#F1F1F1] text-[8vw] m-20 w-[10vw] "> Coming Soon</p>
                                <img src={pup} className="absolute z-0 bottom-0 w-[65vw] mx-[25%]"/>
                            </div>
                        </div>
                        <div className='absolute right-0  bottom-0 m-[2vw]'>
                            <img src={coding} />
                        </div>
                    </div>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Footer/>
                </ScrollPage>
            </ScrollContainer>
        </>
    );
}
export default Commingsoon;