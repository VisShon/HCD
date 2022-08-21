import NavBar from "../components/navbar";
import data from "../data/academicsPageData.json";
import "../styles/academics.css";
import Section1 from "../components/Academics/section1";
import Section2 from "../components/Academics/section2";
import Section3 from "../components/Academics/section3";
import Section4 from "../components/Academics/section4";
import Section5 from "../components/Academics/section5";

export default function Academics(){
     var wind = window.matchMedia("(max-width: 600px)")
    return(
        <>
            <NavBar logo={true} rel={false} bg={false} />
            <Section1 data={data.section1} wind={wind}/>
            <Section2 data={data.section2}wind={wind}/>
            <Section3 data={data.section3} wind={wind}/>
            <Section4 data={data.section4} wind={wind}/>
            <Section5 data={data.section5} wind={wind}/>
        </>
    );
}