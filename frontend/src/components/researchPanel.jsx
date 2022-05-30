import React from 'react'
import '../styles/research.css';

export default function researchPanel(data) {
  return (
    <>
        <div id='panel' style={{backgroundColor:data.color}}>
            <div id='logoSec'>
                <img id='logo' src={data.logo}/>
            </div>
            <div>
                <img src={data.image}/>
            </div>
        </div>
    </>
  );
}
