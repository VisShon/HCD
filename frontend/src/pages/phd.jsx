import phdImg from "../assets/academics/PHDimg.svg";
import NavBar from "../components/navbar";
import data from "../data/academicsPageData.json";
import "../styles/academics.css";
const PageData = data.section6;
export default function Section6(){
    return(
        <>
            <NavBar logo={true}  rel={true} />
            <div className="section6Container">
                <span className="infoContainer">
                    <h1>{PageData.heading}</h1>
                    <p>{PageData.body}</p>
                    <h4>For more details please visit <a href={PageData.redirect.link}>{PageData.redirect.text}</a></h4>
                </span>
                <span className="imgContainer">
                    <img src={phdImg}></img>
                </span>
            </div>
        </>
    );
}