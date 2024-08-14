import {Link} from "react-router-dom";
import React,{useState} from 'react'
import '../styles/navbar.css';
import logoImg from '../assets/logo.png';

export default function NavBar({logo, rel, bg=true}){


    const[isAcadClicked, setAcadClicked] = useState(false);
    const[isPeoplesClicked, setPeoplesClicked] = useState(false);
    const[isResearchClicked, setResearchClicked] = useState(false);
    const[isNewsClicked, setNewsClicked] = useState(false);
    const[isEventsClicked, setEventsClicked] = useState(false);

    const leaveHandler=()=>{
        setResearchClicked(false);
        setPeoplesClicked(false);
        setAcadClicked(false);
        setNewsClicked(false); 
        setEventsClicked(false);
    }
    const acadClickHandler=()=>{
        setResearchClicked(false);
        setPeoplesClicked(false);
        setAcadClicked(true);
        setNewsClicked(false);
        setEventsClicked(false);
    }
    const peepClickHandler=()=>{
        setAcadClicked(false);
        setResearchClicked(false);
        setPeoplesClicked(true);
        setNewsClicked(false);
        setEventsClicked(false);
    }
    const resClickHandler=()=>{
        setAcadClicked(false);
        setPeoplesClicked(false);
        setResearchClicked(true);
        setNewsClicked(false);
        setEventsClicked(false);
    }
    const newsClickHandler=()=>{
        setAcadClicked(false);
        setPeoplesClicked(false);
        setResearchClicked(false);
        setNewsClicked(true);
        setEventsClicked(false);
    }
    const eventsClickHandler=()=>{
        setAcadClicked(false);
        setPeoplesClicked(false);
        setResearchClicked(false);
        setNewsClicked(false);
        setEventsClicked(true);
    }

    return(
        <>  
            <div id={!rel?('navbarContainer'):('navbarContainer2')} className={"flex items-center "+logo?(""):("my-20")}>
                {
                    (logo)?(
                        <div className="rounded-br-[90px] bg-[#F1F1F1] items-center ">
                            <a href="/">
                                <img src = {logoImg} className="h-[10em] mx-[2vw] my-[1vw]"/>
                            </a>
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
                <div id='navbar' className='font-Archivo text-[#444343] my-20'>
                    {/* 
                    // ABOUT US PAGE IS NOT THERE
                    <Link className="w-[90%] text-center mx-5 hover:bg-[#FFFFFFCC] rounded-[0.5rem]" to='/'>ABOUT</Link> */}

                    {/* <div className="navSep">|</div> */}

                    <div className={isEventsClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#FFFFFFCC] rounded-[0.5rem]" :" w-[90%] text-center mx-5"} onMouseOver={eventsClickHandler} onMouseOut={leaveHandler}>EVENTS
                        {isEventsClicked&&<div hidden={true} className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/Events24'>2023-2024 </Link>
                        
                        </div>}
                    </div>
                    
                    <div className="navSep">|</div>



                    <div className={isNewsClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#FFFFFFCC] rounded-[0.5rem]" :" w-[90%] text-center mx-5"} onMouseOver={newsClickHandler} onMouseOut={leaveHandler}>NEWS
                        {isNewsClicked&&<div hidden={true} className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/Announcements'>Announcements </Link>
                            <a id="subHeading" href="https://1pxdesignconf.iiitd.edu.in/" target="_blank">1Pixel Design Conference</a>
                            <a id="subHeading" href="https://iiitd.ac.in/dss/" target="_blank">Design Summer School</a>
                            <a id="subHeading" href="https://iiitd.ac.in/media-coverages" target="_blank">Media Coverage</a>
                            <a id="subHeading" href="https://www.iiitd.ac.in/newsletters" target="_blank">Newsletters</a>
                            <a id="subHeading" href="https://iiitd.ac.in/careers/" target="_blank">Careers</a>
                            

                        </div>}
                    </div>
                    
                    <div className="navSep">|</div>
                    


                    <div className={isAcadClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#FFFFFFCC] rounded-[0.5rem]" :" w-[90%] text-center mx-5"} onMouseOver={acadClickHandler} onMouseOut={leaveHandler}>ACADEMICS
                        {isAcadClicked&&<div hidden={true} className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <a id="subHeading" href="https://www.iiitd.ac.in/admission" target="_blank">Admissions</a>
                            <Link id="subHeading" to='/academics'>B.Tech. in CSD </Link>
                            <Link id="subHeading" to='/phd'>Ph.D</Link>
                            <a id="subHeading" href="https://techtree.iiitd.edu.in/" target="_blank">Courses</a>
                            <Link id="subHeading" to='/Collaborations'>Collaborations</Link>
                            <a id="subHeading" href="https://www.iiitd.ac.in/academics/resources" target="_blank">Guidelines</a>
                            <Link id="subHeading" to='/StudentConduct'>Student Conduct Policy</Link>
                            <a id="subHeading" href="https://iiitd.ac.in/placement" target="_blank">Placements</a>

                        </div>}
                    </div>

                    <div className="navSep">|</div>

                    

                    <div className={isPeoplesClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#FFFFFFCC] rounded-[0.5rem]":" w-[90%] text-center mx-5"} onMouseOver={peepClickHandler} onMouseOut={leaveHandler}>PEOPLE
                        {isPeoplesClicked&&<div className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/Advisory'>Advisory</Link>
                            <Link id="subHeading" to='/faculty'>Faculty</Link>
                            <Link id="subHeading" to='/staff'>Staff</Link>
                            <Link id="subHeading" to='/PhdStudent'>PhD</Link>
                            <Link id="subHeading" to='/students'>Students</Link>
                            <a id="subHeading" href="https://alumni.iiitd.ac.in/" target="_blank">Alumni</a>
                            
                            

                        </div>}
                    </div>

                    <div className="navSep">|</div>

                    <div  className={isResearchClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#FFFFFFCC] rounded-[0.5rem]":" w-[90%] text-center mx-5"} onMouseOver={resClickHandler} onMouseOut={leaveHandler}>RESEARCH
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

                    <div className="navSep">|</div>

                    <Link  className="w-[90%] text-center mx-5 hover:bg-[#FFFFFFCC] rounded-[0.5rem]" to='/contactUs'>CONTACT US</Link>
                    
                </div>
                {bg&&<div className="w-[70.5%] h-[1.6rem] absolute top-[5rem] right-0 rounded-l-lg bg-[#FFFFFFCC] small:hidden"></div>}
            </div>
        </>
    )
}
