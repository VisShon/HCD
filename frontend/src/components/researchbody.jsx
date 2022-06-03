import React from 'react'
import '../styles/research.css';


function researchbody(data) {
  return (
    <div class='body'>
      <div class="body-section">
        <div id="contentSpace">
            <h2 id="title" className="font-Archivo text-[3.5rem] font-bold" style={{color: data.color}}>{data.title}</h2>
            <h id="info" className="font-Archivo text-[1.5rem] font-semibold text-[#464646]">{data.info}</h>
            <p id="description" className="font-Maven text-[1.5vw] text-[#464646] w-[80%]">{data.description}</p>
            <a id="btn" style={{backgroundColor: data.color}} className="font-Archivo font-semibold text-[#ffffff] w-[10%] text-[1vw]" href={data.link}>Visit Website</a>
        </div>
    </div>
    </div>
  );
}

export default researchbody;
