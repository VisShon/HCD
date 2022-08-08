import React from 'react'
function researchPanel(data){

    return (
      <>
        <div id='panel' style={{backgroundColor:data.color}}>
              <div id='logoSec' style={{color:data.txtColor}}>
                  <img id='logo' src={require("../../assets/"+data.logo)}/>
                  <h1 className='mt-5 font-[600] text-center w-[60%]'>{data.title}</h1>
                  <span className="w-[60%] text-center">{data.subtitle}</span>
              </div>
              <div>
                  <img id='panelImage' src={require("../../assets/"+data.image)}/>
              </div>
        </div>
      </>
    )
}
export default researchPanel