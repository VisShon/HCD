import NavBar from '../components/navbar';
import Footer from '../components/footer';
import sad from '../assets/sad.svg';
import coding from '../assets/coding.png';
import {Link} from "react-router-dom";

function NotFound(){
    return(
        <>
            <NavBar logo={true} rel={false} />
            <div className="flex content-center relative h-screen w-screen  bg-[#f1f1f1]">
                    <div className="flex flex-col mx-[10vw] my-[15vw]">
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
        </>
    );
}
export default NotFound;
