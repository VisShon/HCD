import '../styles/landing.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import MainSection from '../components/About/mainSection';
import WhyUsSection from '../components/About/whyUsSection';
import PeopleSection from '../components/About/peopleSection';
import GallerySection from '../components/About/gallerySection';
import NewsSection from '../components/About/newsSection';
import WhatHappensSection from '../components/About/whatHappensSection';
import LandingPageData from "../data/landingPageData.json";
import MissionAndVission from "../components/About/MissionAndVission";

function Landing() {
  return (
    <div>
          <NavBar logo={false}/>
          <MainSection cardContent={LandingPageData.cardContent}/>
          <WhyUsSection/>
          <PeopleSection content={LandingPageData.alumniData}/>
          <PeopleSection content={LandingPageData.studentData}/>
          <PeopleSection content={LandingPageData.paperData}/>
          <PeopleSection content={LandingPageData.facultyData}/>
          {/* <WhatHappensSection/> */}
          <GallerySection />
          <MissionAndVission data={LandingPageData.missionVission}/>
          
          
          <NewsSection/>
          <Footer/>
    </div>
  );
}

export default Landing;
