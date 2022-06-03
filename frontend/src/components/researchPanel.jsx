import React, { Component } from 'react'
function researchPanel(data){

  
    return (
      <>
        <div id='panel' style={{backgroundColor:data.color}}>
              <div id='logoSec'>
                  <img id='logo' src={data.logo}/>
              </div>
              <div>
                  <img id='panelImage' src={data.image}/>
              </div>
        </div>
      </>
    )
}
export default researchPanel