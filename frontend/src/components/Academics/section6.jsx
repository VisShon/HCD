import phdImg from "../../assets/academics/PHDimg.svg";
import NavBar from "../navbar";

export default function Section6({data}){
    return(
        <>
            <NavBar logo={true}/>
            <div className="section6Container">
                <span className="infoContainer">
                    <h1>{data.heading}</h1>
                    <p>{data.body}</p>
                    <h4>For more details please visit <a href={data.redirect.link}>{data.redirect.text}</a></h4>
                </span>
                <span className="imgContainer">
                    <img src={phdImg}></img>
                </span>
            </div>
        </>
    );
}