import React from 'react'
import '../styles/faculty.css';
import NavBar from '../components/navbar';
import Sponors  from '../components/Academics/Sponsor';
import data from '../data/collabs.json'
function Collaborations() {
  return (
<>
            <NavBar logo={true} bg={false}/>  
            <div id="topSection">
                <span id="heading" className='font-Archivo font-[200] text-[10vw] small:w-[100%]'>COLLAB</span>

            </div>
            <div id="ContentFaculty" className="font-Maven text-[#000000] text-[1rem] flex justify-center">
                <div className="collabContainer">
                     {data.map((prof,index)=>(
                        <Sponors image={prof.image}/>
                     ))}
                </div>

            </div>
            
        </>
);
}
export default Collaborations;