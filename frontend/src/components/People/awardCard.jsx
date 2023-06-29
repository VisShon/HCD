import React from 'react'

function ProjCard({data,title,awarded,profName,setSelectedProj, setDescription, selectedProj, index}) {
    const cardClickHandler=()=>{
        setSelectedProj(index);
        setDescription(data);
    }
  return (
    <div className={" ml-10 bg-[#D0E2DF] rounded-lg min-w-[20rem] h-[12rem] p-5 pr-0 relative z-[0] overflow-hidden "+((index==selectedProj)?(" drop-shadow-xl"):(" "))} onClick={cardClickHandler}>
        <h1 className="absolute w-[75%] left-5 z-[2] font-[700]">{
            title.length==120?title:title.substring(0,120)
        }</h1>
        <p className="italic absolute left-5 bottom-10 z-[2]">Awarded to{awarded}</p>
        <h2 className="absolute left-5 bottom-5 z-[2]">{profName}</h2>
    </div>
  )
}

export default ProjCard