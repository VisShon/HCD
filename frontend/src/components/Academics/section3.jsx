import admissionImg from "../../assets/academics/admissions.svg";
import admissionImgMobile from "../../assets/academics/admission.png";
import '../../styles/academics.css';

export default function Section3({data,wind}){
    return(
        <>
        <div className="section3Container">
            <div className="imgContainer small:flex small:justify-center">
                <img src={wind.matches?admissionImgMobile:admissionImg} />
            </div>
            <div className="infoContainer">
                <h1>{data.heading}</h1>
                <p>{data.body}</p>
            </div>
        </div>
        </>
    );
}