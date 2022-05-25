import video from './assets/final.mp4';
import './styles/App.css';
import NavBar from './components/navbar';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import BottomCard from './components/bottomCard';
import TopCard from './components/topCard';

function App(data) {
  // const cardContent = useState(data.cardContent);
  return (
    <>
      <div className="relative">


        <NavBar/>
        <TopCard />
        <BottomCard cardContent={data.cardContent}/>

        <video loop autoPlay muted id='bgrVideo' className='h-screen w-screen object-cover'>
          <source src={video} type="video/mp4"/>Your browser does not support the video tag.
        </video> 

        <ScrollContainer>
          <ScrollPage>

              <Animator animation={MoveOut(0, -200)}>
                <div id='whyUs_Page'> 
                  <div className='font-Maven font-semibold text-[#39AEA8] text-[10vw]'>WHY US?</div>
                </div>
              </Animator>

          </ScrollPage>

        </ScrollContainer>

      </div>
    </>
  );
}

export default App;
