import butterfly from "../../assets/academics/butterflyBGR.svg"
import '../../styles/academics.css';

export default function Section2({data}){
    return(
        <>
        <div className="section2Container">
            <img src={butterfly} />
            <div className="textContainer">
                <div className="flex1">
                    <div className="left">
                        {data.leftText}
                    </div>
                    <div className="right">
                        {data.rightText}
                    </div>
                </div>
                <div className="flex2">
                    <div className="bottom">
                        {data.bottomText}
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}