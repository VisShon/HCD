import React from 'react'
import '../styles/faculty.css';
import NavBar from '../components/navbar';
import FacultyCard  from '../components/People/facultyCard';
import data from '../data/advisory.json'
import Footer from '../components/footer';
function Advisory() {
  return (
    <>
        <NavBar logo={true} bg={false}/>
        <div id="topSection">
                <span id="heading" className='font-Archivo font-[200] text-[10vw] small:w-[100%]'>ADVISORY</span>
        </div>
        <div id="ContentFaculty" className="font-Maven text-[#000000] text-[1rem] flex justify-center">
            <div className="advisory">
                    {data.map((prof,index)=>(
                    <FacultyCard image={prof.image} name={prof.name} description={prof.description}/>
                    ))}
            </div>

        </div>
    </>
);
}

export default Advisory;