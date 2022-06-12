import NavBar from "../components/navbar";
import data from "../data/academicsPageData.json";
import "../styles/academics.css";
import Section1 from "../components/Academics/section1";
import Section2 from "../components/Academics/section2";
import Section3 from "../components/Academics/section3";
import Section4 from "../components/Academics/section4";

export default function Academics(){
    return(
        <>
            <NavBar logo={true} />
            <Section1 data={data.section1} />
            <Section2 data={data.section2}/>
            <Section3 data={data.section3} />
            <Section4 data={data.section4} />
        </>
    );
}