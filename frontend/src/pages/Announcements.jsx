// Announcements.jsx
// As of now, the components of frontend/src/pages/ResearchProj.jsx is being used so to avoid space we ahve used all its components in it too. It was created to display announcements on the website.

import React from 'react'
import NavBar from '../components/navbar';
import ProjDescp from '../components/Announcements/announceDescp';
import data from "../data/announcements.json";
import '../styles/announcements.css'
import { useState } from 'react';
import ProjCard from '../components/Announcements/announceCard';
import Footer from '../components/footer';

function ResearchProj(){
    const [selectedProj, setSelectedProj] = useState(null);
    const [description, setDescription] = useState(null);
    return (
        <>
            <NavBar logo={true} rel={false} bg={false}/>
            <div id="topSection">    
                <span id="heading" className='font-Archivo font-[200] text-[8vw] small:w-[100%]'>ANNOUNCEMENTS</span>
            </div>
            <div className="projBody"> 
                <div className="profScroll">
                    {data.map((project, index)=>(
                        // <ProfCard data={prof} index={index} selectedProf={selectedProf} setSelectedProf={setSelectedProf} setDisplayProjects={setDisplayProjects}/>
                        <ProjCard data={project} title={project.title} funding={project.fundedBy} profName={project.prof} selectedProj={selectedProj} setSelectedProj={setSelectedProj} setDescription={setDescription} index={index}/>
                    ))}
                </div>
                <div className="publicationsSection p-[2%]">
                    {
                        (selectedProj==null)?(
                            "Please select a Announcement to show full description"
                            ):(
                                <ProjDescp data={description}/>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ResearchProj