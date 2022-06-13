import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/profCard'
import ProjDescp from '../components/projDescp';
import data from "../data/researchProjData.json";
import grace from '../assets/profsImg/richagupta.png'
import '../styles/research.css'
import { useState } from 'react';
import { useEffect } from 'react';

function ResearchProj(){
    const [selectedProf, setSelectedProf] = useState(null);
    const [displayProjects, setDisplayProjects] = useState([]);
    return (
        <>
            <NavBar logo={true} rel={false} />
            <div id="topSection">
            <span id="heading" className='font-Archivo font-[200] text-[10vw]'>PROJECTS</span>
            </div>
            <div id="projBody"> 
                <div id="profScroll">
                    {data.map((prof, index)=>(
                        <ProfCard data={prof} index={index} selectedProf={selectedProf} setSelectedProf={setSelectedProf} setDisplayProjects={setDisplayProjects}/>
                    ))}
                </div>
                <div id='publicationsSection' className="p-[2%]">
                    {displayProjects.map((project, index)=>
                        <ProjDescp data={project} index={index} />
                    )}
                </div>
            </div>
        </>
    )
}

export default ResearchProj