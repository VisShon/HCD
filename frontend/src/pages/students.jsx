import React from 'react'
import NavBar from '../components/navbar'
import data from '../data/studentPageData.json'
function students() {
  return (
    <>
      <NavBar logo={true}/>
      <div id="topSection">
          <span id="heading" className='font-Archivo font-[200] text-[10vw]'>STUDENTS</span>
      </div>
      <div className="studentBody">
        <div className="scrollContainer"></div>
        <div className="studentsContainer">
          <h>Btech 2021</h>
          <div>
            <div></div>
            <div id="studentInfo">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default students