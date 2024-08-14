import React, { Component, useState } from 'react'
import '../styles/research.css';
import Panel from '../components/Research/researchPanel';
import Body from '../components/Research/researchbody';
import NavBar from '../components/navbar';
import backBtn from '../assets/bBtn.png';
import data from '../data/researchPageData.json';
import Footer from '../components/footer';

function back(){
    window.location.reload(false);
}
const numLabs = data.length;

function Research(){
    const [panelID, setPanelID] = useState('0');
    var wind = window.matchMedia("(max-width: 600px)")

    function clicked(id){
        for(var i = 1; i <= numLabs; i++){
            if(i != id){
                const hide = document.getElementById(i);
                hide.style="transition: opacity 0.2s; opacity: 0;pointer-events: none;"
            }
        }
        setPanelID(id);
        var panel = document.getElementById(id);
        if(wind.matches){
            panel.style='transition: transform ease-out 0.5s;transform: translateY(-'+(40*(parseInt(id)-1))+'vh);pointer-events: none;'
        }
        else{
            const xposInPx = panel.getBoundingClientRect().x;
            panel.style='transition: transform ease-out 0.5s;transform: translateX(-'+(xposInPx)+'px);pointer-events: none;'
        }
        const x = document.getElementById('backBtn');
        const y = document.getElementById('banner')
        x.hidden=false;
        if(y) {
            y.hidden = true;
        }
    }

    return (
        <div className="bg-[#f1f1f1]">
            <NavBar logo={wind.matches} rel={false} bg={true}/>
            <button type="button" id='backBtn' hidden="true" onClick={()=>back()} >
                <img src={backBtn}/>
            </button>
            <div className="panelBody">
                {(wind.matches)&&<div id="banner" className="font-Archivo  text-[#39AEA8] text-[3vw] w-[40%]  bottom-[-5vw] relative p-10 small:bottom-0 small:p-0 small:text-[3vh] small:w-[100%] small:text-center">RESEARCH LABS</div>}
                {data.map((labs)=>(<div id={labs.id} onClick={()=>clicked(labs.id)} key={labs.id}>
                    <Panel id="researchpanel" color={labs.color} logo={labs.logo} image={labs.Panelimage} title={labs.title} subtitle={labs.subtitle} txtColor = {labs.txtColor}/>
                </div> ))} 
            </div>
            <Body data={parseInt(panelID)==0?null:data[parseInt(panelID)-1]}/>
        </div>
        
    )
};

export default Research;