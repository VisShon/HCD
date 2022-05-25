import video from './assets/final.mp4';
import './styles/App.css';
import NavBar from './components/navbar';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import BottomCard from './components/bottomCard';
import TopCard from './components/topCard';
const FadeUp = batch(Fade(), Move(), Sticky());
function App(data) {
  // const cardContent = useState(data.cardContent);
  return (
    <>
      <ScrollContainer>

          <NavBar/>

          <ScrollPage page={0}>
              <TopCard />
              <BottomCard cardContent={data.cardContent}/>
              <video loop autoPlay muted id='bgrVideo' className='h-screen w-screen object-cover'>
                <source src={video} type="video/mp4"/>Your browser does not support the video tag.
              </video> 
          </ScrollPage>
          
          <ScrollPage page={1}>
            <div id='whyUs_Page'> 
              <Animator animation={MoveIn(1000,0)}>
                <div className='font-Maven font-semibold text-[#39AEA8] text-[10vw]'>WHY US?</div>
              </Animator>
            </div>
          </ScrollPage>

      </ScrollContainer>
    </>
  );
}

export default App;
