import React from 'react'
import data from '../../data/researchPageData.json'
import '../../styles/landing.css'
function newsSection() {
  return (
    <>
    <div className='newsSectionContainer'>
      <div className='flex items-center min-w-full justify-center my-4'>
        <h className="font-Archivo font-[200] text-[#414141] text-[6rem]  ml-[3rem]">NEWS</h>
      </div>
      <div id="newsContainer">
        <div id='section'>
            <h id="sectionHeading">Awards</h>
            {data.map((items, ind) =>(
              <div className="contentContainer" key={items.id}>
                <p>{ind+1}</p>
                <p >Towards Accessible and Inclusive Artificial Intelligence (AIAI): Building on Finnish and Indian Expertise, Experiences, and Diversity</p>
              </div>
            ))}
        </div>

        <div className="Divider"></div>

        <div id='section'>
            <h id="sectionHeading">Recents</h>
            {data.map((items, ind) =>(
              <div className="contentContainer" key={items.id}>
                <p>{ind+1}</p>
                <p >Towards Accessible and Inclusive Artificial Intelligence (AIAI): Building on Finnish and Indian Expertise, Experiences, and Diversity</p>
              </div>
            ))} 
        </div>
        <div className="Divider"></div>
        <div id='section'>
            <h id="sectionHeading">Conference</h>
            {data.map((items, ind) =>(
              <div className="contentContainer" key={items.id}>
                <p>{ind+1}</p>
                <p >Towards Accessible and Inclusive Artificial Intelligence (AIAI): Building on Finnish and Indian Expertise, Experiences, and Diversity</p>
              </div>
            ))}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default newsSection