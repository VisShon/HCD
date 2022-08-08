import React from 'react'

function ProjCard({data,title,funding,profName,setSelectedProj, setDescription, selectedProj, index}) {
    const cardClickHandler=()=>{
        setSelectedProj(index);
        setDescription(data);
    }
  return (
    <div className={" ml-10 bg-[#D0E2DF] rounded-lg min-w-[20rem] h-[12rem] p-5 relative z-[0] overflow-hidden "+((index==selectedProj)?(" drop-shadow-xl"):(" "))} onClick={cardClickHandler}>
        <h1 className="absolute w-[50%] z-[2] font-[700]">{
            title.length==60?title:title.substring(0,60)
        }</h1>
        <p className="absolute right-5 bottom-5 z-[2]">~ {funding}</p>
        <h2 className="absolute z-[0] right-[-2rem] bottom-[-7rem] font-[800] text-[15rem] text-[#40ada775]">{profName.substring(4,5).toUpperCase()}</h2>
    </div>
  )
}

export default ProjCard