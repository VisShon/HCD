import React from 'react'

function FacultyCard(data) {
  return (
    <div className="group text-center text-[#616161] mx-10  flex flex-col items-center">
        <img className="relative" src={require("../../assets/profsImg/"+data.image)}/>
        <p className="font-[600] group-hover:text-[#39AEA8]">{data.name}</p>
        <p className="w-90 ">{data.description}</p>
    </div>
  )
}

export default FacultyCard