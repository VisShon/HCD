import '../styles/faculty.css';
import NavBar from '../components/navbar';
import FacultyImg from '../assets/facultyImg.png';
import HCD from '../assets/hcdFaculty.png';
import data from "../data/facultyPageData.json"
import { Planet } from 'react-planet';
import FacultyBlobs from '../components/People/facultyBlobs'


function Faculty(){


    var wind = window.matchMedia("(max-width: 600px)")
    
    return(
        <>
            <NavBar logo={true} bg={false}/>
            <div id={wind.matches?("topSection"):("topSectionFaculty")} className="relative" >    
                <span id="heading" className='font-Archivo font-[200] text-[10vw] small:w-[100%]'>FACULTY</span>
                {!wind.matches&&<div className="facultyImage bottom-[-12rem] w-[40vw]">
                        <img src={FacultyImg} className="object-fill"/>
                </div>}
            </div>
            <div id="ContentFaculty" className="font-Maven text-[#000000] text-[1rem]">


                <div className="absolute bottom-0 left-[35%]">
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
                </div>


            </div>
        </>
    );
}
export default Faculty;