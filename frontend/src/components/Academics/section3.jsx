import admissionImg from "../../assets/academics/admissions.svg";

export default function Section3({data}){
    return(
        <>
        <div className="section3Container">
            <div className="imgContainer">
                <img src={admissionImg} />
            </div>
            <div className="infoContainer">
                <h1>{data.heading}</h1>
                <p>{data.body}</p>
            </div>
        </div>
        </>
    );
}