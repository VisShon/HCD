import '../styles/faculty.css';
import NavBar from '../components/navbar';
import FacultyCard  from '../components/People/facultyCard';
import FacultyImg from '../assets/facultyImg.png';
import data from "../data/facultyPageData.json"

function Faculty(){
    return(
        <>
            <NavBar logo={true}/>
            <div className="facultyContainer">
                <div id="headingSection">
                    <div className="facultyImage absolute bottom-0 w-[47vw] left-0">
                        <img src={FacultyImg} className=" object-fill"/>
                    </div>
                    <span className='font-Archivo font-[600] text-[8vw] text-[#f1f1f1]'>FACULTY</span>
                </div>
                <div className="flex justify-between w-[60%]">
                    <div id="profCardContainer" className='ml-10'>
                        {data.map((items)=>(
                            (<FacultyCard left={true} image={items.image} Name={items.name} Description={items.description} key={items.id}/>)
                        ))}
                    </div>
                    <div id="profCardContainer">
                        {data.map((items)=>(
                            (<FacultyCard right={true} image={items.image} Name={items.name} Description={items.description} key={items.id}/>)
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Faculty;