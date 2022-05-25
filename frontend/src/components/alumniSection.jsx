import alumn from '../assets/alumini.png';
import { Animator, batch, MoveOut} from "react-scroll-motion";

const MoveAlumn = batch(MoveOut(-1500,0));


export default function AlumniSection(){
    return(
        <div id='AlumniSection'> 
            <Animator animation={MoveAlumn}>
                <img src={alumn}  className='h-screen w-screen object-cover z-0' />
            </Animator>
            <div id='AlumniHeading' className='absolute z-10 font-Archivo text-[#ffffff] text-[10vw]'>ALUMNI</div>
        </div>
    );
}