import React, { Component, useState } from 'react'
import '../styles/research.css';
import NavBar from '../components/navbar';
import Panel from '../components/Research/researchPanel';
import Body from '../components/Research/researchbody';

import backBtn from '../assets/bBtn.png'
import data from '../data/teachingPageData.json';

const arr = ['1','2','3']

function back(){
    window.location.reload(false);
}

function TeachingLabs() {
    const [panelID, setPanelID] = useState('0');
    var wind = window.matchMedia("(max-width: 600px)");
    
    function clicked(id){
        for(var i = 0; i < arr.length; i++){
            if(arr[i]!== id){
                const hide = document.getElementById(arr[i]);
                hide.style="transition: opacity 0.2s; opacity: 0;pointer-events: none;"
            }
        }
        setPanelID(id);
        var panel = document.getElementById(id);
        // var body = document.getElementById('body-section');
        if(wind.matches){
            panel.style='transition: transform ease-out 0.5s;transform: translateY(-'+(40*(parseInt(id)-1))+'vh);pointer-events: none;';
        }
        else{
            panel.style='transition: transform ease-out 0.5s;transform: translateX(-'+(20*(parseInt(id)-1)+40)+'vw);pointer-events: none;';
        }
        // body.style="transform: translateX(0);"

        const x = document.getElementById('backBtn');
        const y = document.getElementById('banner');
        x.hidden=false;
        y.style="transition: opacity ease-out 0.5s; opacity: 0"
    }

    return (
        <div className="bg-[#f1f1f1]">
            <NavBar logo={true}  rel={false} bg={false}/>
            <button type="button" id='backBtn' hidden="true" onClick={()=>back()} >
                <img src={backBtn}/>
            </button>
            <div className="panelBody">
                <div id="banner" className="font-Archivo  text-[#39AEA8] text-[3vw] w-[40%]  bottom-[-5vw] relative p-10 small:bottom-0 small:p-0 small:text-[3vh] small:w-[100%] small:text-center"> TEACHING LABS
                    {!(wind.matches)&&<p className='font-Maven  text-[1.2vw] text-[#555555] mt-10'>
                        The purpose of Teaching Labs is to learn together about practice and develop shared, collaborative practices. In this spirit, all participants engage in the learning and planning. The lab is organized around the learning cycle.
                    </p>}
                </div>
                {data.map((labs)=>(<div id={labs.id} onClick={()=>clicked(labs.id)} key={labs.id}>
                    <Panel color={labs.color} logo={labs.logo} image={labs.Panelimage} title={labs.title} subtitle={labs.subtitle} txtColor = {"#ffffff"}/>
                </div> ))}
                <Body data={parseInt(panelID)==0?null:data[parseInt(panelID)-1]}/>
            </div>
        </div>
    )
}

export default TeachingLabs