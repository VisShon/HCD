import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/Research/profCard'
import AwardDescp from '../components/People/awardDescp';
import data from "../data/awardsPageData.json";
import '../styles/research.css'
import { useState } from 'react';
import AwardCard from '../components/People/awardCard';
import Footer from '../components/footer';

function ResearchProj(){
    const [selectedProj, setSelectedProj] = useState(null);
    const [description, setDescription] = useState(null);
    return (
        <>
            <NavBar logo={true} rel={false} bg={false}/>
            <div id="topSection">    
                <span id="heading" className='font-Archivo font-[200] text-[10vw] small:w-[100%]'>ACHIEVEMENTS</span>
            </div>
            <div className="projBody"> 
                <div className="profScroll">
                    {data.map((project, index)=>(
                        // <ProfCard data={prof} index={index} selectedProf={selectedProf} setSelectedProf={setSelectedProf} setDisplayProjects={setDisplayProjects}/>
                        //<AwardCard data={project} title={project.title} funding={project.fundedBy} profName={project.prof} selectedProj={selectedProj} setSelectedProj={setSelectedProj} setDescription={setDescription} index={index}/>
                        <AwardCard data={project} title={project.title} funding={project.awarded} profName={project.prof} selectedProj={selectedProj} index={index}/>
                    ))}
                </div>
                {/* <div className="publicationsSection p-[2%]">
                    {
                        (selectedProj==null)?(
                            "Please select a project to show full description"
                            ):(
                                <AwardDescp data={description}/>
                        )
                    }
                </div> */}
            </div>
            <Footer/>
        </>
    )
}

export default ResearchProj