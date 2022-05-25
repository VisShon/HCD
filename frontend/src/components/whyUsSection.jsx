import { Animator, batch, MoveIn, MoveOut} from "react-scroll-motion";

const MoveUS = batch(MoveIn(1500,0),MoveOut(-1500,0));

export default function WhyUsSection(){
    return(
        <div id='whyUsSection'> 
            <Animator animation={MoveUS}>
            <div className='font-Maven font-semibold text-[#39AEA8] text-[10vw]'>WHY CHOOSE HCD?</div>
            </Animator>
        </div>
    );
}