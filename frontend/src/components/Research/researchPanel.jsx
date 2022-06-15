import React from 'react'
function researchPanel(data){

    return (
      <>
        <div id='panel' style={{backgroundColor:data.color}}>
              <div id='logoSec'>
                  <img id='logo' src={require("../../assets/"+data.logo)}/>
              </div>
              <div>
                  <img id='panelImage' src={require("../../assets/"+data.image)}/>
              </div>
        </div>
      </>
    )
}
export default researchPanel