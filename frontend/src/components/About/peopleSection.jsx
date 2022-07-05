import "../../styles/peopleSection.css";

export default function PeopleSection({content}){

    return(
        <div className={"peopleSection "+content.CSSclassName}>
            <img src={require("../../assets/"+content.Picture)}  className='self-start object-cover h-[65vh] z-10 aspect-video rounded-br-[4em] imgi' />
            <div className='SectionHeading absolute right-[-1em] z-10 font-Archivo text-[#ffffff] text-[8vw]'>
                {content.heading}
            </div>
            <div className='flex  items-center  absolute z-0 font-Archivo text-[#ffffff] text-[8vw] bottom-0 my-10 conti'>
                <span className='mx-10'>
                    {content.stat}
                </span>
                <span className='font-Maven  text-[1.5rem] max-w-[40%] mx-10 my-10 conti'>
                    {content.description}
                </span>
            </div>
        </div>
    );
}