import React from 'react'
import data from '../../data/newsData.json'
import '../../styles/landing.css'
function newsSection() {
  const recents = data.find(d=>d.title=='Recents')
  const awards = data.find(d=>d.title=='Awards')
  const conferences = data.find(d=>d.title=='Conferences')
  return (
    <>
    <div className='newsSectionContainer'>
      <div className='flex items-center min-w-full justify-center my-4'>
        <h className="font-Archivo font-[200] text-[#39AEA8] text-[6rem]  ml-[3rem]">NEWS</h>
      </div>
      <div id="newsContainer">
        <div id='section'>
            <h id="sectionHeading">Awards</h>
            {awards.data.map((items, ind) =>(
              <div className="contentContainer flex my-5" key={items.id}>
                <p className="mr-2">{ind+1}</p>
                <a href={items.link}>{items.decp}</a>
              </div>
            ))}
        </div>

        <div className="Divider"></div>

        <div id='section'>
            <h id="sectionHeading">Recents</h>
            {recents.data.map((items, ind) =>(
              <div className="contentContainer flex my-5" key={items.id}>
                <p className="mr-2">{ind+1}</p>
                <a href={items.link}>{items.decp}</a>
              </div>
            ))} 
        </div>
        <div className="Divider"></div>
        <div id='section'>
            <h id="sectionHeading">Conference</h>
            {conferences.data.map((items, ind) =>(
              <div className="contentContainer flex my-5" key={items.id}>
                <p className="mr-2">{ind+1}</p>
                <a href={items.link}>{items.decp}</a>
              </div>
            ))}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default newsSection