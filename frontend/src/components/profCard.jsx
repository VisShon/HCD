import React from 'react'
import {useState } from 'react';
import '../styles/profCard.css'
import Shadow from '../assets/shadow.png'

function ProfCard(data) {
    const[clicked,setClicked] = useState(false);
    const cardClickhandler=()=>{
        setClicked(true);
    }
    return (
      <div className={clicked? 'profCard profCard-Selected':'profCard'} onClick={cardClickhandler}>
          <img className={clicked?'profImgSelected':'profImg'} src={data.img}/>
          <img className='h-[100%] w-[100%] absolute transition: hidden ease-out 0.5s;' hidden={!clicked} src={Shadow}/>
          <div className="font-Archivo text-[1rem] font-semibold text-[#ffffff] absolute top-[80%] left-0 right-0 pl-2 pr-2 text-center">
             {data.name}
          </div>
      </div>
    )
}

export default ProfCard;
