import {Link} from "react-router-dom";
import React,{useState} from 'react'
import '../styles/navbar.css';
import logoImg from '../assets/logo.png';

export default function NavBar({logo}){


    const[isAcadClicked, setAcadClicked] = useState(false);
    const[isPeoplesClicked, setPeoplesClicked] = useState(false);
    const[isResearchClicked, setResearchClicked] = useState(false);
    const leaveHandler=()=>{
        setResearchClicked(false);
        setPeoplesClicked(false);
        setAcadClicked(false); 
    }
    const acadClickHandler=()=>{
        setResearchClicked(false);
        setPeoplesClicked(false);
        setAcadClicked(true);
    }
    const peepClickHandler=()=>{
        setAcadClicked(false);
        setResearchClicked(false);
        setPeoplesClicked(true);
    }
    const resClickHandler=()=>{
        setAcadClicked(false);
        setPeoplesClicked(false);
        setResearchClicked(true);
    }

    return(
        <>  
            <div id='navbarContainer' className={"flex items-center "+logo?(""):("my-20")}>
                {
                    (logo)?(
                        <div className="rounded-br-[90px] bg-[#F1F1F1] items-center ">
                            <img src = {logoImg} className="h-[10em] mx-[2vw] my-[1vw]"/>
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
                <div id='navbar' className='font-Archivo text-[#444343] my-20'>
                    <Link className="w-[20%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]" to='/'>ABOUT</Link>

                    <div>|</div>

                    <div className={isAcadClicked?"Selected w-[20%] text-center mx-5":" w-[20%] text-center mx-5"} onMouseOver={acadClickHandler} onMouseOut={leaveHandler}>ACADEMICS
                        {isAcadClicked&&<div hidden={true} className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/academics'>B.Tech. in CSD </Link>
                            <Link id="subHeading" to='/phd'>Ph.D.</Link>
                            <Link id="subHeading" to='/studentConduct'>Student Conduct Policy</Link>
                        </div>}
                    </div>

                    <div>|</div>

                    <div className={isPeoplesClicked?"Selected w-[20%] text-center mx-5":" w-[20%] text-center mx-5"} onMouseOver={peepClickHandler} onMouseOut={leaveHandler}>PEOPLE
                        {isPeoplesClicked&&<div className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/faculty'>Faculty</Link>
                            <Link id="subHeading" to='/staff'>Staff</Link>
                            <Link id="subHeading" to='/students'>Students</Link>
                        </div>}
                    </div>

                    <div>|</div>

                    <div  className={isResearchClicked?"Selected w-[20%] text-center mx-5":" w-[20%] text-center mx-5"} onMouseOver={resClickHandler} onMouseOut={leaveHandler}>RESEARCH
                        {isResearchClicked&&
                        <div className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/researchLabs'>Research Labs</Link>
                            <Link id="subHeading" to='/teachingLabs'>Teaching Labs</Link>
                            <Link id="subHeading" to='/researchProjects'>Projects</Link>
                            <Link id="subHeading" to='/researchPublication'> Publications</Link>
                        </div>
                        }                       
                    </div>

                    <div>|</div>

                    <Link  className="w-[20%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]" to='/commingsoon'>CONTACT US</Link>
                </div>
            </div>
        </>
    )
}
