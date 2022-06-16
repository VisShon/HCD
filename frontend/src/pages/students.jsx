import React from 'react'
import NavBar from '../components/navbar'
import '../styles/students.css'
import data from '../data/studentPageData.json'
import studentIcon from '../assets/studentIcon.png'
function students() {
  return (
    <>
      <NavBar logo={true}/>
      <div id="topSection">
          <span id="heading" className='font-Archivo font-[200] text-[10vw]'>STUDENTS</span>
      </div>
      <div className="studentBody">
        <div className="scrollContainer">
          {data.map((items,index)=>(
          <button key={index} className={"yearButton"}>
                {items.year}
            </button>))}
        </div>
          <div className="studentsContainer">
            <h className="font-Archivo text-center w-[100%] mb-10 text-[2rem]"><b>Btech 2021</b></h>
              {data.map((items,index)=>(<div className="flex mb-10">
                <img src={studentIcon} className="mx-5 "/>
                <div id="studentInfo">
                  <span><b>John Smith</b></span>
                  <span>johnsmith@iiitd.ac.in</span>
                  <span>2021346</span>
                </div>
              </div>))}
        </div>
      </div>
    </>
  )
}

export default students