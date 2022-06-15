import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/Research/profCard'
import ProjDescp from '../components/Research/projDescp';
import data from "../data/researchPubData.json";
import '../styles/research.css';
import {useState} from 'react';

function ResearchPub() {

    const [selectedProf, setSelectedProf] = useState(null);
    const [displayProjects, setDisplayProjects] = useState([]);
    return (
        <>
            <NavBar logo={true} rel={false} />
            <div id="topSection">
                <span id="heading" className='font-Archivo font-[200] text-[10vw]'>PUBLICATIONS</span>
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
                            "Please select a professor to show publication"
                            ):(
                            displayProjects.map((publication, index) =>
                                <ProjDescp data={publication} index={index} />
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ResearchPub