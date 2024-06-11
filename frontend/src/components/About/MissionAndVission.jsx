import React from "react";
import speaker from "../../assets/speaker.png";
import '../../styles/landing.css'


export default function MissionAndVission({data}){
    return(
        <>
        <div className="MissionVisionContainer">
            <div className="headingContainer">
                <h1>{data.heading}</h1>
                <p className="small:hidden">{data.body}</p>
                
                <img src={speaker}  width="400" alt="Speaker"/>

            </div>
            <div className="listContainer ">
                {
                    data.programObjectives.map((obj) => {
                        return (
                            <div className="listObj">
                                <span className="listObjNum">
                                    {obj.id}
                                </span>
                                <span className="listObjBody">
                                    {obj.body}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        </>
    );
}