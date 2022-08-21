import sec1Img from "../../assets/academics/acadSec1Img.png";
import sec1ImgMobile from "../../assets/academics/acadSec1Mobile.png";

export default function Section1({data,wind}){
    return(
        <>
            <div className="section1Container">
                <span className="sec1Info">
                    <h1>
                        {data.headingBlack}
                    </h1>
                    <h2>
                        {data.headingBold}
                    </h2>
                    <p className="infoContent">
                        {data.body}
                    </p>
                </span>
                <div className="sec1ImgContainer">
                    <img rel="preload" src={!wind.matches?sec1Img:sec1ImgMobile} className="sec1Img" />
                </div>
            </div>
        </>
    );
}