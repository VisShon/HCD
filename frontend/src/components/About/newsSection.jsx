import React from 'react'
import data from '../../data/researchPageData.json'
import '../../styles/news.css'
function newsSection() {
  return (
    <>
      <h className="font-Archivo font-[200] text-[#414141] text-[7rem]  ml-[3rem]">NEWS</h>
      <div id="newsContainer">
        <div id='section'>
            <h id="sectionHeading">Awards</h>
            {data.map((items) =>(
              <div id="contentContainer" key={items.id}>
                <p>1.</p>
                <p >Towards Accessible and Inclusive Artificial Intelligence (AIAI): Building on Finnish and Indian Expertise, Experiences, and Diversity</p>
              </div>
            ))}
        </div>

        <div className="Divider"></div>

        <div id='section'>
            <h id="sectionHeading">Recents</h>
            {data.map((items) =>(
              <div id="contentContainer" key={items.id}>
                <p>1.</p>
                <p >Towards Accessible and Inclusive Artificial Intelligence (AIAI): Building on Finnish and Indian Expertise, Experiences, and Diversity</p>
              </div>
            ))} 
        </div>
        <div className="Divider"></div>
        <div id='section'>
            <h id="sectionHeading">Conference</h>
            {data.map((items) =>(
              <div id="contentContainer" key={items.id}>
                <p>1.</p>
                <p >Towards Accessible and Inclusive Artificial Intelligence (AIAI): Building on Finnish and Indian Expertise, Experiences, and Diversity</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default newsSection