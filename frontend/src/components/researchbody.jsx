import React from 'react'
import '../styles/research.css';


function researchbody(data) {
  return (
    <div class="body-section">
        <div id="contentSpace">
            <h2 id="title" className="font-Archivo text-[5em] font-bold" style={{color: data.color}}>{data.title}</h2>
            <h id="info" className="font-Archivo text-[2em] font-semibold text-[#464646]">{data.info}</h>
            <p id="description" className="font-Maven text-[1.5em] text-[#464646] w-[80%]">{data.description}</p>
            <button id="btn" style={{backgroundColor: data.color}} className="font-Archivo font-semibold text-[#ffffff] w-[10%]">Visit Website</button>
        </div>
    </div>
  );
}

export default researchbody;
