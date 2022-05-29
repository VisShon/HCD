import '../styles/landing.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import {ScrollContainer, ScrollPage} from "react-scroll-motion";
import MainSection from '../components/mainSection';
import WhyUsSection from '../components/whyUsSection';
import PeopleSection from '../components/peopleSection';
import GallerySection from '../components/gallerySection';
import LandingPageData from "../data/landingPageData.json";

function Landing() {
  return (
    <>
      <ScrollContainer>

          <NavBar/>

          <ScrollPage page={0}>
            <MainSection cardContent={LandingPageData.cardContent}/>
          </ScrollPage>

          <ScrollPage page={1}>
            <WhyUsSection />
          </ScrollPage>

          <ScrollPage page={2}>
            <PeopleSection content={LandingPageData.alumniData}/>
          </ScrollPage>

          <ScrollPage page={3}>
            <PeopleSection content={LandingPageData.studentData}/>
          </ScrollPage>

          <ScrollPage page={4}>
            <PeopleSection content={LandingPageData.paperData}/>
          </ScrollPage>

          <ScrollPage page={5}>
            <PeopleSection content={LandingPageData.facultyData}/>
          </ScrollPage>

          <ScrollPage page={6}>
            <GallerySection />
          </ScrollPage>
          
          <ScrollPage page={7}>
            <Footer/>
          </ScrollPage>

      </ScrollContainer>
    </>
  );
}

export default Landing;
