import React from 'react'

function Sponsor(data) {
  return (
    <div className="group text-center text-[#616161] mx-10 flex justify-center">
        <img src={require("../../assets/collabs/"+ data.image)}/>
        <p className="font-[600] group-hover:text-[#39AEA8]">{data.name}</p>
        <p>{data.description}</p>
    </div>
  )
}

export default Sponsor