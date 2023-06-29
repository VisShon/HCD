import {Link} from "react-router-dom";
import React,{useState} from 'react'
import '../styles/navbar.css';
import logoImg from '../assets/logo.png';

export default function NavBar({logo, rel, bg=true}){


    const[isAcadClicked, setAcadClicked] = useState(false);
    const[isPeoplesClicked, setPeoplesClicked] = useState(false);
    const[isResearchClicked, setResearchClicked] = useState(false);
    const[isAboutClicked, setAboutClicked] = useState(false);

    const leaveHandler=()=>{
        setResearchClicked(false);
        setPeoplesClicked(false);
        setAcadClicked(false); 
        setAboutClicked(false);
    }
    const aboutClickHandler=()=>{
        setResearchClicked(false);
        setPeoplesClicked(false);
        setAcadClicked(false);
        setAboutClicked(true);
    }
    const acadClickHandler=()=>{
        setResearchClicked(false);
        setPeoplesClicked(false);
        setAcadClicked(true);
        setAboutClicked(false);
    }
    const peepClickHandler=()=>{
        setAcadClicked(false);
        setResearchClicked(false);
        setPeoplesClicked(true);
        setAboutClicked(false);
    }
    const resClickHandler=()=>{
        setAcadClicked(false);
        setPeoplesClicked(false);
        setResearchClicked(true);
        setAboutClicked(false);
    }

    return(
        <>  
            <div id={!rel?('navbarContainer'):('navbarContainer2')} className={"flex items-center "+logo?(""):("my-20")}>
                {
                    (logo)?(
                        <div className="rounded-br-[90px] bg-[#F1F1F1] items-center ">
                            <a href="iiitd.ac.in">
                                <img src = {logoImg} className="h-[10em] mx-[2vw] my-[1vw]"/>
                            </a>
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
                <div id='navbar' className='font-Archivo text-[#444343] my-20'>
                    {/* <Link className="w-[90%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]" to='/'>ABOUT</Link> */}
                    <div className={isAboutClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]" :" w-[90%] text-center mx-5"} onMouseOver={aboutClickHandler} onMouseOut={leaveHandler}>ABOUT
                        {isAboutClicked&&<div hidden={true} className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/'>Home </Link>
                            <Link id="subHeading" to='/Awards'>Awards</Link>
                        </div>}
                    </div>
                    <div className="navSep">|</div>

                    <div className={isAcadClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]" :" w-[90%] text-center mx-5"} onMouseOver={acadClickHandler} onMouseOut={leaveHandler}>ACADEMICS
                        {isAcadClicked&&<div hidden={true} className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/academics'>B.Tech. in CSD </Link>
                            <Link id="subHeading" to='/phd'>Ph.D</Link>
                            <Link id="subHeading" to='/Collaborations'>Collaborations</Link>
                            <Link id="subHeading" to='/StudentConduct'>Student Conduct Policy</Link>
                        </div>}
                    </div>

                    <div className="navSep">|</div>

                    <div className={isPeoplesClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]":" w-[90%] text-center mx-5"} onMouseOver={peepClickHandler} onMouseOut={leaveHandler}>PEOPLE
                        {isPeoplesClicked&&<div className='SelectedContent'>
                            <div  className='w-[80%] h-[0.1rem] bg-[#444343]'></div>
                            <Link id="subHeading" to='/Advisory'>Advisory</Link>
                            <Link id="subHeading" to='/faculty'>Faculty</Link>
                            <Link id="subHeading" to='/staff'>Staff</Link>
                            <Link id="subHeading" to='/PhdStudent'>PhD</Link>
                            <Link id="subHeading" to='/students'>Students</Link>
                        </div>}
                    </div>

                    <div className="navSep">|</div>

                    <div  className={isResearchClicked?"Selected w-[90%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]":" w-[90%] text-center mx-5"} onMouseOver={resClickHandler} onMouseOut={leaveHandler}>RESEARCH
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

                    <Link  className="w-[90%] text-center mx-5 hover:bg-[#f1f1f165] rounded-[0.5rem]" to='/contactUs'>CONTACT US</Link>
                </div>
                {bg&&<div className="w-[60.5%] h-[1.6rem] absolute top-[5rem] right-0 rounded-l-lg bg-[#f1f1f165] small:hidden"></div>}
            </div>
        </>
    )
}
