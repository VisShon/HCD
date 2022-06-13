import '../styles/landing.css';
import Gallery from "../assets/Gallery.png";
export default function whatHappensSection(data){
    return(
        <div className='whatHappensSection'>
            <div className='flex'>
                <div className='font-Maven font-semibold text-[#8AD3D0] text-[7rem] mr-10 text-center'>What happens in </div>
                <div className='font-Maven font-semibold text-[#39AEA8] text-[7rem] text-center'>HCD?</div>
            </div>
            <img src={Gallery} className='h-[20vw]'/>
        </div>
    );
}