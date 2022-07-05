import NavBar from '../components/navbar';
import Footer from '../components/footer';
import pup from '../assets/pup.png';
import coding from '../assets/coding.png';

function ComingSoon(){
    return(
        <>
            <NavBar logo={true}  rel={false}/>
            <div className="flex flex-col relative h-screen w-screen  bg-[#39AEA8]">
                <div className="flex justify-start">
                    <p className="font-Archivo font-bold text-[#F1F1F1] text-[12vw] sm:text-[8vw] m-20 w-[50vw] sm:w-[10vw] absolute top-[20%] "> Coming Soon</p>
                    <img src={pup} className="absolute z-0 bottom-0 w-[150vw] sm:w-[65vw] mx-[25% ]"/>
                </div>
                <div className='absolute right-0  bottom-0 mr-10'>
                    <img src={coding} />
                </div>
            </div>
        </>
    );
}
export default ComingSoon;