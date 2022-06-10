import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/profCard'
import ProjDescp from '../components/projDescp';
import grace from '../assets/profsImg/grace.png'
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
        <div id="projBody"> 
            <div id="profScroll">
                {data.map((prof,Pindex)=>(
                    <ProfCard  img={grace} name={prof.name}key={Pindex}/>
                ))}
            </div>
            <div id='publicationsSection' className="p-[2%]">
                {data.map((decp,Dindex)=>(
                    <ProjDescp/>
                ))}
            </div>
        </div>
    </>
  )
}

export default ResearchProj