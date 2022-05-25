import video from './assets/final.mp4';
import './styles/App.css';
import NavBar from './components/navbar';
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


      </div>
    </>
  );
}

export default App;
