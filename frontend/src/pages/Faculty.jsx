import React, {useState }from 'react'
import '../styles/faculty.css';
import NavBar from '../components/navbar';
import data from "../data/facultyPageData.json"
import Button from '../components/People/facultyButton'
import FacultyCard from '../components/People/facultyCard';
function Faculty(){

    const[buttonSelected,setButtonSelected] = useState("Faculty");
    const[facultyData,setFacultyData] = useState(data.find(d=>d.title=="Faculty").data);

    var wind = window.matchMedia("(max-width: 600px)")
    
    return(
        <>
            <NavBar logo={true} bg={false}/>
            <div id="topSectionFaculty" >    
                <span id="headingFaculty" className='font-Archivo font-[200] text-[10vw] small:w-[100%]'>FACULTY</span>
                {/* {!wind.matches&&<div className="facultyImage bottom-[-12rem] w-[3vw]">
                        <img src={FacultyImg} className="object-fill"/>
                </div>} */}
            </div>
            <div id="ContentFaculty" className="font-Maven text-[#000000] text-[1rem] flex justify-center">


                {/* <div className="absolute bottom-0 left-[35%]">
                    <Planet orbitStyle={(defaultStyle) => ({
                        ...defaultStyle,
                    })}
                    centerContent={<div className="w-[30vw]">
                        <img src={HCD} className="object-fill"/>
                    </div>}
                    orbitRadius={300}
                    hideOrbit
                    autoClose>
                        {data.map((prof, index)=>(<FacultyBlobs image={prof.image} name={prof.name} education={prof.description} key={index}/>))}
                    </Planet>
                </div> */}
                <div className="buttonsss">
                    {data.map((items,index)=>(<Button Data={data} Content={items.title} setFacultySelected={setButtonSelected} setFacultyData={setFacultyData} key={index}/>))}
                </div>

                <div className="facultyContainer">
                     {facultyData.map((prof,index)=>(
                        <FacultyCard image={prof.image} name={prof.name} description={prof.description}/>
                     ))}
                </div>

            </div>
        </>
    );
}
export default Faculty;
