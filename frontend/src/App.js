import video from './assets/final.mp4';
import logo from './assets/logo.png';
import dropN from './assets/dropN.svg';
import './styles/App.css';
import useState from 'react';
import NavBar from './components/navbar';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
function App(props) {
  // const cardContent = useState(props.cardContent);
  return (
    <>
      <div className="relative">
        <NavBar/>
        <div id='topCard' className='card z-10 absolute'>
          <img id='logoImg' src={logo}/>
        </div> 

        <div id='bottomCard' className='card z-5 absolute right-0' >

          <div id='cardHead' className='font-Archivo text-[#424949]'>
              {props.cardContent.heading}
          </div>

          <div id='cardDesc' className='font-Maven'>
              {props.cardContent.description}
          </div>

          <div id='cardCTA' className='flex flex-row'>
            <div id='cardBtn'>
              <img src={dropN} width='25px'/>
            </div>
            <div className='mx-3 text-[18px] font-Maven'>Read News</div>
          </div>
          
        </div> 

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
