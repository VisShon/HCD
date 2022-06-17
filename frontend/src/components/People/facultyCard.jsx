import React from 'react'
import '../../styles/faculty.css';
function FacultyCard({data}) {
  return (
    <div className={"facultyCard"+(data.right?" rightAnimate":"")+(data.left?" leftAnimate":"")}>
        <img src={require("../../assets/profsImg/"+data.image)} className="rounded-full h-[5vw] w-[5vw] object-cover mb-[1rem]"/>
        <span className="font-Maven w-[60%] text-center"><b>{data.Name}</b></span>
        <span className="font-Maven  w-[60%] text-center">{data.Description}</span>
    </div>
  )
}

export default FacultyCard