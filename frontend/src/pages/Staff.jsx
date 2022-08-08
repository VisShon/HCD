import React from 'react'
import '../styles/faculty.css';
import NavBar from '../components/navbar';
import FacultyCard  from '../components/People/facultyCard';
import data from '../data/staffPageData.json'
function Staff() {
  return (
    <>
        <NavBar logo={true} bg={false}/>
        <div className="facultyContainer">
            <div id="headingSection" className="hereis2">
                <span className='font-Archivo font-[600] text-[8vw] text-[#f1f1f1] '>STAFF</span>
            </div>
            <div className="flex justify-evenly w-[60%] datai">
                <div id="staffCardContainer" className='ml-10'>
                    {data.map((items)=>(<FacultyCard image={items.image} Name={items.name} Description={items.description} key={items.id}/>))}
                </div>
            </div>
        </div>
    </>
);
}

export default Staff