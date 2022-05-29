import alumn from '../assets/alumini.png';
import { Animator, batch, MoveOut} from "react-scroll-motion";
const MoveAlumn = batch(MoveOut(-1500,0));


export default function PeopleSection(){
    return(
        <div class='Section Section-Alumni'>
            {/* <Animator animation={MoveAlumn}> */}
                <img src={alumn}  className='self-start object-cover w-screen z-10 hover:rounded-br-[10em] hover:w-[65%] duration-1000 aspect-video ' />
            {/* </Animator> */}
            <div id='SectionHeading' className='absolute right-0 z-10 font-Archivo text-[#ffffff] text-[8vw]'>ALUMNI</div>
            <div className='flex content-center absolute z-0 font-Archivo text-[#ffffff] text-[8vw] bottom-0 my-10'>
                <span className='mx-10'>2000+</span>
                <span className='font-Maven text-[2rem] max-w-[40%] mx-10 my-10'>
                    At HCD@IIITD, we embrace, nurture and honour
                    the uniqueness of all people in the community,
                    crafting an inclusive culture that puts people
                    first.
                    </span>     
            </div>
        </div>
    );
}