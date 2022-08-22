import butterfly from "../../assets/academics/butterflyBGR.svg"
import '../../styles/academics.css';

export default function Section2({data,wind}){
    
    return(
        <>
        <div className="section2Container">
            {!wind.matches&&<img src={butterfly} />}
            {wind.matches&&<img className="self-start" src={butterfly} />}
            {wind.matches&&<img className="self-end" src={butterfly} />}

            <div className="textContainer">
                <div className="flex1">
                    <div className="left">
                        {data.leftText}
                    </div>
                    <div className="right">
                        {data.rightText}
                    </div>


                    {wind.matches&&
                    <div className="bottom">
                        {data.bottomText}
                    </div>}
                </div>


                {!wind.matches&&<div className="flex2">
                    <div className="bottom">
                        {data.bottomText}
                    </div>
                </div>}
            </div>
        </div>
        
        </>
    );
}