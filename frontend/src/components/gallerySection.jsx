import React from "react";
import { Animator, batch, MoveIn, MoveOut ,Sticky} from "react-scroll-motion";
import Gallery from "../assets/Gallery.png";
const MoveUS = batch(MoveIn(1500,0),MoveOut(-1500,0));
export default function GallerySection(data){
    return(
        <div className='whyUsSection'> 
            <Animator animation={Sticky(data.left)}>
                <p className='absolute font-Maven left-[15vw] top-[-20vw] font-semibold text-[#39AEA8] text-[10vw] w-[100vw]'>Gallery</p>
                <Animator animation={MoveUS}>
                    <img src={Gallery} className='scale-150'/>
                </Animator>
             </Animator>
        </div>
    );
}