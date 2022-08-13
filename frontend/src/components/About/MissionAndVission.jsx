import React from "react";
import speaker from "../../assets/speeker.png";



export default function MissionAndVission({data}){
    return(
        <>
        <div className="section4Container">
            <div className="headingContainer">
                <h1>{data.heading}</h1>
                <p>{data.body}</p>
            </div>
            <div className="imgContainer">
                <img src={speaker}></img>
            </div>
            <div className="listContainer">
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