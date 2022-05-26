import './styles/App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import {ScrollContainer, ScrollPage} from "react-scroll-motion";
import MainSection from './components/mainSection';
import WhyUsSection from './components/whyUsSection';
import AlumniSection from './components/alumniSection';




function App(data) {
  return (
    <>
      <ScrollContainer>

          <NavBar/>

          <ScrollPage page={0}>
            <MainSection cardContent={data.cardContent}/>
          </ScrollPage>

          <ScrollPage page={1}>
            <WhyUsSection />
          </ScrollPage>

          <ScrollPage page={2}>
            <AlumniSection />
          </ScrollPage>

          <ScrollPage page={3}>
            <Footer/>
          </ScrollPage>

      </ScrollContainer>
    </>
  );
}

export default App;
