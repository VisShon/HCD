import video from './assets/final.mp4';
import alumn from './assets/alumini.png';
import './styles/App.css';
import NavBar from './components/navbar';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import BottomCard from './components/bottomCard';
import TopCard from './components/topCard';
const MoveUS = batch(MoveIn(1500,0),MoveOut(-1500,0));
const MoveAlumn = batch(MoveOut(-1500,0));
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
              <Animator animation={MoveUS}>
                <div className='font-Maven font-semibold text-[#39AEA8] text-[10vw]'>WHY CHOOSE HCD?</div>
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage page={2}>
            <div id='Alumni_Page'> 
              <Animator animation={MoveAlumn}>
                <img src={alumn}  className='h-screen w-screen object-cover z-0' />
              </Animator>
                <div id='AlumniTXT' className='absolute z-10 font-Archivo text-[#ffffff] text-[10vw]'>ALUMNI</div>
            </div>
          </ScrollPage>

      </ScrollContainer>
    </>
  );
}

export default App;
