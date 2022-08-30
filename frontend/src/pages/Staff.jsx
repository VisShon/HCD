import React from 'react'
import '../styles/faculty.css';
import NavBar from '../components/navbar';
import FacultyCard  from '../components/People/facultyCard';
import data from '../data/staffPageData.json'
import Footer from '../components/footer';
function Staff() {
  return (
    <>
        <NavBar logo={true} bg={false}/>
        <div id="topSection">
                <span id="heading" className='font-Archivo font-[200] text-[10vw] small:w-[100%]'>STAFF</span>
        </div>
        <div id="ContentFaculty" className="font-Maven text-[#000000] text-[1rem] flex justify-center">
            <div className="facultyContainer">
                    {data.map((prof,index)=>(
                    <FacultyCard image={prof.image} name={prof.name} description={prof.description}/>
                    ))}
            </div>

        </div>
    </>
);
}

export default Staff