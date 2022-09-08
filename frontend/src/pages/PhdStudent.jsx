import React from 'react'
import NavBar from '../components/navbar';
import ProfCard from '../components/Research/profCard'
import PubDescp from '../components/People/phdDes';
import data from "../data/phdStudentsdata.json";
import '../styles/research.css';
import {useState} from 'react';
import Footer from '../components/footer';
function ResearchPub() {

    const [selectedProf, setSelectedProf] = useState(null);
    const [displayProjects, setDisplayProjects] = useState([]);
    return (
        <>
            <NavBar logo={true} rel={false} bg={false}/>
            <div id="topSection">    
                <span id="heading" className='font-Archivo font-[200] text-[10vw]'>PHD</span>
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
                            "Please select a student to see thier bio"
                            ):(
                            displayProjects.map((publication, index) =>
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