import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/Research/profCard'
import PubDescp from '../components/Research/pubDescp';
import data from "../data/researchPubData.json";
import '../styles/research.css';
import {useState} from 'react';
import Footer from '../components/footer';
function ResearchPub() {

    const [selectedProf, setSelectedProf] = useState(null);
    const [displayProjects, setDisplayProjects] = useState([]);

    const [selectedProfInArchive, setSelectedProfInArchive] = useState(null);
    const [displayProjectsInArchive, setDisplayProjectsInArchive] = useState([]);
    
    return (
        <>
            <NavBar logo={true} rel={false} bg={false}/>
            <div id="topSection">    
                <span id="heading" className='font-Archivo font-[200] text-[10vw]'>PUBLICATION</span>
            </div>
            <div className="projBody"> 
                <div className="researchProfScroll">
                    {data.filter((prof,_) => !prof.profInfo.archive).map((prof, index)=>(
                        <ProfCard data={prof} index={index} selectedProf={selectedProf} setSelectedProf={setSelectedProf} setDisplayProjects={setDisplayProjects}/>
                    ))}
                </div>
                <div className="researchPublicationsSection p-[2%]">
                    {
                        (selectedProf==null)?(
                            "Please select a professor to show publication"
                            ):(
                            displayProjects.map((publication, index) =>
                                <PubDescp data={publication} index={index} />
                            )
                        )
                    }
                </div>
            </div>

            <div class="text-center mt-10">    
                <span id="banner" className="font-Archivo  text-[#39AEA8] text-[3vw]">ARCHIVE</span>
            </div>

            <div className="projBody"> 
                <div className="researchProfScroll">
                    {data.filter((prof,_) => prof.profInfo.archive).map((prof, index)=>(
                        <ProfCard data={prof} index={index} selectedProf={selectedProfInArchive} setSelectedProf={setSelectedProfInArchive} setDisplayProjects={setDisplayProjectsInArchive}/>
                    ))}
                </div>
                <div className="researchPublicationsSection p-[2%]">
                    {
                        (selectedProfInArchive==null)?(
                            "Please select a professor to show publication"
                            ):(
                            displayProjectsInArchive.map((publication, index) =>
                                <PubDescp data={publication} index={index} />
                            )
                        )
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ResearchPub