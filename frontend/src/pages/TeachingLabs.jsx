import React, { Component, useState } from 'react'
import '../styles/research.css';
import NavBar from '../components/navbar';
import Panel from '../components/researchPanel';
import Body from '../components/researchbody';

import backBtn from '../assets/bBtn.png'
import data from '../data/teachingPageData.json';

const arr = ['1','2','3']

function back(){
    window.location.reload(false);
}

function TeachingLabs() {

    const[isLogo,setIsLogo] = useState(true);
    const [panelID, setPanelID] = useState('0');
    
    function clicked(id){
        setIsLogo(false)
        for(var i = 0; i < arr.length; i++){
            if(arr[i]!== id){
                const hide = document.getElementById(arr[i]);
                hide.style="transition: opacity 0.2s; opacity: 0;pointer-events: none;"
            }
        }
        setPanelID(id);
        var panel = document.getElementById(id);
        
        // var body = document.getElementById('body-section');
        panel.style='transition: transform ease-out 0.5s;transform: translateX(-'+(20*(parseInt(id)-1) + 40)+'vw);pointer-events: none;';
        // body.style="transform: translateX(0);"

        const x = document.getElementById('backBtn');
        const y = document.getElementById('banner');
        x.hidden=false;
        y.style="transition: opacity ease-out 0.5s; opacity: 0"
    }

    return (
        <>
            <NavBar logo={isLogo} rel={false} />
            <button type="button" id='backBtn' hidden="true" onClick={()=>back()} >
                <img src={backBtn}/>
            </button>
            <div className="panelBody  ">
                <div id="banner" className="font-Maven font-semibold text-[#39AEA8] text-[4vw] w-[40%] p-[5%] relative"> Teaching Labs
                    <p className='font-Maven text-[1.2vw] text-[#555555] mt-10'>
                        The purpose of Teaching Labs is to learn together about practice and develop shared, collaborative practices. In this spirit, all participants engage in the learning and planning. The lab is organized around the learning cycle.
                    </p>
                </div>
                {data.map((labs)=>(<div id={labs.id} onClick={()=>clicked(labs.id)} key={labs.id}>
                    <Panel color={labs.color} logo={labs.logo} image={labs.Panelimage}/>
                </div> ))}
                <Body data={parseInt(panelID)==0?null:data[parseInt(panelID)-1]}/>
            </div>
        </>
    )
}

export default TeachingLabs