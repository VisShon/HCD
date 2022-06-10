import alumn from '../assets/alumini.png';
import "../styles/peopleSection.css";
import { Animator, batch, MoveOut} from "react-scroll-motion";

const MoveAlumn = batch(MoveOut(-1500,0));


export default function PeopleSection({content}){

    return(
        <div className={"peopleSection "+content.CSSclassName}>
            <img src={alumn}  className='self-start object-cover w-[70%] z-10 aspect-video rounded-br-[4em]' />
            <div className='SectionHeading absolute right-[-1em] z-10 font-Archivo text-[#ffffff] text-[8vw]'>
                {content.heading}
            </div>
            <div className='flex content-center absolute z-0 font-Archivo text-[#ffffff] text-[8vw] bottom-0 my-10'>
                <span className='mx-10'>
                    {content.stat}
                </span>
                <span className='font-Maven text-[1.5rem] max-w-[40%] mx-10 my-10'>
                    {content.description}
                </span>
            </div>
        </div>
    );
}