import React, { Component, useState } from 'react'
import '../styles/research.css';
import Panel from '../components/Research/researchPanel';
import Body from '../components/Research/researchbody';
import NavBar from '../components/navbar';
import backBtn from '../assets/bBtn.png';
import data from '../data/researchPageData.json';

function back(){
    window.location.reload(false);
}
const arr = ['1','2','3','4','5']
function Research(){
    const [panelID, setPanelID] = useState('0');
    var wind = window.matchMedia("(max-width: 600px)")

    function clicked(id){
        for(var i = 0; i < arr.length; i++){
            if(arr[i]!= id){
                const hide = document.getElementById(arr[i]);
                hide.style="transition: opacity 0.2s; opacity: 0;pointer-events: none;"
            }
        }
        setPanelID(id);
        var panel = document.getElementById(id);
        if(wind.matches){
            panel.style='transition: transform ease-out 0.5s;transform: translateY(-'+(40*(parseInt(id)-1)+15)+'vh);pointer-events: none;'
        }
        else{
            panel.style='transition: transform ease-out 0.5s;transform: translateX(-'+(20*(parseInt(id)-1))+'vw);pointer-events: none;'
        }
        const x = document.getElementById('backBtn');
        const y = document.getElementById('title');
        x.hidden=false;
        y.hidden=true;
    }

    return (
        <div className="bg-[#39AEA8]">
            <NavBar logo={wind.matches} rel={!wind.matches}/>
            <button type="button" id='backBtn' hidden="true" onClick={()=>back()} >
                <img src={backBtn}/>
            </button>
            <div className="panelBody">
                {(wind.matches)&&<div id="banner" className="font-Archivo text-[#f1f1f1] text-[3vw] w-[40%] bottom-[-10vw] relative">RESEARCH LABS</div>}
                {data.map((labs)=>(<div id={labs.id} onClick={()=>clicked(labs.id)} key={labs.id}>
                    <Panel color={labs.color} logo={labs.logo} image={labs.Panelimage}/>
                </div> ))} 
            </div>
            <Body data={parseInt(panelID)==0?null:data[parseInt(panelID)-1]}/>
        </div>
    )
};

export default Research;