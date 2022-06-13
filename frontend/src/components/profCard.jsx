import React from 'react'
import {useState } from 'react';
import '../styles/profCard.css'
import Shadow from '../assets/shadow.png'

function ProfCard({data, index, selectedProf, setSelectedProf, setDisplayProjects}) {
    const cardClickHandler=()=>{
        setSelectedProf(index);
        setDisplayProjects(data.projects)
    }
    return (
      <div className={(index==selectedProf)?('profCard profCard-Selected'):('profCard')} onClick={cardClickHandler}>
          <img className='profImg' src={require("../assets/profsImg/"+data.profInfo.image)}/>
          <img className='h-[100%] w-[100%] absolute transition: hidden ease-out 0.5s;' hidden={!index==selectedProf} src={Shadow}/>
          <div className="font-Archivo text-[1rem] font-semibold absolute top-[80%] left-0 right-0 pl-2 pr-2 text-center">
            {data.profInfo.name}
          </div>
      </div>
    )
}

export default ProfCard;
