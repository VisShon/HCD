import '../styles/landing.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import MainSection from '../components/mainSection';
import WhyUsSection from '../components/whyUsSection';
import PeopleSection from '../components/peopleSection';
import GallerySection from '../components/gallerySection';
import NewsSection from '../components/newsSection';
import WhatHappensSection from '../components/whatHappensSection';
import LandingPageData from "../data/landingPageData.json";

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
          <WhatHappensSection/>
          {/* <GallerySection /> */}
          <NewsSection/>
          <Footer/>
    </div>
  );
}

export default Landing;
