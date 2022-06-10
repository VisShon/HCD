import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/profCard'
import '../styles/research.css'

function ResearchProj() {
    const data = [
        {
            id: 1,
            image: '../assets/profsImg/Jainendra.png',
            name: 'Dr. Jainendra Shukla'
        },
        {
            id: 2,
            image: '../assets/profsImg/ratna-suri.png',
            name: 'Dr. Ratnadeep Suri'
        },
        {
            id: 3,
            image: '../assets/profsImg/richagupta.png',
            name: 'Dr. Richa Gupta'
        },
        {
            id: 4,
            image: '../assets/profsImg/amanparnami.png',
            name: 'Dr. Aman Parnami'
        },
        {
            id: 5,
            image: '../assets/profsImg/grace.png',
            name: 'Dr. Grace Eden'
        },
        {
            id: 6,
            image: '../assets/profsImg/ratn.png',
            name: 'Dr. Rajiv R Shah'
        }
    ];
  return (
    <>
        <NavBar logo={true}/>
        <div id="profScroll">
            {data.map((item,index)=>(
                <ProfCard  image={item.image} name={item.name}key={index}/>
            ))}
        </div>
    </>
  )
}

export default ResearchProj