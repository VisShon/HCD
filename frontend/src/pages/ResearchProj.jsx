import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/Research/profCard'
import ProjDescp from '../components/Research/projDescp';
import data from "../data/researchProjData.json";
import '../styles/research.css'
import { useState } from 'react';

function ResearchProj(){
    const [selectedProf, setSelectedProf] = useState(null);
    const [displayProjects, setDisplayProjects] = useState([]);
    return (
        <>
            <NavBar logo={true} rel={false} />
            <div id="topSection">    
                <span className='heading font-Archivo font-[200] text-[15vw] sm:text-[10vw] text-[#f1f1f1]'>PROJECTS</span>
            </div>
            <div className="projBody"> 
                <div className="profScroll">
                    {data.map((prof, index)=>(
                        <ProfCard data={prof} index={index} selectedProf={selectedProf} setSelectedProf={setSelectedProf} setDisplayProjects={setDisplayProjects}/>
                    ))}
                </div>
                <div className="publicationsSection p-[2%]">
                    {
                        (selectedProf==null)?(
                            "Please select a professor to show projects"
                            ):(
                            displayProjects.map((project, index) =>
                                <ProjDescp data={project} index={index} />
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ResearchProj