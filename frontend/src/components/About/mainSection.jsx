import TopCard from "./topCard";
import BottomCard from "./bottomCard";
import video from '../../assets/final.mp4';

export default function MainSection(data){
    return(
        <>
            <TopCard />
            <BottomCard cardContent={data.cardContent}/>
            <video loop autoPlay muted id='bgrVideo' className='h-screen w-screen object-cover'>
                <source src={video} type="video/mp4"/>Your browser does not support the video tag.
            </video> 
        </>
    );
}