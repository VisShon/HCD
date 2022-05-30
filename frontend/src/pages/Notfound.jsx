import NavBar2 from '../components/navbar2';
import Footer from '../components/footer';
import sad from '../assets/sad.svg';
import coding from '../assets/coding.png';
import {Link} from "react-router-dom";
import {ScrollContainer, ScrollPage} from "react-scroll-motion";

function NotFound(){
    return(
        <>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <div className="flex content-center relative h-screen w-screen  bg-[#f1f1f1]">
                        <div>
                            <NavBar2/>
                            <div className="flex flex-col mx-[10vw] my-[10vw]">
                                <p className="font-Archivo font-bold text-[#39AEA8] text-[7vw]"> Error 404</p>
                                <p className="font-Maven font-[200] text-[#424949] text-[3vw] "> We can’t find that page {":'("}</p>
                                <p className="font-Maven font-light text-[#8B8B8B] text-[1vw] w-[30vw]  "> The page you’re looking for no longer exists. Return to the home page and remember: you haven’t seen anything.</p>
                                <Link  to='../'>
                                    <button id='btn' className="font-Archivo font-bold text-[#ffffff] ">
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                            <div className='absolute right-0 top-0 my-[20%] mx-[5vw] '>
                                <img src={sad} className="w-[40vw]" />
                            </div>
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
export default NotFound;
