import logo from './logo.svg';
import video from './assets/final.mp4';
import './App.css';

function App() {
  return (
    <>
      <video loop autoPlay muted id='bgrVideo'>
        <source src={video} type="video/mp4"/>Your browser does not support the video tag.
      </video> 
    </>
  );
}

export default App;
