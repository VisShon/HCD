import sec1Img from "../../assets/academics/acadSec1Img.png";

export default function Section1({data}){
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
                    <img rel="preload" src={sec1Img} className="sec1Img" />
                </div>
            </div>
        </>
    );
}